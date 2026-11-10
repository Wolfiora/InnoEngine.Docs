param(
    [Parameter(Mandatory)][string]$Facts,
    [Parameter(Mandatory)][string]$Project,
    [Parameter(Mandatory)][string]$Contract,
    [Parameter(Mandatory)][string]$OutputDirectory,
    [Parameter(Mandatory)][string]$OwnershipManifest,
    [string]$Catalog = 'artifacts/canonical-catalog.json',
    [string]$Root = (Get-Location).Path,
    [string]$XmlLinks,
    [switch]$SharedAbi
)

$ErrorActionPreference = 'Stop'
$Root = [IO.Path]::GetFullPath($Root)
$utf8 = [Text.UTF8Encoding]::new($false)
function Resolve-Owned([string]$Relative) {
    if ([IO.Path]::IsPathRooted($Relative)) { throw "Expected a repository-relative path: $Relative" }
    $absolute = [IO.Path]::GetFullPath((Join-Path $Root $Relative))
    $relation = [IO.Path]::GetRelativePath($Root, $absolute)
    if ($relation -eq '..' -or $relation.StartsWith('..' + [IO.Path]::DirectorySeparatorChar)) { throw "Path escapes the repository: $Relative" }
    $current = $Root
    foreach ($segment in $relation.Split([IO.Path]::DirectorySeparatorChar)) {
        $current = Join-Path $current $segment
        if ((Test-Path -LiteralPath $current) -and ((Get-Item -LiteralPath $current -Force).Attributes -band [IO.FileAttributes]::ReparsePoint)) {
            throw "Reference paths cannot traverse links: $Relative"
        }
    }
    return $absolute
}
function Hash([byte[]]$Bytes) { return [Convert]::ToHexString([Security.Cryptography.SHA256]::HashData($Bytes)).ToLowerInvariant() }
function Code([string]$Value) {
    $longest = 0
    foreach ($match in [regex]::Matches($Value, '`+')) { $longest = [Math]::Max($longest, $match.Length) }
    $delimiter = '`' * ($longest + 1)
    return $delimiter + $Value + $delimiter
}
function Xml-Text([System.Xml.XmlNode]$Node) {
    if ($Node.NodeType -in @('Text', 'Whitespace', 'SignificantWhitespace')) { return $Node.Value }
    if ($Node.LocalName -in @('see', 'seealso', 'paramref', 'typeparamref')) {
        $identity = @('langword', 'cref', 'name') | ForEach-Object { $Node.GetAttribute($_) } | Where-Object { $_ } | Select-Object -First 1
        if (-not $identity) { throw 'XML references require an explicit identity.' }
        if ($identity -match '^[A-Z]:') { $identity = $identity.Substring(2) }
        return Code $identity
    }
    if ($Node.LocalName -eq 'c') { return Code $Node.InnerText }
    if ($Node.LocalName -notin @('member', 'summary', 'remarks', 'param', 'typeparam', 'returns', 'value', 'exception')) {
        throw "Unsupported XML contract element; extend the renderer rather than dropping it: $($Node.LocalName)"
    }
    return (($Node.ChildNodes | ForEach-Object { Xml-Text $_ }) -join '')
}
function Normalize-Contract([string]$Text) {
    # XML indentation is not Markdown indentation. Preserve authored blocks and code fences.
    $sourceLines = $Text.Replace("`r`n", "`n").Split("`n")
    $nonblank = @($sourceLines | Where-Object { $_.Trim().Length -gt 0 })
    $indent = if ($nonblank.Count -gt 1) { ($nonblank | ForEach-Object { $_.Length - $_.TrimStart().Length } | Measure-Object -Minimum).Minimum } else { 0 }
    $normalized = ($sourceLines | ForEach-Object { if ($_.Length -ge $indent) { $_.Substring($indent).TrimEnd() } else { '' } }) -join "`n"
    # These are explicit Doxygen directives emitted by the binding generator, not Markdown syntax inference.
    $normalized = [regex]::Replace($normalized, '(?m)^@threadsafety ', "`n**Thread safety:** ")
    $normalized = [regex]::Replace($normalized, '(?m)^@since ', "`n**Upstream availability:** ")
    $normalized = [regex]::Replace($normalized, '(?m)^@sa ', "`n**See also:** ")
    return $normalized.Trim()
}
function Contract-Lines($Symbol) {
    if (-not $Symbol.documentation) {
        if ($Symbol.implicitDeclaration) { return 'Compiler-supplied declaration; initialization and lifetime follow the containing type.' }
        if ($SharedAbi) { return @() }
        throw "Explicit source contract has no XML; write its semantics before generating reference: $($Symbol.id)"
    }
    $settings = [Xml.XmlReaderSettings]::new()
    $settings.DtdProcessing = [Xml.DtdProcessing]::Prohibit
    $settings.XmlResolver = $null
    $reader = [Xml.XmlReader]::Create([IO.StringReader]::new($Symbol.documentation), $settings)
    try { $xml = [Xml.XmlDocument]::new(); $xml.XmlResolver = $null; $xml.Load($reader) } finally { $reader.Dispose() }
    $lines = [Collections.Generic.List[string]]::new()
    foreach ($node in $xml.DocumentElement.ChildNodes) {
        if ($node.NodeType -ne 'Element') { continue }
        $text = Normalize-Contract (Xml-Text $node)
        foreach ($mapping in $xmlLinkMap.links) { $text = $text.Replace('](' + $mapping.from + ')', '](' + $mapping.to + ')') }
        switch ($node.LocalName) {
            'summary' { $lines.Add($text) }
            'remarks' { $lines.Add('**Constraints:** ' + $text) }
            'param' { $lines.Add('**Parameter ' + (Code $node.GetAttribute('name')) + ':** ' + $text) }
            'typeparam' { $lines.Add('**Type parameter ' + (Code $node.GetAttribute('name')) + ':** ' + $text) }
            'returns' { $lines.Add('**Returns:** ' + $text) }
            'value' { $lines.Add('**Value:** ' + $text) }
            'exception' { $lines.Add('**Throws ' + (Code $node.GetAttribute('cref').Substring(2)) + ':** ' + $text) }
            default { throw "Unsupported XML contract section: $($node.LocalName)" }
        }
        $lines.Add('')
    }
    return $lines.ToArray()
}
function Anchor([string]$Id) { return 'api-' + (Hash $utf8.GetBytes($Id)).Substring(0, 16) }
function Member-Name($Symbol, $Type) { return $Symbol.id.Substring($Type.id.Length + 1).Split('(')[0] }
function Member-Group($Symbol, $Type) {
    $name = Member-Name $Symbol $Type
    if ($Symbol.kind -eq 'Field' -and $name.Contains('_')) {
        # Constant identifier families are navigation only; exact declarations remain independently mapped.
        $parts = $name.Split('_')
        $count = if ($parts[0] -eq 'SDL' -and $parts.Count -gt 2) { 3 } else { [Math]::Min(2, $parts.Count) }
        return 'Fields: ' + ($parts[0..($count - 1)] -join '_')
    }
    return $Symbol.kind + ': ' + $name
}
function Add-Declaration($Lines, $Symbol, $Type) {
    if (-not $captured.Add($Symbol.id)) { throw "Duplicate output symbol: $($Symbol.id)" }
    $label = if ($Symbol.id -ceq $Type.id) { 'Type declaration' } else { Code (Member-Name $Symbol $Type) }
    $Lines.AddRange([string[]]@(('## ' + $label), '', ('<a id="' + (Anchor $Symbol.id) + '"></a>'),
        ('<!-- api: ' + $Symbol.id + ' ' + $Symbol.signatureHash + ' -->'), '', '```csharp', $Symbol.signature, '```', ''))
    $Lines.AddRange([string[]]@(Contract-Lines $Symbol))
    $Lines.Add(''); $Lines.Add('[Source declaration](' + $binding.repository + '/blob/' + $sourceRevision + '/' + $Symbol.source + '#L' + $Symbol.line + ').'); $Lines.Add('')
}
function Prepare-Page([string]$Relative, $Lines) {
    $absolute = Resolve-Owned $Relative
    if ([IO.File]::Exists($absolute) -and -not $owned.ContainsKey($Relative)) { throw "Refusing to overwrite an authored page: $Relative" }
    $bytes = $utf8.GetBytes(($Lines -join "`n"))
    $prepared.Add([pscustomobject]@{path=$Relative; absolute=$absolute; bytes=$bytes; sha256=(Hash $bytes)})
}
function Short-Name([string]$Id) {
    $name = $Id.Substring(2)
    if ($name.StartsWith($Project + '.', [StringComparison]::Ordinal)) { return $name.Substring($Project.Length + 1) }
    return $name
}
function Atomic-Write([string]$Path, [byte[]]$Bytes) {
    [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($Path)) | Out-Null
    $temporary = $Path + '.' + [Guid]::NewGuid().ToString('N') + '.tmp'
    try { [IO.File]::WriteAllBytes($temporary, $Bytes); [IO.File]::Move($temporary, $Path, $true) }
    finally { if ([IO.File]::Exists($temporary)) { [IO.File]::Delete($temporary) } }
}

