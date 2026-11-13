---
uid: api.58e5042e3270e888942f79c08a49f9479567860e66eccd778df30f9633d9fd39
symbol: "engine:Inno.Assets.Pipeline:M:Inno.Assets.Pipeline.AssetLoader.TryGetArtifact(System.Guid,System.String,Inno.Assets.AssetArtifactInfo@)"
source: xml
reviewed: 51e053cb1c30bb61bbddd044dea3b63b1589a926a423f5ca7501086f66bf9680
title: "TryGetArtifact"
kind: api
owners: [Inno.Assets.Pipeline]
apiSurface: source-clr
---

Tries to resolve a named output from the current artifact bundle.

**Parameter `persistentId`:** The stable persistent identity used for lookup.

**Parameter `outputName`:** The stable artifact output name used for lookup.

**Parameter `artifact`:** The resolved immutable artifact payload returned to the caller.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
