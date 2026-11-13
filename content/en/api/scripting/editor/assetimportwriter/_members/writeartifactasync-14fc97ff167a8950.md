---
uid: api.14fc97ff167a8950409478b3ca546493321049638fb60532a4619079bc18e944
symbol: "scripting:Inno.Assets.Pipeline:M:InnoEditor.Assets.AssetImportWriter\u00601.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,InnoEditor.Assets.AssetDeploymentScope)"
source: xml
reviewed: dd52e4ee32a01c3f049e4aa819fb2ca7c0d88ae56ded802860d4821bf520edfb
title: "WriteArtifactAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: editor-script
apiScope: Editor
---

Writes one immutable named artifact output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

**Returns:** A completed operation after the output has been staged.
