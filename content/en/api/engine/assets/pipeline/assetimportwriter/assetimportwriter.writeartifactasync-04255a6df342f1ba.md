---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.04255a6df342f1ba5a0fc441fa691f9cd11500c935c5c4e26112eeda0bcab55a
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetImportWriter`1.WriteArtifactAsync(System.String,System.ReadOnlyMemory{System.Byte},Inno.Assets.Pipeline.AssetDeploymentScope,System.Threading.CancellationToken)
title: AssetImportWriter<TAsset>.WriteArtifactAsync
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: dc8297294172f4a6c6732bf69a3bdef4b8ee8a0b0be644b5b5e88256d2e078d4
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `outputName`:** The stable output name.

**Parameter `bytes`:** The output content.

**Parameter `deploymentScope`:** Whether this output is retained in runtime packages. Runtime payload and asset state cannot be authoring-only.

**Parameter `cancellationToken`:** Cancellation for the write operation.

## Returns

A completed operation after the output has been staged.
