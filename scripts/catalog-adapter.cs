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
Console.WriteLine("API facts checked. Preparing the canonical documentation snapshot.");
DocumentationResult indexed = await DocumentationStore.IndexAsync(root, root, cache, cancellation.Token);
Console.WriteLine("Snapshot prepared. Exporting the website catalog.");
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
