---
title: "EditorGizmoProviderExtensionAttribute"
description: "Reference for EditorGizmoProviderExtensionAttribute in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.4ac0ed9f131a8476
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorGizmoProviderExtensionAttribute`

This reference describes `EditorGizmoProviderExtensionAttribute` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-103bf7ff01e7f9ad) | Method |
| [`id`](#api-3d12e75a859240ea) | Property |

## Type declaration

<a id="api-4ac0ed9f131a8476"></a>
<!-- api: T:Inno.Editor.Rendering.EditorGizmoProviderExtensionAttribute 30f78b030ae63bdc29f7595b52aa31a9dea39c107ba1747de19d1752242e1334 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorGizmoProviderExtensionAttribute : System.Attribute
```

Marks one reloadable Editor gizmo provider.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L121).

## `#ctor`

<a id="api-103bf7ff01e7f9ad"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoProviderExtensionAttribute.#ctor(System.String) 918a6ccb810b6cddbe961b240916777f292754ab13bac5c478fa13e63c5308f4 -->

```csharp
public Inno.Editor.Rendering.EditorGizmoProviderExtensionAttribute.EditorGizmoProviderExtensionAttribute(string id)
```

Creates a provider declaration with a stable identifier.

**Parameter `id`:** The globally unique provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L129).

## `id`

<a id="api-3d12e75a859240ea"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoProviderExtensionAttribute.id a7cd762564426606606b45e2d20f4d8a1fba9b8d27ffa68bbe6b111290bcce6b -->

```csharp
public string Inno.Editor.Rendering.EditorGizmoProviderExtensionAttribute.id { get; }
```

Gets the stable provider identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L138).