if (-not $OutputDirectory.Replace('\', '/').StartsWith('content/en/api/', [StringComparison]::Ordinal)) { throw 'Generated reference pages belong beneath content/en/api/.' }
if (-not $OwnershipManifest.Replace('\', '/').StartsWith('reference/provenance/', [StringComparison]::Ordinal)) { throw 'Generated ownership belongs beneath reference/provenance/.' }
$output = Resolve-Owned $OutputDirectory
$ownershipPath = Resolve-Owned $OwnershipManifest
$bindingPath = Resolve-Owned 'reference/engine.lock.json'
$bindingBytes = [IO.File]::ReadAllBytes($bindingPath)
$binding = $utf8.GetString($bindingBytes) | ConvertFrom-Json
$factsPath = Resolve-Owned $Facts
$factsBytes = [IO.File]::ReadAllBytes($factsPath)
$factIdentity = Hash $factsBytes
$xmlLinkMap = $null
$xmlLinkIdentity = $null
if ($XmlLinks) {
    $linkBytes = [IO.File]::ReadAllBytes((Resolve-Owned $XmlLinks))
    $xmlLinkIdentity = Hash $linkBytes
    $xmlLinkMap = $utf8.GetString($linkBytes) | ConvertFrom-Json
    if ($xmlLinkMap.project -cne $Project) { throw 'XML link provenance belongs to another project.' }
    foreach ($mapping in $xmlLinkMap.links) {
        $target = [uri]$mapping.to
        if (-not $mapping.from -or -not $target.IsAbsoluteUri -or $target.Scheme -ne 'https') { throw 'Reviewed XML links require explicit HTTPS destinations.' }
    }
}
$bound = @($binding.apiManifests | Where-Object { $_.path -ceq $Facts.Replace('\', '/') -and $_.sha256 -ceq $factIdentity })
if ($bound.Count -ne 1) { throw 'API facts are not exactly bound by engine.lock.json.' }
$sourceRevision = $bound[0].sourceRevision
if ($sourceRevision -cnotmatch '^[a-f0-9]{40}$' -or $bound[0].sourceTree -cnotmatch '^[a-f0-9]{40}$') {
    throw 'API facts require their exact captured source revision and tree; the current documentation candidate is not an implicit substitute.'
}
$factsModel = $utf8.GetString($factsBytes) | ConvertFrom-Json
if ($factsModel.model -cne $bound[0].model -or $factsModel.configuration -cne $bound[0].configuration -or $factsModel.target -cne $bound[0].target) { throw 'Bound API context differs from extraction.' }
$selected = @($factsModel.projects | Where-Object name -CEQ $Project)
if ($selected.Count -ne 1) { throw 'Select exactly one actual extracted project.' }
$projectsBytes = [IO.File]::ReadAllBytes((Resolve-Owned $binding.projectManifest))
if ((Hash $projectsBytes) -cne $binding.projectManifestIdentity) { throw 'Project inventory identity differs from the binding.' }
$projects = $utf8.GetString($projectsBytes) | ConvertFrom-Json
if (@($projects | Where-Object { $_.name -ceq $Project -and $_.path -ceq $selected[0].project -and $_.surfaces -ccontains $factsModel.model }).Count -ne 1) { throw 'Project and surface must exist in the actual bound inventory.' }
$catalogModel = Get-Content -LiteralPath (Resolve-Owned $Catalog) -Raw | ConvertFrom-Json -AsHashtable
if ($catalogModel.revision -cne $binding.revision -or $catalogModel.sourceTree -cne $binding.sourceTree) { throw 'Refresh the canonical catalog for the selected engine source before generating reference.' }
$contractParts = $Contract.Split('#', 2)
$contractPage = @($catalogModel.pages | Where-Object id -CEQ $contractParts[0])
if ($contractPage.Count -ne 1 -or ($contractParts.Count -eq 2 -and $contractPage[0].sections.Keys -cnotcontains $contractParts[1])) { throw 'The shared contract is absent from the canonical catalog.' }
if ((Hash ([IO.File]::ReadAllBytes((Resolve-Owned $contractPage[0].path)))) -cne $contractPage[0].contentIdentity) { throw 'The shared contract changed; refresh the canonical catalog.' }
$contractLink = [IO.Path]::GetRelativePath($output, (Resolve-Owned $contractPage[0].path)).Replace('\', '/')
if ($contractParts.Count -eq 2) { $contractLink += '#' + $contractParts[1] }

$prior = if (Test-Path -LiteralPath $ownershipPath) { Get-Content -LiteralPath $ownershipPath -Raw | ConvertFrom-Json } else { $null }
if ($prior -and ($prior.project -cne $Project -or $prior.outputDirectory -cne $OutputDirectory)) { throw 'The ownership manifest belongs to another generated scope.' }
$owned = @{}
foreach ($file in $prior.files) {
    $absolute = Resolve-Owned $file.path
    if ([IO.Path]::GetDirectoryName($absolute) -cne $output) { throw 'Owned generated files must stay in their declared output directory.' }
    if (-not [IO.File]::Exists($absolute) -or (Hash ([IO.File]::ReadAllBytes($absolute))) -cne $file.sha256) { throw "Generated file was edited or removed; preserve and reconcile the authored change: $($file.path)" }
    $owned[$file.path] = $file.sha256
}
$symbols = $selected[0].symbols
$seen = [Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
foreach ($symbol in $symbols) {
    if (-not $seen.Add($symbol.id) -or (Hash $utf8.GetBytes($symbol.signature)) -cne $symbol.signatureHash) { throw "Duplicate or invalid source signature: $($symbol.id)" }
    if ([IO.Path]::IsPathRooted($symbol.source) -or $symbol.source.Split('/') -contains '..' -or $symbol.source.Contains('\')) { throw "Source declaration is outside the repository provenance boundary: $($symbol.id)" }
}
$types = @($symbols | Where-Object kind -CEQ NamedType | Sort-Object id)
$typePaths = [Collections.Generic.Dictionary[string,string]]::new([StringComparer]::Ordinal)
foreach ($type in $types) {
    $slug = [regex]::Replace((Short-Name $type.id).ToLowerInvariant(), '[^a-z0-9._-]', '-')
    if ($slug.Length -gt 96) { $slug = $slug.Substring(0, 72) + '-' + (Hash $utf8.GetBytes($type.id)).Substring(0, 16) }
    $typePaths[$type.id] = $OutputDirectory.Replace('\', '/') + '/' + $slug + '.md'
}
if (@($typePaths.Values | Sort-Object -Unique).Count -ne $types.Count) { throw 'Type filenames collide; no files were written.' }
$prepared = [Collections.Generic.List[object]]::new()
$captured = [Collections.Generic.HashSet[string]]::new([StringComparer]::Ordinal)
$membersByType = [Collections.Generic.Dictionary[string,object]]::new([StringComparer]::Ordinal)
foreach ($symbol in $symbols | Where-Object { $_.kind -cne 'NamedType' }) {
    if (-not $membersByType.ContainsKey($symbol.containingType)) { $membersByType[$symbol.containingType] = [Collections.Generic.List[object]]::new() }
    $membersByType[$symbol.containingType].Add($symbol)
}
foreach ($type in $types) {
    $relative = $typePaths[$type.id]
    $absolute = Resolve-Owned $relative
    if ([IO.File]::Exists($absolute) -and -not $owned.ContainsKey($relative)) { throw "Refusing to overwrite an authored page: $relative" }
    $name = Short-Name $type.id
    $lines = [Collections.Generic.List[string]]::new()
    $lines.AddRange([string[]]@('---', ('title: ' + (ConvertTo-Json $name -Compress)), ('description: ' + (ConvertTo-Json ("Reference for $name in $Project.") -Compress)),
        ('uid: api.' + $Project.ToLowerInvariant() + '.' + (Hash $utf8.GetBytes($type.id)).Substring(0, 16)), 'kind: api',
        'owners:', ('  - ' + $Project), ('apiSurface: ' + $factsModel.model), 'contracts:', ('  - ' + $Contract), '---', ('# ' + (Code $name)), '',
        ('This reference describes ' + (Code $name) + ' in ' + (Code $Project) + '. Read the [shared contract](' + $contractLink + ') for its ownership, availability and lifecycle boundaries.'), '',
        ('**Source context:** ' + (Code $factsModel.model) + ', configuration ' + (Code $factsModel.configuration) + '. Declaration extraction is separate from source execution and script-projection certification.'), ''))
    if ($SharedAbi) { $lines.Add('Generated declarations without member XML inherit only the explicitly associated shared ABI contract. No safe wrapper, ownership transfer or undocumented upstream behavior is inferred.'); $lines.Add('') }
    if ($type.baseType) { $lines.Add('**Base type:** ' + (Code $type.baseType) + '.'); $lines.Add('') }
    if ($type.interfaces.Count) { $lines.Add('**Direct interfaces:** ' + (($type.interfaces | ForEach-Object { Code $_ }) -join ', ') + '.'); $lines.Add('') }
    $members = @($membersByType[$type.id] | Sort-Object kind, id)
    $split = $members.Count -gt 64
    $groups = if ($split) { @($members | Group-Object -CaseSensitive { Member-Group $_ $type } | Sort-Object Name) } else { @() }
    $memberPaths = [Collections.Generic.Dictionary[string,string]]::new([StringComparer]::Ordinal)
    foreach ($group in $groups) {
        $familyIdentity = $type.id + '/' + $group.Name
        $familySlug = [regex]::Replace($group.Name.ToLowerInvariant(), '[^a-z0-9._-]', '-')
        if ($familySlug.Length -gt 60) { $familySlug = $familySlug.Substring(0, 60) }
        $memberPath = $OutputDirectory.Replace('\', '/') + '/member-' + $familySlug + '-' + (Hash $utf8.GetBytes($familyIdentity)).Substring(0, 16) + '.md'
        foreach ($member in $group.Group) { $memberPaths[$member.id] = $memberPath }
        $detail = [Collections.Generic.List[string]]::new()
        $detail.AddRange([string[]]@('---', ('title: ' + (ConvertTo-Json ($name + ' — ' + $group.Name) -Compress)),
            ('description: ' + (ConvertTo-Json ('Exact ' + $group.Name + ' contracts in ' + $name + '.') -Compress)),
            ('uid: api.' + $Project.ToLowerInvariant() + '.' + (Hash $utf8.GetBytes($familyIdentity)).Substring(0, 16)), 'kind: api',
            'owners:', ('  - ' + $Project), ('apiSurface: ' + $factsModel.model), 'contracts:', ('  - ' + $Contract),
            ('  - api.' + $Project.ToLowerInvariant() + '.' + (Hash $utf8.GetBytes($type.id)).Substring(0, 16) + '#type-declaration'), '---',
            ('# ' + (Code $name) + ': ' + $group.Name), '',
            ('Read these exact member contracts together with the [containing type](' + [IO.Path]::GetFileName($relative) + ') and its [shared ownership contract](' + $contractLink + ').'), '',
            ('**Source context:** ' + (Code $factsModel.model) + ', configuration ' + (Code $factsModel.configuration) + '. This page does not certify execution on other platforms.'), ''))
        foreach ($member in $group.Group) { Add-Declaration $detail $member $type }
        Prepare-Page $memberPath $detail
    }
    $nested = @($types | Where-Object containingType -CEQ $type.id)
    if ($nested.Count) {
        $lines.Add('## Nested types'); $lines.Add('')
        foreach ($child in $nested) { $lines.Add('- [' + (Code (Short-Name $child.id)) + '](' + [IO.Path]::GetFileName($typePaths[$child.id]) + ')') }
        $lines.Add('')
    }
    if ($members.Count) {
        $lines.Add('## Members'); $lines.Add(''); $lines.Add('| Member | Kind |'); $lines.Add('| --- | --- |')
        if ($split) {
            foreach ($group in $groups) {
                $lines.Add('| [' + (Code $group.Name) + '](' + [IO.Path]::GetFileName($memberPaths[$group.Group[0].id]) + ') | ' + $group.Group.Count + ' declarations |')
            }
        } else {
            foreach ($member in $members) { $lines.Add('| [' + (Code (Member-Name $member $type)) + '](#' + (Anchor $member.id) + ') | ' + $member.kind + ' |') }
        }
        $lines.Add('')
    }
    Add-Declaration $lines $type $type
    if (-not $split) { foreach ($member in $members) { Add-Declaration $lines $member $type } }
    Prepare-Page $relative $lines
}
if ($captured.Count -ne $symbols.Count) { throw 'Every extracted symbol must have exactly one generated destination.' }
$indexRelative = $OutputDirectory.Replace('\', '/') + '/index.md'
$indexAbsolute = Resolve-Owned $indexRelative
if ([IO.File]::Exists($indexAbsolute) -and -not $owned.ContainsKey($indexRelative)) { throw 'Refusing to replace an authored type index.' }
$index = [Collections.Generic.List[string]]::new()
$index.AddRange([string[]]@('---', ('title: ' + (ConvertTo-Json ($Project + ' types') -Compress)),
    ('description: ' + (ConvertTo-Json ('Exact extracted types in ' + $Project + '.') -Compress)),
    ('uid: api.' + $Project.ToLowerInvariant() + '.types'), 'kind: landing', 'owners:', ('  - ' + $Project),
    'contracts:', ('  - ' + $Contract), '---', ('# ' + $Project + ' types'), '',
    ('Browse the ' + $types.Count + ' types in this selected source reference. Start with the [shared contract](' + $contractLink + ') for lifecycle, ownership and availability.'), '',
    'This index is derived from the bound API facts. It is secondary reference navigation, not an introduction to the engine or a source execution certificate.', '', '## Types', ''))
foreach ($type in $types) { $index.Add('- [' + (Code (Short-Name $type.id)) + '](' + [IO.Path]::GetFileName($typePaths[$type.id]) + ')') }
$index.Add('')
$indexBytes = $utf8.GetBytes(($index -join "`n"))
$prepared.Add([pscustomobject]@{path=$indexRelative;absolute=$indexAbsolute;bytes=$indexBytes;sha256=(Hash $indexBytes)})
if ((Hash ([IO.File]::ReadAllBytes($factsPath))) -cne $factIdentity -or (Hash ([IO.File]::ReadAllBytes($bindingPath))) -cne (Hash $bindingBytes)) { throw 'Reference inputs changed during preparation.' }
foreach ($file in $prepared) {
    if ($owned.ContainsKey($file.path) -and (Hash ([IO.File]::ReadAllBytes($file.absolute))) -cne $owned[$file.path]) { throw 'An owned page changed before publication.' }
    if (-not [IO.File]::Exists($file.absolute) -or (Hash ([IO.File]::ReadAllBytes($file.absolute))) -cne $file.sha256) { Atomic-Write $file.absolute $file.bytes }
}
foreach ($old in $owned.Keys) {
    if ($prepared.path -ccontains $old) { continue }
    $absolute = Resolve-Owned $old
    if ((Hash ([IO.File]::ReadAllBytes($absolute))) -cne $owned[$old]) { throw 'A retired generated page contains an authored change.' }
    [IO.File]::Delete($absolute)
}
$record = [ordered]@{project=$Project; outputDirectory=$OutputDirectory; sourceRevision=$sourceRevision; sourceTree=$bound[0].sourceTree; facts=$Facts; factsIdentity=$factIdentity;
    sharedContract=$Contract; sharedAbi=[bool]$SharedAbi; xmlLinks=$XmlLinks; xmlLinksIdentity=$xmlLinkIdentity;
    files=@($prepared | ForEach-Object { [ordered]@{path=$_.path;sha256=$_.sha256} })}
Atomic-Write $ownershipPath $utf8.GetBytes(($record | ConvertTo-Json -Depth 8).Replace("`r`n", "`n"))
Write-Output "Updated $($types.Count) type pages and their index, containing $($captured.Count) source declarations. Authored explanation remains in its shared contract; source certification is unchanged."
