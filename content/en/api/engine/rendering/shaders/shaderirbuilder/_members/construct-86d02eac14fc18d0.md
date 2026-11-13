---
uid: api.86d02eac14fc18d048b0340bef5f2581f177e727a42f78eed3b7b619be756865
symbol: "engine:Inno.Rendering.Shaders:M:Inno.Rendering.Shaders.ShaderIrBuilder.Construct(Inno.Rendering.Shaders.ShaderSourceType,Inno.Rendering.Shaders.ShaderIrValue[])"
source: xml
reviewed: cacf2d355988d8f8e01433991880f6e54d656ccccca33bb9665b4c2252f7da83
title: "Construct"
kind: api
owners: [Inno.Rendering.Shaders]
apiSurface: source-clr
---

Constructs a complete vector, column-major matrix, structure or fixed array from typed members.

**Parameter `type`:** The complete aggregate type.

**Parameter `members`:** Scalar vector/matrix components, declaration-ordered structure fields, or array elements.

**Returns:** A value of the requested type.

**Exception `T:System.ArgumentException`:** The type is not an aggregate or members have incorrect count or types.
