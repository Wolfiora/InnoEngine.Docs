---
title: "EditorViewportNavigationMode"
description: "Reference for EditorViewportNavigationMode in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.399478c14bb48f9e
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportNavigationMode`

This reference describes `EditorViewportNavigationMode` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Fly`](#api-7da5227b00d468b2) | Field |
| [`Orbit`](#api-918fc5b52220ab4d) | Field |
| [`Planar`](#api-b265a5ba05e24dc9) | Field |

## Type declaration

<a id="api-399478c14bb48f9e"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportNavigationMode f22cd009b5a58e93e3e5e8fcae0e296aed8a87d156fc0b9b6a94971b1f906d88 -->

```csharp
public enum Inno.Editor.Rendering.EditorViewportNavigationMode : int
```

Identifies the active interaction model without prescribing a rendering camera type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L26).

## `Fly`

<a id="api-7da5227b00d468b2"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationMode.Fly 36359ae51bbe5be0010fa181842c7c86f90543c4e0b91234013924818bd05af4 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationMode.Fly = 2
```

Moves and looks freely from the current view position.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L41).

## `Orbit`

<a id="api-918fc5b52220ab4d"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationMode.Orbit 1c853813db7900c75868a138c81b9b8869eba0a64a26d368b00137bf5ec9bed5 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationMode.Orbit = 1
```

Rotates around a focus pivot and dollies along the view direction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L36).

## `Planar`

<a id="api-b265a5ba05e24dc9"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportNavigationMode.Planar a2f0bf9ebfd28c60ec970d2e26e16be97696c5e010f9e312c31a63edd8922b05 -->

```csharp
Inno.Editor.Rendering.EditorViewportNavigationMode.Planar = 0
```

Pans and zooms over a provider-defined plane.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportNavigation.cs#L31).
