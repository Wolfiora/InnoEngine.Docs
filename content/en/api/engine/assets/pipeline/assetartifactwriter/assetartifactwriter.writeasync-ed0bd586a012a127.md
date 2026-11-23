---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ed0bd586a012a127f155f09edfcfcccdef59a0478413910c49b9faafd29fb481
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},Inno.Assets.Pipeline.AssetDeploymentScope,System.Threading.CancellationToken)
title: AssetArtifactWriter.WriteAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 60b4ffb78b84b74a33bfee77cfe3bbab2dabda633ef31ccf4d1e0674f7eec72e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

**Parameter `cancellationToken`:** Cancellation for the write operation.

## Returns

A completed operation after the output has been staged.
