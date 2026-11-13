---
uid: api.d2ffd3cce784bb7f791a826b0357f4ed947de9885001cc4345bc2792f282040a
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope)"
source: xml
reviewed: 443392275440141e176ea7d7d31542328f3335f90c55e7429bed2237f1387d25
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
