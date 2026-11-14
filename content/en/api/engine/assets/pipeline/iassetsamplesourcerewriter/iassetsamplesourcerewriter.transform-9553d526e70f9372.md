---
uid: api.9553d526e70f937231a5b3f7e45c10159ed1d5438b0db4e4c798281fe8623400
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.IAssetSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext)"
source: xml
reviewed: be7b421fa57cf05ed0edf11b8838b1fa684ce225ac5baa83efc1a00a1c992091
title: "IAssetSampleSourceRewriter.Transform"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Rewrites staged source files and registers any changed serialized type identities.

## Remarks

Runs on a worker with a pinned extension generation. Access only transaction-owned files and context data, observe cancellation, and do not access live Assets or Editor state.

## Parameters

**Parameter `context`:** The transaction-owned staged clone.
