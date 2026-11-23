---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fe6d17ef439801c53f0eaad525c3d82900c0d48f2ca3da7753115c778147bc5f
symbol: scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.ShaderPropertyDefinition.#ctor(InnoEngine.Rendering.ShaderPropertyID,System.String,InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.ShaderStage,InnoEngine.Rendering.MaterialValue,System.Nullable{InnoEngine.Rendering.ShaderPropertyBindingKind},InnoEngine.Rendering.RenderStorageAccess,InnoEngine.Rendering.ShaderPropertyBindingOwner)
title: ShaderPropertyDefinition.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: editor-script
sourceFingerprint: 1b39df60b6f174060182f7ec330fe662e812cebe46ae01fac7040bfd12871f9d
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable property identifier.

**Parameter `displayName`:** Artist-facing property name.

**Parameter `type`:** Property type.

**Parameter `stages`:** Stages that access the property.

**Parameter `defaultValue`:** Native serializable default value.

**Parameter `bindingKind`:** Optional explicit binding domain. When omitted, numeric values become uniforms, textures become sampled textures, and buffers become storage buffers.

**Parameter `storageAccess`:** Required access for storage texture or buffer bindings.

**Parameter `bindingOwner`:** Layer responsible for supplying the binding value at execution time.
