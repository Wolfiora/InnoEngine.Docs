---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9553d526e70f937231a5b3f7e45c10159ed1d5438b0db4e4c798281fe8623400
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.IAssetSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext)
title: IAssetSampleSourceRewriter.Transform
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: bd5c6ec3072bd4c1dd17f44ecb5f21f96717909b3d614b740dc46f8207c57b97
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The transaction-owned staged clone.

## Remarks

Runs on a worker with a pinned extension generation. Access only transaction-owned files and context data, observe cancellation, and do not access live Assets or Editor state.
