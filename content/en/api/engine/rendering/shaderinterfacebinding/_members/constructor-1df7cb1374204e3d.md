---
uid: api.1df7cb1374204e3d0bd3cd00756ef999e4cd8931230056742d6b200fdd7e2863
symbol: "engine:Inno.Rendering:M:Inno.Rendering.ShaderInterfaceBinding.#ctor(Inno.Rendering.ShaderPropertyId,Inno.Rendering.ShaderPropertyType,Inno.Rendering.ShaderStage,System.Int32,Inno.Rendering.ShaderPropertyBindingKind,Inno.Rendering.RenderStorageAccess,System.String,System.Nullable{System.Int32})"
source: xml
reviewed: a4dca39ba5a75df7fbee523aaf2f0c5277a98875c5062b7a5e86ccccfd0d472c
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Creates a reflected interface binding.

**Parameter `id`:** Stable property ID.

**Parameter `type`:** Expected value or resource type.

**Parameter `stages`:** Stages that consume the binding.

**Parameter `arrayCount`:** Required array element count.

**Parameter `bindingKind`:** Backend-neutral interface binding domain.

**Parameter `storageAccess`:** Required access for storage resources.

**Parameter `nativeName`:** Adapter-generated reflected symbol, or null when the logical ID is also the symbol.

**Parameter `location`:** Explicit resource slot, or null when the caller assigns an ordered layout.
