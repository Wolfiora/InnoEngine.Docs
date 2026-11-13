param(
    [Parameter(Mandatory)][string] $EngineRoot,
    [Parameter(Mandatory)][string] $ToolingRoot,
    [string] $Dotnet = (Get-Command dotnet -CommandType Application | Select-Object -First 1).Source
)
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest
$root = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$engine = [IO.Path]::GetFullPath($EngineRoot, $root)
$tooling = [IO.Path]::GetFullPath($ToolingRoot, $root)
$output = Join-Path $root 'artifacts/examples'
$binding = Get-Content -LiteralPath (Join-Path $root 'reference/engine.lock.json') -Raw | ConvertFrom-Json
$work = Get-Content -LiteralPath (Join-Path $output 'work.json') -Raw | ConvertFrom-Json
if (@($work.compile).Count -eq 0) { throw 'No example compilation was requested; reuse the authenticated receipts.' }
function Assert-Checkout([string] $Directory, [string] $Revision) {
    $head = (& git -C $Directory rev-parse HEAD).Trim()
    if ($LASTEXITCODE -ne 0 -or $head -cne $Revision) { throw 'Example preparation selected a different immutable engine input.' }
    $dirty = @(& git -C $Directory status --porcelain --untracked-files=all --ignore-submodules=none)
    if ($LASTEXITCODE -ne 0 -or $dirty.Count -ne 0) { throw 'Example source/tool inputs changed during preparation.' }
}
function Invoke-Managed([string[]] $Arguments, [string] $Name) {
    $log = Join-Path $output ($Name + '.log')
    $watch = [Diagnostics.Stopwatch]::StartNew()
    Write-Host "Starting $Name."
    & $Dotnet @Arguments 2>&1 | Tee-Object -FilePath $log | ForEach-Object { Write-Host $_ }
    if ($LASTEXITCODE -ne 0) { throw "Required example preparation failed; see $log." }
    Write-Host "$Name completed in $([Math]::Round($watch.Elapsed.TotalSeconds, 3)) seconds."
}
Assert-Checkout $engine $binding.revision
Assert-Checkout $tooling $binding.toolingRevision
$tree = (& git -C $engine rev-parse 'HEAD^{tree}').Trim()
if ($LASTEXITCODE -ne 0 -or $tree -cne $binding.sourceTree) { throw 'Example source tree differs from the selected API binding.' }
if (![IO.File]::ReadAllText((Join-Path $engine 'Directory.Build.props')).Contains("'ApiReferences'")) {
    throw 'The selected engine revision predates isolated API-reference preparation. Synchronize an approved current API export before compiling changed examples.'
}
$transport = @(& (Join-Path $tooling 'tests/ci/Initialize-ValidationEntry.ps1') -Dotnet $Dotnet -LogPath (Join-Path $output 'bootstrap.log'))
if ($transport.Count -ne 1) { throw 'Cannot identify the pinned example compiler transport.' }
$catalog = Get-Content -LiteralPath (Join-Path $root 'artifacts/canonical-catalog.json') -Raw | ConvertFrom-Json -Depth 100
$entry = Join-Path $engine 'entry/InnoEngine.Build/InnoEngine.Build.csproj'
$hostTarget = @(& $Dotnet msbuild $entry -nologo -getProperty:InnoDevelopmentTarget)
if ($LASTEXITCODE -ne 0 -or $hostTarget.Count -ne 1 -or $hostTarget[0] -cnotmatch '^[a-z0-9-]+$') { throw 'The selected SDK did not resolve one development host.' }
$configuration = 'Debug'
$cache = Join-Path $root 'artifacts/documentation-query'
$arguments = @('--engine-root', $engine, '--dotnet', $Dotnet, '--cache-root', $cache, '--snapshot', $catalog.snapshot,
    '--configuration', $configuration, '--target', $hostTarget[0])
foreach ($page in $work.compile) { $arguments += @('--page', $page) }
$planPath = Join-Path $output 'prepare.json'
Invoke-Managed (@($transport[0], 'docs', 'example-plan') + $arguments + @('--output', $planPath)) 'plan'
$plan = Get-Content -LiteralPath $planPath -Raw | ConvertFrom-Json
if ($plan.schema -cne 'inno-example-plan/1' -or @($plan.projects).Count -eq 0) { throw 'Example preparation did not select actual owners.' }
$projects = @($plan.projects | ForEach-Object { [IO.Path]::GetFullPath($_, $engine) })
if ($plan.needsScriptProjection) { $projects += $entry }
$solutionPath = Join-Path $output 'managed-union.slnx'
$managed = Join-Path $engine "artifacts/documentation-examples/managed/$configuration/$($hostTarget[0])"
& (Join-Path $tooling 'tests/ci/Invoke-ManagedApiPreparation.ps1') -EngineRoot $engine -Dotnet $Dotnet `
    -Configuration $configuration -Projects $projects -Output $solutionPath -ArtifactsPath $managed `
    -Log (Join-Path $output 'managed-references.log')
$arguments += @('--artifacts-path', $managed)
if ($plan.needsScriptProjection) {
    $cli = @(& $Dotnet msbuild $entry -nologo "-p:Configuration=$configuration" "-p:ArtifactsPath=$managed" -getProperty:TargetPath)
    if ($LASTEXITCODE -ne 0 -or $cli.Count -ne 1 -or !(Test-Path -LiteralPath $cli[0])) { throw 'Prepared Build entry is unavailable.' }
    $scripts = Join-Path $root 'artifacts/example-script-workspace'
    [IO.Directory]::CreateDirectory((Join-Path $scripts 'Assets')) | Out-Null
    Invoke-Managed @($cli[0], 'scripts', '--engine-root', $engine, '--dotnet', $Dotnet, '--project', $scripts,
        '--output', (Join-Path $scripts 'Export'), '--ide') 'logical-projections'
    $logical = & (Join-Path $tooling 'tests/ci/Get-DocumentationScriptReferences.ps1') -Project (Join-Path $scripts 'Inno.EditorScripts.csproj')
    $arguments += @('--runtime-reference', $logical.runtime, '--editor-reference', $logical.editor)
}
Invoke-Managed (@($transport[0], 'docs', 'validate-examples') + $arguments + @('--output', (Join-Path $output 'compiled.json'))) 'compile'
Assert-Checkout $engine $binding.revision
Assert-Checkout $tooling $binding.toolingRevision
Write-Host "Compiled $(@($work.compile).Count) changed or uncovered example groups. Unchanged trusted groups were not rebuilt."
