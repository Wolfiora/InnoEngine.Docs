---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d2ffd3cce784bb7f791a826b0357f4ed947de9885001cc4345bc2792f282040a
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetArtifactWriter.WriteAsync(System.String,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken,Inno.Assets.Pipeline.AssetDeploymentScope)
title: AssetArtifactWriter.WriteAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 48e7f77fd5773d8ef5e03dc1124eb96d26846e4e7e399d4cbd18fc0490d1c91b
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
