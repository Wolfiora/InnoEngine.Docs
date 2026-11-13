---
uid: api.211a709e0434b33d17661a788760ba4a2f646f98c522e8d94454462a102ab80b
symbol: "scripting:Inno.Rendering.Assets:M:InnoEngine.Rendering.ShaderPropertyDefinition.#ctor(InnoEngine.Rendering.ShaderPropertyId,System.String,InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.ShaderStage,InnoEngine.Rendering.MaterialValue,System.Nullable{InnoEngine.Rendering.ShaderPropertyBindingKind},InnoEngine.Rendering.RenderStorageAccess,InnoEngine.Rendering.ShaderPropertyBindingOwner)"
source: xml
reviewed: 0a0d1c7ec74516e9c63d45e541679bb14636522361b806bfa7a648f3837d11b2
title: "ShaderPropertyDefinition.Constructor"
kind: api
owners: [Inno.Rendering.Assets]
apiSurface: editor-script
apiScope: Runtime
---

Creates a shader property definition.

**Parameter `id`:** Stable property identifier.

**Parameter `displayName`:** Artist-facing property name.

**Parameter `type`:** Property type.

**Parameter `stages`:** Stages that access the property.

**Parameter `defaultValue`:** Native serializable default value.

**Parameter `bindingKind`:** Optional explicit binding domain. When omitted, numeric values become uniforms, textures become sampled textures, and buffers become storage buffers.

**Parameter `storageAccess`:** Required access for storage texture or buffer bindings.

**Parameter `bindingOwner`:** Layer responsible for supplying the binding value at execution time.
