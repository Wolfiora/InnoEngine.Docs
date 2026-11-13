---
uid: api.79ba0d7c087ca5befad29c59bdf82f4fb692cd8187a8e0b292db9cc7c324f240
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportWriter\u00601.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope)"
source: xml
reviewed: 7a73162c9e7d15a63992c2bd2b97cf0563c48104b7da38c7de38a061760a3bac
title: "WriteArtifactAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Writes one immutable named artifact output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

**Returns:** A completed operation after the output has been staged.
