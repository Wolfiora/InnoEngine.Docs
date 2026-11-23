---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b932fc3865c05945c2497ceed07ec9f09a64c4bc6b4193220c2088ef5a94e2c8
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.ShaderPropertyDefinition.#ctor(Inno.Rendering.ShaderPropertyID,System.String,Inno.Rendering.ShaderPropertyType,Inno.Rendering.ShaderStage,Inno.Rendering.Assets.MaterialValue,System.Nullable{Inno.Rendering.ShaderPropertyBindingKind},Inno.Rendering.RenderStorageAccess,Inno.Rendering.Assets.ShaderPropertyBindingOwner)
title: ShaderPropertyDefinition.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
sourceFingerprint: 75874245bc5713be05d85d7be18b7c78c8affc09db99ec525305e1638bffb6a0
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
