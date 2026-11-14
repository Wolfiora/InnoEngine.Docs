---
uid: api.7234bea68acafd111f6cd75651a92d7db9fb4dd01071e99c7174db9548537da2
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Build(System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Rendering.Shaders.ShaderIrValue})"
source: xml
reviewed: 7a1686ad5cf4d73a8d8243933a65f1a314459943d9205574baa91094ee04bafc
title: "ShaderIrBuilder.Build"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Freezes the current region without pruning unused calls or retaining this mutable builder.

## Parameters

**Parameter `outputs`:** Named values returned by the enclosing region.

## Returns

An immutable block unaffected by later builder changes.

## Exceptions

**Exception `T:System.ArgumentException`:** An output name is empty or a value belongs to another builder.
