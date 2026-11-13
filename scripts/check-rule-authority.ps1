param([Parameter(Mandatory)][string]$EngineRoot)

$ErrorActionPreference = 'Stop'
$root = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$engine = (Resolve-Path -LiteralPath $EngineRoot).Path
$binding = Get-Content -LiteralPath (Join-Path $root 'reference/engine.lock.json') -Raw | ConvertFrom-Json
$revision = (& git -C $engine rev-parse HEAD).Trim()
if ($LASTEXITCODE -ne 0 -or $revision -cne $binding.toolingRevision) { throw 'Rule verification requires the explicitly pinned engine tooling revision.' }
$registry = Get-Content -LiteralPath (Join-Path $engine '.agents/rulebook/coverage.json') -Raw | ConvertFrom-Json
$revisions = @($registry.baseline) + @($registry.units | ForEach-Object { ($_.source -split ':')[0] }) +
    @($registry.units | Where-Object { $_.approvedAddition.translation } | ForEach-Object { ($_.approvedAddition.translation.source -split ':')[0] })
foreach ($source in @($revisions | Sort-Object -Unique)) {
    if ($source -cnotmatch '^[a-f0-9]{40}$') { throw 'Rule provenance requires a complete immutable source revision.' }
    & git -C $engine cat-file -e ($source + '^{commit}') 2>$null
    if ($LASTEXITCODE -ne 0) {
        # Explicit CI preparation only: acquire the few original provenance objects, not all
        # repository history, another checkout, submodules or any engine/native build output.
        & git -C $engine fetch --no-tags --depth=1 https://github.com/Wolfiora/InnoEngine.git $source
        if ($LASTEXITCODE -ne 0) { throw 'Original rule provenance could not be prepared.' }
    }
}
& (Join-Path $engine 'tests/ci/Test-AgentRules.ps1') -DocsRoot $root -Rules wiki
& (Join-Path $engine 'tests/ci/Test-AgentRules.Tests.ps1') -DocsRoot $root
