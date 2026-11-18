---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d2ffd3cce784bb7f791a826b0357f4ed947de9885001cc4345bc2792f282040a
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope)
title: AssetArtifactWriter.WriteAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 6bfba832e9c71d7c9f3dd9b070d7c96bc183a5111265dcddcd17a3f131628f6e
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `cancellationToken`:** Cancellation for the write operation.

**Parameter `deploymentScope`:** Whether runtime packages retain this output.

## Returns

A completed operation after the output has been staged.
