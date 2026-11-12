---
title: "EditorGizmoContext"
description: "Reference for EditorGizmoContext in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.315293ea58476412
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorGizmoContext`

This reference describes `EditorGizmoContext` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-33e74773be1e1216) | Method |
| [`content`](#api-e713070689a822c5) | Property |
| [`pixelHeight`](#api-cd9d565280664f51) | Property |
| [`pixelWidth`](#api-207950fb8a0e0bba) | Property |
| [`selected`](#api-78fab5de40c07aaa) | Property |

## Type declaration

<a id="api-315293ea58476412"></a>
<!-- api: T:InnoEditor.Rendering.EditorGizmoContext 85711c161ee219206c0b338054f1f885fbea1f206161214b8194eb1388b58c36 -->

```csharp
public sealed class InnoEditor.Rendering.EditorGizmoContext
```

Provides scene content and selection for transient Editor gizmos.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L12).

## `#ctor`

<a id="api-33e74773be1e1216"></a>
<!-- api: M:InnoEditor.Rendering.EditorGizmoContext.#ctor(InnoEngine.References.ContentReadScope,System.Nullable{InnoEngine.Core.RuntimeIdentity},System.Int32,System.Int32) 7247d5832ecde3b6ec69c36d366647c28779b14bc2ea272c889f382fe2047f22 -->

```csharp
public InnoEditor.Rendering.EditorGizmoContext.EditorGizmoContext(InnoEngine.References.ContentReadScope content, InnoEngine.Core.RuntimeIdentity? selected, int pixelWidth, int pixelHeight)
```

Creates a frame-scoped gizmo request.

**Parameter `content`:** The scenes presented by the Scene viewport.

**Parameter `selected`:** The selected live object, when available.

**Parameter `pixelWidth`:** The Scene viewport width.

**Parameter `pixelHeight`:** The Scene viewport height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L29).

## `content`

<a id="api-e713070689a822c5"></a>
<!-- api: P:InnoEditor.Rendering.EditorGizmoContext.content 808e07dc8abb38801c4cb7be6a6c9f2c7d26e3624b421a2d8d834d827c5410a7 -->

```csharp
public InnoEngine.References.ContentReadScope InnoEditor.Rendering.EditorGizmoContext.content { get; }
```

Gets the scene roots visible in this Editor viewport.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L44).

## `pixelHeight`

<a id="api-cd9d565280664f51"></a>
<!-- api: P:InnoEditor.Rendering.EditorGizmoContext.pixelHeight 9d2747e03ae7601b5642f2e2783ad23a24162d05994baa0dcfd4ffc249a2a1fa -->

```csharp
public int InnoEditor.Rendering.EditorGizmoContext.pixelHeight { get; }
```

Gets the viewport height in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L56).

## `pixelWidth`

<a id="api-207950fb8a0e0bba"></a>
<!-- api: P:InnoEditor.Rendering.EditorGizmoContext.pixelWidth 2278fa64a05372e564c3487503b3cff4f583a84cee727db033d36f2b9eb5a8cd -->

```csharp
public int InnoEditor.Rendering.EditorGizmoContext.pixelWidth { get; }
```

Gets the viewport width in physical pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L52).

## `selected`

<a id="api-78fab5de40c07aaa"></a>
<!-- api: P:InnoEditor.Rendering.EditorGizmoContext.selected bb1be65b15e8363d01ea5692c2eb5f55b15729d267232a134b85ab2d52ffdbd0 -->

```csharp
public InnoEngine.Core.RuntimeIdentity? InnoEditor.Rendering.EditorGizmoContext.selected { get; }
```

Gets the transient selected identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorGizmoProvider.cs#L48).
