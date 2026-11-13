---
uid: api.ea57486649d74f937ea099192a70931dcf8ab02bb8e1895cbf43baed8179bd2e
symbol: "scripting:Inno.Rendering:M:InnoEngine.Rendering.ShaderInterfaceBinding.#ctor(InnoEngine.Rendering.ShaderPropertyId,InnoEngine.Rendering.ShaderPropertyType,InnoEngine.Rendering.ShaderStage,System.Int32,InnoEngine.Rendering.ShaderPropertyBindingKind,InnoEngine.Rendering.RenderStorageAccess,System.String,System.Nullable{System.Int32})"
source: xml
reviewed: 71e58615014f540fc607454fe5a857f1fc1ab0fc29449d575f1729746d42e196
title: "Constructor"
kind: api
owners: [Inno.Rendering]
apiSurface: editor-script
apiScope: Runtime
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
