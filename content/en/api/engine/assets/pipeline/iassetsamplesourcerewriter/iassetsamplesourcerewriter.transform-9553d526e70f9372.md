---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9553d526e70f937231a5b3f7e45c10159ed1d5438b0db4e4c798281fe8623400
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.IAssetSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext)
title: IAssetSampleSourceRewriter.Transform
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
sourceFingerprint: 718bf4618f42dc245d208ebedfe71aaca0653059a4323e94f49923af26e368eb
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Runs on a worker with a pinned extension generation. Access only transaction-owned files and context data, observe cancellation, and do not access live Assets or Editor state.

## Parameters

**Parameter `context`:** The transaction-owned staged clone.
