$ErrorActionPreference = 'Stop'
$repository = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$boundary = Join-Path $repository 'artifacts/candidate-identity-tests'
$root = Join-Path $boundary ([Guid]::NewGuid().ToString('N'))
$scripts = Join-Path $root 'scripts'
[IO.Directory]::CreateDirectory($scripts) | Out-Null
Copy-Item -LiteralPath (Join-Path $repository 'scripts/confirm-candidate.ps1') -Destination $scripts
function Invoke-FixtureGit([string[]]$Arguments) {
    $value = @(& git -C $root @Arguments)
    if ($LASTEXITCODE -ne 0) { throw 'Candidate fixture Git operation failed.' }
    return ($value -join "`n").Trim()
}
$null = Invoke-FixtureGit @('init', '-q')
'initial' | Set-Content (Join-Path $root 'content.txt')
$null = Invoke-FixtureGit @('add', 'content.txt')
$null = Invoke-FixtureGit @('-c', 'user.name=Aaron Liao', '-c', 'user.email=hsuankailiao@gmail.com', 'commit', '-qm', 'Initial input')
$initial = Invoke-FixtureGit @('rev-parse', 'HEAD')
$helper = Join-Path $scripts 'confirm-candidate.ps1'
& $helper -Revision $initial
$null = Invoke-FixtureGit @('-c', 'user.name=Aaron Liao', '-c', 'user.email=hsuankailiao@gmail.com', 'commit', '--allow-empty', '-qm', 'Same input, different commit')
& $helper -Revision $initial
'changed base' | Set-Content (Join-Path $root 'content.txt')
$null = Invoke-FixtureGit @('add', 'content.txt')
$null = Invoke-FixtureGit @('-c', 'user.name=Aaron Liao', '-c', 'user.email=hsuankailiao@gmail.com', 'commit', '-qm', 'Changed input')
$failure = $null
try { & $helper -Revision $initial } catch { $failure = $_.Exception.Message }
if (-not $failure -or -not $failure.StartsWith('The Docs merge candidate differs', [StringComparison]::Ordinal)) { throw 'A changed merge tree was accepted or failed for another reason.' }
$failure = $null
try { & $helper -Revision '../main' } catch { $failure = $_.Exception.Message }
if (-not $failure -or -not $failure.StartsWith('The documentation producer requires', [StringComparison]::Ordinal)) { throw 'A nonimmutable candidate was accepted.' }
# Only this fixture's exact generated directory is retired; no repository cache or active owner is touched.
$resolved = (Resolve-Path -LiteralPath $root).Path
if (-not $resolved.StartsWith([IO.Path]::GetFullPath($boundary) + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) { throw 'Fixture cleanup escaped its owner.' }
Remove-Item -LiteralPath $resolved -Recurse -Force
Write-Output 'Passed four candidate identity cases; the owned fixture was removed.'
