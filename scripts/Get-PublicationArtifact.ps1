param(
    [Parameter(Mandatory)][string]$Selection,
    [Parameter(Mandatory)][ValidateSet('documentation', 'engine')][string]$Source,
    [Parameter(Mandatory)][string]$Destination
)
$ErrorActionPreference = 'Stop'
if (-not $env:GH_TOKEN) { throw 'Artifact import requires the scoped evidence token.' }
$root = [IO.Path]::GetFullPath('..', $PSScriptRoot)
$output = [IO.Path]::GetFullPath($Destination, $root)
$boundary = Join-Path $root 'artifacts'
if (-not $output.StartsWith($boundary + [IO.Path]::DirectorySeparatorChar, [StringComparison]::OrdinalIgnoreCase)) {
    throw 'Publication imports must remain inside this workspace artifact owner.'
}
$ancestor = $root
foreach ($part in [IO.Path]::GetRelativePath($root, $output).Split([IO.Path]::DirectorySeparatorChar)) {
    $ancestor = Join-Path $ancestor $part
    if ((Test-Path -LiteralPath $ancestor) -and ((Get-Item -LiteralPath $ancestor -Force).Attributes -band [IO.FileAttributes]::ReparsePoint)) {
        throw 'Publication imports cannot traverse linked directories.'
    }
}
if (Test-Path -LiteralPath $output) { throw 'Each publication import must retain a distinct owned directory.' }
$selected = (Get-Content -LiteralPath $Selection -Raw | ConvertFrom-Json).$Source
$repository = if ($Source -ceq 'engine') { 'Wolfiora/InnoEngine' } else { 'Wolfiora/InnoEngine.Docs' }
if ($selected.id -isnot [long] -and $selected.id -isnot [int]) { throw 'Missing authenticated artifact identity.' }
if ($selected.id -le 0 -or $selected.digest -cnotmatch '^sha256:[a-f0-9]{64}$') { throw 'Missing authenticated artifact digest.' }
$zip = $output + '.zip'
[IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($output)) | Out-Null
$handler = [Net.Http.HttpClientHandler]::new()
$handler.AllowAutoRedirect = $false
$client = [Net.Http.HttpClient]::new($handler)
$client.Timeout = [Threading.Timeout]::InfiniteTimeSpan
try {
    $request = [Net.Http.HttpRequestMessage]::new([Net.Http.HttpMethod]::Get, "https://api.github.com/repos/$repository/actions/artifacts/$($selected.id)/zip")
    $request.Headers.Authorization = [Net.Http.Headers.AuthenticationHeaderValue]::new('Bearer', $env:GH_TOKEN)
    $request.Headers.UserAgent.ParseAdd('InnoEngine.Documentation/1')
    $request.Headers.Add('X-GitHub-Api-Version', '2022-11-28')
    $response = $client.SendAsync($request).GetAwaiter().GetResult()
    try {
        if ([int]$response.StatusCode -ne 302) { throw "Artifact retrieval did not return its immutable archive: $([int]$response.StatusCode)" }
        $location = $response.Headers.Location
        if (-not $location.IsAbsoluteUri -or $location.Scheme -cne 'https' -or $location.UserInfo) { throw 'Artifact redirect is not a valid HTTPS location.' }
    } finally { $response.Dispose(); $request.Dispose() }
    # Never forward the GitHub credential to the signed storage URL.
    $download = $client.GetAsync($location, [Net.Http.HttpCompletionOption]::ResponseHeadersRead).GetAwaiter().GetResult()
    try {
        if (-not $download.IsSuccessStatusCode) { throw "Artifact storage request failed: $([int]$download.StatusCode)" }
        $file = [IO.File]::Open($zip, [IO.FileMode]::CreateNew, [IO.FileAccess]::Write, [IO.FileShare]::None)
        try { $download.Content.CopyToAsync($file).GetAwaiter().GetResult() } finally { $file.Dispose() }
    } finally { $download.Dispose() }
} finally { $client.Dispose() }
& "$PSScriptRoot/Expand-PublicationArtifact.ps1" -Archive $zip -ExpectedDigest $selected.digest -Destination $output
# The exact task-owned transport is redundant after digest verification and bounded extraction.
Remove-Item -LiteralPath $zip
Write-Output "Imported $Source artifact $($selected.id) with its authenticated digest. No source code was executed."
