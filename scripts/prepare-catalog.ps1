param(
    [Parameter(Mandatory)][string]$EngineRoot,
    [string]$DotnetHost = 'dotnet'
)
$ErrorActionPreference = 'Stop'
$root = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$engine = (Resolve-Path -LiteralPath $EngineRoot).Path
$binding = Get-Content -LiteralPath (Join-Path $root 'reference/engine.lock.json') -Raw | ConvertFrom-Json
if ($binding.repository -ne 'https://github.com/Wolfiora/InnoEngine') { throw 'Unexpected engine repository in documentation binding.' }
if ($binding.toolingRevision -notmatch '^[a-f0-9]{40}$') { throw 'Tooling must be pinned to an exact Git revision.' }
$actualRevision = (& git -C $engine rev-parse HEAD).Trim()
if ($LASTEXITCODE -ne 0 -or $actualRevision -ne $binding.toolingRevision) { throw 'Explicit tooling checkout does not match engine.lock.json toolingRevision.' }
& git -C $engine diff --quiet HEAD --
if ($LASTEXITCODE -ne 0) { throw 'Tooling checkout has tracked edits; commit and explicitly rebind the candidate before preparing its catalog.' }
$untracked = @(& git -C $engine ls-files --others --exclude-standard)
if ($LASTEXITCODE -ne 0 -or $untracked.Count -ne 0) { throw 'Tooling checkout has untracked inputs; use a complete immutable candidate.' }
if ($binding.revision -eq $binding.toolingRevision) {
    $actualTree = (& git -C $engine rev-parse 'HEAD^{tree}').Trim()
    if ($LASTEXITCODE -ne 0 -or $actualTree -ne $binding.sourceTree) { throw 'Engine tree identity does not match the selected revision.' }
}

# This generated adapter is a site-build artifact, not a new daily executable or query implementation.
# It calls the library directly and compiles only its managed dependency closure.
$workspace = Join-Path $root 'artifacts/tooling-bootstrap'
[IO.Directory]::CreateDirectory($workspace) | Out-Null
$project = Join-Path $engine 'tools/Inno.Tooling.Documentation/Inno.Tooling.Documentation.csproj'
if (-not (Test-Path -LiteralPath $project -PathType Leaf)) { throw 'Pinned revision does not provide the documentation query library.' }
$source = @'
using System;
using System.IO;
using System.Text.Json;
using System.Threading;
using Inno.Tooling.Documentation;

using var cancellation = new CancellationTokenSource();
Console.CancelKeyPress += (_, options) => { options.Cancel = true; cancellation.Cancel(); };
string root = Path.GetFullPath(args[0]);
string cache = Path.Combine(root, "artifacts", "documentation-query");
using var editorial = new StringWriter();
TextWriter output = Console.Out;
int editorialResult;
try
{
    Console.SetOut(editorial);
    editorialResult = await DocumentationCommand.ExecuteAsync(["api-check", "--docs-root", root], cancellation.Token);
}
finally { Console.SetOut(output); }
Directory.CreateDirectory(Path.Combine(root, "artifacts"));
await File.WriteAllTextAsync(Path.Combine(root, "artifacts", "api-editorial.json"), editorial.ToString(), cancellation.Token);
if (editorialResult != 0) throw new InvalidDataException("API facts and registered content require synchronization; see api-editorial.json.");
DocumentationResult indexed = await DocumentationStore.IndexAsync(root, root, cache, cancellation.Token);
using DocumentationSnapshot snapshot = await DocumentationStore.OpenAsync(cache, indexed.snapshot, cancellationToken: cancellation.Token);
DocumentationCatalogReport catalog = await snapshot.ExportCatalogAsync(cancellation.Token);
string result = Path.Combine(root, "artifacts", "canonical-catalog.json");
string staging = result + "." + Guid.NewGuid().ToString("N") + ".tmp";
try
{
    await File.WriteAllTextAsync(staging, JsonSerializer.Serialize(catalog) + "\n", cancellation.Token);
    File.Move(staging, result, overwrite: true);
}
finally
{
    if (File.Exists(staging)) File.Delete(staging);
}
Console.WriteLine(indexed.message);
Console.WriteLine(JsonSerializer.Serialize(indexed.timingsMilliseconds));
Console.WriteLine("Canonical catalog: " + result);
'@
$sourcePath = Join-Path $workspace 'CatalogAdapter.cs'
if (-not (Test-Path -LiteralPath $sourcePath) -or [IO.File]::ReadAllText($sourcePath) -ne $source) {
    [IO.File]::WriteAllText($sourcePath, $source, [Text.UTF8Encoding]::new($false))
}
$projectPath = Join-Path $workspace 'CatalogAdapter.csproj'
$reference = [Security.SecurityElement]::Escape($project.Replace('\', '/'))
$projectText = @"
<Project Sdk="Microsoft.NET.Sdk">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>net10.0</TargetFramework>
    <ImplicitUsings>disable</ImplicitUsings>
    <Nullable>enable</Nullable>
    <EnableDefaultCompileItems>false</EnableDefaultCompileItems>
    <PublishAot>false</PublishAot>
  </PropertyGroup>
  <ItemGroup>
    <Compile Include="CatalogAdapter.cs" />
    <ProjectReference Include="$reference" />
  </ItemGroup>
</Project>
"@
if (-not (Test-Path -LiteralPath $projectPath) -or [IO.File]::ReadAllText($projectPath) -ne $projectText) {
    [IO.File]::WriteAllText($projectPath, $projectText, [Text.UTF8Encoding]::new($false))
}
$sdk = [IO.File]::ReadAllText((Join-Path $engine 'global.json'))
$sdkPath = Join-Path $workspace 'global.json'
if (-not (Test-Path -LiteralPath $sdkPath) -or [IO.File]::ReadAllText($sdkPath) -ne $sdk) {
    [IO.File]::WriteAllText($sdkPath, $sdk, [Text.UTF8Encoding]::new($false))
}
$bundle = Join-Path $workspace 'bundle'
$intermediate = Join-Path $workspace 'obj'
Push-Location $workspace
try {
    $parallelism = [Math]::Min([Environment]::ProcessorCount, 4)
    # This Docs-owned entry does not import the engine root's task-owner propagation.
    # Freeze one invocation identity before entering its shared managed dependencies.
    $bootstrapOwner = [Guid]::NewGuid().ToString('N')
    & $DotnetHost build $projectPath --output $bundle --artifacts-path $intermediate "-p:InnoTaskBootstrapOwner=$bootstrapOwner" "-m:$parallelism" -nodeReuse:false --disable-build-servers -v minimal
    if ($LASTEXITCODE -ne 0) { throw "Documentation tooling bootstrap failed: $LASTEXITCODE" }
    & $DotnetHost (Join-Path $bundle 'CatalogAdapter.dll') $root
    if ($LASTEXITCODE -ne 0) { throw "Canonical documentation preparation failed: $LASTEXITCODE" }
}
finally { Pop-Location }
