---
title: "EditorViewportProjection"
description: "Reference for EditorViewportProjection in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.96b24033bfdb0f11
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportProjection`

This reference describes `EditorViewportProjection` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Orthographic`](#api-1bb503564ee12897) | Field |
| [`Perspective`](#api-2fd1e84dc5cda027) | Field |

## Type declaration

<a id="api-96b24033bfdb0f11"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportProjection 5cabd9488d5ba54b701976381a3b34702580f176b097aaeb3f33baa7d76e58ea -->

```csharp
public enum Inno.Editor.Rendering.EditorViewportProjection : int
```

Identifies the projection family represented by neutral Editor viewport navigation state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L10).

## `Orthographic`

<a id="api-1bb503564ee12897"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportProjection.Orthographic eddbddabed3673b46e5b53ff569dae69735bb490ce5ca2dd9df35b2328b81603 -->

```csharp
Inno.Editor.Rendering.EditorViewportProjection.Orthographic = 0
```

Uses a parallel projection controlled by an orthographic half-height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L15).

## `Perspective`

<a id="api-2fd1e84dc5cda027"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportProjection.Perspective 41b19f0ffbc165f4fc2b899ac2e2d8ad18d0d66491014340dc088c2397bc9b86 -->

```csharp
Inno.Editor.Rendering.EditorViewportProjection.Perspective = 1
```

Uses a perspective projection controlled by a vertical field of view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L20).
