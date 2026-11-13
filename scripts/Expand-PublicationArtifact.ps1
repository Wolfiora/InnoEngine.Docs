param(
    [Parameter(Mandatory)][string]$Archive,
    [Parameter(Mandatory)][string]$ExpectedDigest,
    [Parameter(Mandatory)][string]$Destination
)
$ErrorActionPreference = 'Stop'
$root = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$boundary = (Join-Path $root 'artifacts') + [IO.Path]::DirectorySeparatorChar
function Resolve-OwnedArtifact([string]$Value) {
    $resolved = [IO.Path]::GetFullPath($Value, $root)
    if (-not $resolved.StartsWith($boundary, [StringComparison]::OrdinalIgnoreCase)) { throw 'Archive and destination must remain in the selected workspace artifact owner.' }
    $ancestor = $root
    foreach ($part in [IO.Path]::GetRelativePath($root, $resolved).Split([IO.Path]::DirectorySeparatorChar)) {
        $ancestor = Join-Path $ancestor $part
        if ((Test-Path -LiteralPath $ancestor) -and ((Get-Item -LiteralPath $ancestor -Force).Attributes -band [IO.FileAttributes]::ReparsePoint)) {
            throw 'Publication extraction cannot traverse links.'
        }
    }
    return $resolved
}
$zip = Resolve-OwnedArtifact $Archive
$output = Resolve-OwnedArtifact $Destination
if ($ExpectedDigest -cnotmatch '^sha256:[a-f0-9]{64}$') { throw 'An authenticated archive digest is required.' }
if (Test-Path -LiteralPath $output) { throw 'Publication extraction cannot replace an existing owner.' }
if ('sha256:' + (Get-FileHash -LiteralPath $zip -Algorithm SHA256).Hash.ToLowerInvariant() -cne $ExpectedDigest) {
    throw 'Downloaded artifact differs from its authenticated GitHub digest; the first archive is retained.'
}
$openedArchive = [IO.Compression.ZipFile]::OpenRead($zip)
try {
    $paths = [Collections.Generic.HashSet[string]]::new([StringComparer]::OrdinalIgnoreCase)
    foreach ($entry in $openedArchive.Entries) {
        $name = $entry.FullName
        $parts = $name.TrimEnd('/').Split('/')
        $type = ($entry.ExternalAttributes -shr 16) -band 0xF000
        if (-not $name -or $name.Contains('\') -or $name.Contains(':') -or $name.StartsWith('/') `
            -or @($parts | Where-Object { $_ -cin @('', '.', '..') }).Count -ne 0 `
            -or $type -notin @(0, 0x4000, 0x8000) -or -not $paths.Add($name.TrimEnd('/'))) {
            throw 'Archive contains a link, duplicate or escaping entry; no candidate was extracted.'
        }
    }
    [IO.Directory]::CreateDirectory($output) | Out-Null
    foreach ($entry in $openedArchive.Entries) {
        $target = [IO.Path]::GetFullPath($entry.FullName, $output)
        if (-not $target.StartsWith($output + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Archive path escaped its selected owner.' }
        if ($entry.FullName.EndsWith('/')) { [IO.Directory]::CreateDirectory($target) | Out-Null; continue }
        [IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($target)) | Out-Null
        [IO.Compression.ZipFileExtensions]::ExtractToFile($entry, $target, $false)
    }
} finally { $openedArchive.Dispose() }
