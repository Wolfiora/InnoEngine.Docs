---
title: "EditorViewportNavigationCapabilities"
description: "Reference for EditorViewportNavigationCapabilities in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.883658942d8aca71
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportNavigationCapabilities`

This reference describes `EditorViewportNavigationCapabilities` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Fly`](#api-8b637147f4280b61) | Field |
| [`FrameSelection`](#api-17a21d80c8ae11c2) | Field |
| [`None`](#api-26a6b96522170a38) | Field |
| [`Orbit`](#api-afa4c047ba384a36) | Field |
| [`Pan`](#api-932998480b4a1a14) | Field |
| [`Planar`](#api-d585629d8883f4f9) | Field |
| [`Zoom`](#api-2fa1969746c6811f) | Field |

## Type declaration

<a id="api-883658942d8aca71"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportNavigationCapabilities ebf149198292b174a35495718cee47f3ac569c7fcbcf8f09e86951276ae34001 -->

```csharp
public enum Inno.Editor.Rendering.EditorViewportNavigationCapabilities : int
```

Declares navigation operations supported by one viewport interaction controller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L48).

## `Fly`

<a id="api-8b637147f4280b61"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Fly 81337c1070bdce32b1e9357461a55f0597894012731852ddb31000a14ec7bb00 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Fly = 8
```

Allows free-look movement.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L78).

## `FrameSelection`

<a id="api-17a21d80c8ae11c2"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationCapabilities.FrameSelection 066408e58875aa86d8603bb1d27e08ad8f4d2f7b29c04116db4322e3da8ea982 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationCapabilities.FrameSelection = 16
```

Allows framing a provider-supplied or host-derived selection bound.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L83).

## `None`

<a id="api-26a6b96522170a38"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationCapabilities.None 50c44f5094e4eaec1dd0d7f80f231f12f3228c28c195e9e84b9d4eccbdcaf1b0 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationCapabilities.None = 0
```

Disables host-owned navigation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L53).

## `Orbit`

<a id="api-afa4c047ba384a36"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Orbit 5956d9a16d194fa697f15b728341e12c215e1a990aa3593530182fad47786fd9 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Orbit = 4
```

Allows pivot-oriented orbit and dolly.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L73).

## `Pan`

<a id="api-932998480b4a1a14"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Pan 2359dadbde64be5a02e3576ee0b88148d1487fa8b40b1be6b0250ae3f590f0d2 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Pan = 1
```

Allows translating the view parallel to its image plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L58).

## `Planar`

<a id="api-d585629d8883f4f9"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Planar 4f1577cb748d2197ab3e90e3398382065d374009057d61d0597e7b6e23031cd6 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Planar = Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Pan | Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Zoom
```

Allows the complete plane-oriented pan and zoom interaction model.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L68).

## `Zoom`

<a id="api-2fa1969746c6811f"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Zoom c9a09a82ca049100b5de83dd923f9863d803feae43d30e079a97376baf0e3392 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationCapabilities.Zoom = 2
```

Allows changing orthographic size or perspective focus distance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L63).
