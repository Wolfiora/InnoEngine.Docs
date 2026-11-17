---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9553d526e70f937231a5b3f7e45c10159ed1d5438b0db4e4c798281fe8623400
symbol: engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.IAssetSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext)
title: IAssetSampleSourceRewriter.Transform
kind: api
owners:
- Inno.Assets.Pipeline
apiSurface: source-clr
reviewed: 5acb03f5920a6077b306fdf36cc783e11218957bc45734f3c09da454eebdbe34
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
