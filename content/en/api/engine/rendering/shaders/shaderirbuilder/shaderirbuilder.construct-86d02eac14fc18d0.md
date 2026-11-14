---
uid: api.86d02eac14fc18d048b0340bef5f2581f177e727a42f78eed3b7b619be756865
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Construct(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderIrValue[])"
source: xml
reviewed: 647190b47b727c809362353a2df93baa074bd0e79f422fa3dd089bb1ae104462
title: "ShaderIrBuilder.Construct"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Constructs a complete vector, column-major matrix, structure or fixed array from typed members.

## Parameters

**Parameter `type`:** The complete aggregate type.

**Parameter `members`:** Scalar vector/matrix components, declaration-ordered structure fields, or array elements.

## Returns

A value of the requested type.

## Exceptions

**Exception `T:System.ArgumentException`:** The type is not an aggregate or members have incorrect count or types.
