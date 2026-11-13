---
uid: api.d2ffd3cce784bb7f791a826b0357f4ed947de9885001cc4345bc2792f282040a
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope)"
source: xml
reviewed: a048df9e811e51980abab98b706f7c92d6b9f56d1e180c8df429e0c0e1605064
title: "WriteAsync"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Writes one named build output.

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

**Returns:** A completed operation after the output has been staged.
