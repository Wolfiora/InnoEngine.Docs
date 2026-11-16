---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.67d3c1cb7d989bfb27dd4d225ef16bd9cf996b92fd5a8c3eaffb486f934f8e87
symbol: engine:Inno.Rendering.Assets:M:Inno.Rendering.Assets.ShaderPropertyDefinition.#ctor(Inno.Rendering.ShaderPropertyId,System.String,Inno.Rendering.ShaderPropertyType,Inno.Rendering.ShaderStage,Inno.Rendering.Assets.MaterialValue,System.Nullable{Inno.Rendering.ShaderPropertyBindingKind},Inno.Rendering.RenderStorageAccess,Inno.Rendering.Assets.ShaderPropertyBindingOwner)
title: ShaderPropertyDefinition.Constructor
kind: api
owners:
- Inno.Rendering.Assets
apiSurface: source-clr
reviewed: b479dcddea480d05ba120578d9c54f449fc63a0b79b1e00196405a0e986e389a
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
