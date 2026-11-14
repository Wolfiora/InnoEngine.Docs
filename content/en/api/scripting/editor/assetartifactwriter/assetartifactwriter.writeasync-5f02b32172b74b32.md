---
uid: api.5f02b32172b74b32b37d07c8e69349908daac928b7a5a9b075b441cdab69e049
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope)"
source: xml
reviewed: 84484bedd285a04845280193bed612331c0b36fe1159fe014df120695fe0794e
title: "AssetArtifactWriter.WriteAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Writes one named build output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

**Returns:** A completed operation after the output has been staged.
