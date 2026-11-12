param([Parameter(Mandatory)][string]$Revision)

$ErrorActionPreference = 'Stop'
if ($Revision -cnotmatch '^[a-f0-9]{40}$') { throw 'The documentation producer requires an immutable candidate revision.' }
$root = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$actual = (& git -C $root rev-parse 'HEAD^{tree}').Trim()
if ($LASTEXITCODE -ne 0) { throw 'Cannot resolve the actual documentation checkout.' }
& git -C $root cat-file -e ($Revision + '^{commit}') 2>$null
if ($LASTEXITCODE -ne 0) {
    & git -C $root fetch --no-tags --depth=1 origin $Revision
    if ($LASTEXITCODE -ne 0) { throw 'Cannot prepare the exact documentation candidate identity.' }
}
$candidate = (& git -C $root rev-parse ($Revision + '^{tree}')).Trim()
if ($LASTEXITCODE -ne 0 -or $candidate -cne $actual) {
    throw 'The Docs merge candidate differs from its paired head. Synchronize the Docs base and validate the resulting immutable candidate.'
}
Write-Output "Documentation candidate $Revision has the exact checked-out tree $actual."
