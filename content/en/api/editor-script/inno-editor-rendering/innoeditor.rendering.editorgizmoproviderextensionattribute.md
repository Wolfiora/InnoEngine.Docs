---
title: "EditorGizmoProviderExtensionAttribute"
description: "Reference for EditorGizmoProviderExtensionAttribute in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.8142d83124e80567
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorGizmoProviderExtensionAttribute`

This reference describes `EditorGizmoProviderExtensionAttribute` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4fd4a5d5724f0bc7) | Method |
| [`id`](#api-18e8acadc8bdbeb0) | Property |

## Type declaration

<a id="api-8142d83124e80567"></a>
<!-- api: T:InnoEditor.Rendering.EditorGizmoProviderExtensionAttribute 0b13a1f41fc7ca3afa61ebf4703d84a6b984d2ff33b1881f6ee2624b6413bc85 -->

```csharp
public sealed class InnoEditor.Rendering.EditorGizmoProviderExtensionAttribute : System.Attribute
```

Marks one reloadable Editor gizmo provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L121).

## `#ctor`

<a id="api-4fd4a5d5724f0bc7"></a>
<!-- api: M:InnoEditor.Rendering.EditorGizmoProviderExtensionAttribute.#ctor(System.String) 5cdc4553471acc5f1bff66d1232fd71c8fd62856efe20916690fb1c83f7cfaf3 -->

```csharp
public InnoEditor.Rendering.EditorGizmoProviderExtensionAttribute.EditorGizmoProviderExtensionAttribute(string id)
```

Creates a provider declaration with a stable identifier.

**Parameter `id`:** The globally unique provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L129).

## `id`

<a id="api-18e8acadc8bdbeb0"></a>
<!-- api: P:InnoEditor.Rendering.EditorGizmoProviderExtensionAttribute.id 5fb8bc18283ef4af2a5a4157d80f3b2ff05ac0ac83b11fcf729035d8b39e3ad2 -->

```csharp
public string InnoEditor.Rendering.EditorGizmoProviderExtensionAttribute.id { get; }
```

Gets the stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L138).
