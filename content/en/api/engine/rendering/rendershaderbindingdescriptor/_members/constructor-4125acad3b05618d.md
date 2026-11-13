---
uid: api.4125acad3b05618d0c829c36b4babdf17d09be9dcfd9afba8562fa66eb9ffd81
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderShaderBindingDescriptor.#ctor(Inno.Rendering.RenderBindingId,Inno.Rendering.RenderShaderBindingKind,System.Int32,Inno.Rendering.RenderUniformType,System.Int32,Inno.Rendering.RenderStorageAccess,System.String)"
source: xml
reviewed: 97f6875a5530d4017345736697063d630d624dfd1f4ade15cfb1b8d9392e6bb3
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a shader binding descriptor.

**Parameter `id`:** Stable manifest binding name.

**Parameter `kind`:** Binding domain.

**Parameter `slot`:** Backend-neutral texture or storage slot.

**Parameter `uniformType`:** Uniform shape when `kind` is Uniform.

**Parameter `count`:** Uniform array element count.

**Parameter `storageAccess`:** Storage texture or buffer access.

**Parameter `nativeName`:** Adapter-generated reflected symbol, or null when the logical ID is also the symbol.
