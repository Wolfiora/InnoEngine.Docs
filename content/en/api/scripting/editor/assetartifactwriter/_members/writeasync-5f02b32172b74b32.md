---
uid: api.5f02b32172b74b32b37d07c8e69349908daac928b7a5a9b075b441cdab69e049
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope)"
source: xml
reviewed: f9b5afd982f30871f1ea6e549d70966b72bfab59eddf90b81047847ff55aad9c
title: "WriteAsync"
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
