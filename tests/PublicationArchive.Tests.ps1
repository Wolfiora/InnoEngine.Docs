$ErrorActionPreference = 'Stop'
$root = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$directory = Join-Path $root ('artifacts/publication-archive-tests/' + [Guid]::NewGuid().ToString('N'))
[IO.Directory]::CreateDirectory($directory) | Out-Null
$cases = @('valid', 'tampered', 'escape', 'absolute', 'drive', 'backslash', 'duplicate', 'symbolic-link', 'outside-owner', 'existing-owner')
foreach ($case in $cases) {
    $archive = Join-Path $directory ($case + '.zip')
    $output = Join-Path $directory $case
    $zip = [IO.Compression.ZipFile]::Open($archive, [IO.Compression.ZipArchiveMode]::Create)
    try {
        $name = switch ($case) {
            'escape' { '../outside.txt' }
            'absolute' { '/outside.txt' }
            'drive' { 'C:/outside.txt' }
            'backslash' { 'nested\outside.txt' }
            default { 'index.html' }
        }
        $entry = $zip.CreateEntry($name)
        if ($case -ceq 'symbolic-link') { $entry.ExternalAttributes = 0xA000 -shl 16 }
        $writer = [IO.StreamWriter]::new($entry.Open())
        try { $writer.Write('<h1>Verified</h1>') } finally { $writer.Dispose() }
        if ($case -ceq 'duplicate') { $null = $zip.CreateEntry('index.html') }
    } finally { $zip.Dispose() }
    $digest = 'sha256:' + (Get-FileHash -LiteralPath $archive).Hash.ToLowerInvariant()
    if ($case -ceq 'tampered') { [IO.File]::AppendAllText($archive, 'changed') }
    if ($case -ceq 'outside-owner') { $output = Join-Path $root 'outside-publication-owner' }
    if ($case -ceq 'existing-owner') { [IO.Directory]::CreateDirectory($output) | Out-Null }
    $accepted = $false
    try {
        & (Join-Path $root 'scripts/Expand-PublicationArtifact.ps1') -Archive $archive -ExpectedDigest $digest -Destination $output
        $accepted = $true
    } catch { $_.Exception.Message | Set-Content (Join-Path $directory ($case + '.log')) }
    if ($accepted -ne ($case -ceq 'valid')) { throw "Unexpected archive acceptance: $case" }
    if ($accepted -and [IO.File]::ReadAllText((Join-Path $output 'index.html')) -cne '<h1>Verified</h1>') { throw 'Extracted bytes changed.' }
    if (-not $accepted -and $case -cne 'existing-owner' -and (Test-Path -LiteralPath $output)) { throw "Rejected archive created an output owner: $case" }
}
if (Test-Path -LiteralPath (Join-Path $directory 'outside.txt')) { throw 'Archive extraction escaped its declared output.' }
Write-Output "Passed $($cases.Count) publication archive scenarios. Evidence: $directory"
