---
uid: api.7234bea68acafd111f6cd75651a92d7db9fb4dd01071e99c7174db9548537da2
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue})"
source: xml
reviewed: cc28af6d56af2aadf1dd79bbf93b199b72b31f6a03b25138dc93615c13b2959b
title: "Build"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Freezes the current region without pruning unused calls or retaining this mutable builder.

**Parameter `outputs`:** Named values returned by the enclosing region.

**Returns:** An immutable block unaffected by later builder changes.

**Exception `T:System.ArgumentException`:** An output name is empty or a value belongs to another builder.
