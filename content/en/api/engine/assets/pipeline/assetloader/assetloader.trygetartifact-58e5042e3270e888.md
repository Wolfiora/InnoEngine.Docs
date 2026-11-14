---
uid: api.58e5042e3270e888942f79c08a49f9479567860e66eccd778df30f9633d9fd39
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)"
source: xml
reviewed: 81cf6f84dacd205a066484f21af1d094756005e0e5cd7ca43992825284f23152
title: "AssetLoader.TryGetArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Tries to resolve a named output from the current artifact bundle.

## Parameters

**Parameter `persistentId`:** The stable persistent identity used for lookup.

**Parameter `outputName`:** The stable artifact output name used for lookup.

**Parameter `artifact`:** The resolved immutable artifact payload returned to the caller.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
