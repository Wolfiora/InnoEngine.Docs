---
title: "EditorGizmoContext"
description: "Reference for EditorGizmoContext in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.5b0e0d6e277800ff
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorGizmoContext`

This reference describes `EditorGizmoContext` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-254b181e3de27e5d) | Method |
| [`content`](#api-0403966bb429184a) | Property |
| [`pixelHeight`](#api-79bd718349f34256) | Property |
| [`pixelWidth`](#api-a50d8181df952636) | Property |
| [`selected`](#api-ef4709ab30df5c92) | Property |

## Type declaration

<a id="api-5b0e0d6e277800ff"></a>
<!-- api: T:Inno.Editor.Rendering.EditorGizmoContext a49fd3e465445f125cfefb5f002536b8584cdde5b50d82a759ae4b0da0b91f98 -->

```csharp
public sealed class Inno.Editor.Rendering.EditorGizmoContext
```

Provides scene content and selection for transient Editor gizmos.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L12).

## `#ctor`

<a id="api-254b181e3de27e5d"></a>
<!-- api: M:Inno.Editor.Rendering.EditorGizmoContext.#ctor(Inno.References.ContentReadScope,System.Nullable{Inno.Core.Identity.RuntimeIdentity},System.Int32,System.Int32) 3b5ed51551bb8476411205e58a8d1ed8b7b2ed63f0015e4ec36bca9fdbfef651 -->

```csharp
public Inno.Editor.Rendering.EditorGizmoContext.EditorGizmoContext(Inno.References.ContentReadScope content, Inno.Core.Identity.RuntimeIdentity? selected, int pixelWidth, int pixelHeight)
```

Creates a frame-scoped gizmo request.

**Parameter `content`:** The scenes presented by the Scene viewport.

**Parameter `selected`:** The selected live object, when available.

**Parameter `pixelWidth`:** The Scene viewport width.

**Parameter `pixelHeight`:** The Scene viewport height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L29).

## `content`

<a id="api-0403966bb429184a"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoContext.content a725370ff2147d11c1192a0400b13cc8c1b97116b3276470a6142d549f460dc6 -->

```csharp
public Inno.References.ContentReadScope Inno.Editor.Rendering.EditorGizmoContext.content { get; }
```

Gets the scene roots visible in this Editor viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L44).

## `pixelHeight`

<a id="api-79bd718349f34256"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoContext.pixelHeight 47ae7e889f53f4bcc44f2cd55ee41934ec120e79315112f3e10a7b7f128f311f -->

```csharp
public int Inno.Editor.Rendering.EditorGizmoContext.pixelHeight { get; }
```

Gets the viewport height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L56).

## `pixelWidth`

<a id="api-a50d8181df952636"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoContext.pixelWidth 1faa837b8b951256985dd1aa3107e380ca7b1ddd87bdbaedc3865e261acc09fd -->

```csharp
public int Inno.Editor.Rendering.EditorGizmoContext.pixelWidth { get; }
```

Gets the viewport width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L52).

## `selected`

<a id="api-ef4709ab30df5c92"></a>
<!-- api: P:Inno.Editor.Rendering.EditorGizmoContext.selected 05552bfb889c329a392bab5006e860fe857806b6c0cf3d98474b3693f90f3ee3 -->

```csharp
public Inno.Core.Identity.RuntimeIdentity? Inno.Editor.Rendering.EditorGizmoContext.selected { get; }
```

Gets the transient selected identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L48).
