---
title: "EditorModuleAttribute"
description: "Reference for EditorModuleAttribute in Inno.Editor.Core."
uid: api.inno.editor.core.editor-script.1ae5b37acfd3fb0d
kind: api
owners:
  - Inno.Editor.Core
apiSurface: editor-script
contracts:
  - api.projects.inno-editor-core#lifecycle-and-failure-contracts
  - manual.scripting.use-script-api
---
# `EditorModuleAttribute`

This reference describes `EditorModuleAttribute` in `Inno.Editor.Core`. Read the [shared contract](../../projects/inno-editor-core.md#lifecycle-and-failure-contracts) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c45f61571644b09f) | Method |
| [`id`](#api-49cef33fa9b1a6a2) | Property |
| [`order`](#api-a34987f9e92bea05) | Property |

## Type declaration

<a id="api-1ae5b37acfd3fb0d"></a>
<!-- api: T:InnoEditor.Core.EditorModuleAttribute cb122377c46c8b7cec276047526191415852bf33cb05bc2678207985c8c0c284 -->

```csharp
public sealed class InnoEditor.Core.EditorModuleAttribute : System.Attribute
```

Registers an editor feature module with a stable identity for automatic discovery.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L9).

## `#ctor`

<a id="api-c45f61571644b09f"></a>
<!-- api: M:InnoEditor.Core.EditorModuleAttribute.#ctor(System.String,System.Int32) 2c8ab0466cb4530f2874f1e121246b1aaef9576d2deaf7dc641aac5cf2fa004a -->

```csharp
public InnoEditor.Core.EditorModuleAttribute.EditorModuleAttribute(string id, int order = 0)
```

Creates a module registration with stable identity and deterministic lifecycle order.

**Parameter `id`:** The globally unique module identifier used for discovery diagnostics and optional persisted
module state.

**Parameter `order`:** The ascending order used to start and update the module.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L24).

## `id`

<a id="api-49cef33fa9b1a6a2"></a>
<!-- api: P:InnoEditor.Core.EditorModuleAttribute.id 5ccc5fcf48777651ceeec2aa10465522d90b67efa0d2be39285ebf8534ba593a -->

```csharp
public string InnoEditor.Core.EditorModuleAttribute.id { get; }
```

Gets the stable module identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L37).

## `order`

<a id="api-a34987f9e92bea05"></a>
<!-- api: P:InnoEditor.Core.EditorModuleAttribute.order ac668ace8cdc96e0612375945947a95bab4ca0c1b073f92a7cc864bbdd802380 -->

```csharp
public int InnoEditor.Core.EditorModuleAttribute.order { get; }
```

Gets the stable lifecycle order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Core/Extensions/EditorModuleAttribute.cs#L42).
