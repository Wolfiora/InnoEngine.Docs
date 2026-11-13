---
uid: api.330985db2a15b185510ffdb7652619f8a8c033985c887dd44e0634201cb108e7
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.RenderShaderBindingDescriptor.#ctor(InnoEngine.Rendering.RenderBindingId,InnoEngine.Rendering.RenderShaderBindingKind,System.Int32,InnoEngine.Rendering.RenderUniformType,System.Int32,InnoEngine.Rendering.RenderStorageAccess,System.String)"
source: xml
reviewed: a51ff7eab44f56764a73fb98c85c587202924644736610322c3704508233292f
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
---

Creates a shader binding descriptor.

**Parameter `id`:** Stable manifest binding name.

**Parameter `kind`:** Binding domain.

**Parameter `slot`:** Backend-neutral texture or storage slot.

**Parameter `uniformType`:** Uniform shape when `kind` is Uniform.

**Parameter `count`:** Uniform array element count.

**Parameter `storageAccess`:** Storage texture or buffer access.

**Parameter `nativeName`:** Adapter-generated reflected symbol, or null when the logical ID is also the symbol.
