---
title: "EditorViewportManipulationPlane"
description: "Reference for EditorViewportManipulationPlane in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.7f07ac4c54e59a26
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: source-clr
contracts:
  - project.inno-editor-rendering
---
# `EditorViewportManipulationPlane`

This reference describes `EditorViewportManipulationPlane` in `Inno.Editor.Rendering`. Read the [shared contract](../../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Spatial`](#api-5bd3ed94e719cec1) | Field |
| [`XY`](#api-4d55008c7bbaec37) | Field |
| [`XZ`](#api-ffa4bdd3e22c3b9e) | Field |
| [`YZ`](#api-bd2b2c4ac5d32fbb) | Field |

## Type declaration

<a id="api-7f07ac4c54e59a26"></a>
<!-- api: T:Inno.Editor.Rendering.EditorViewportManipulationPlane e442f378239795dd73d86c28ad54f4a54b568b037cc0ec8c2c491a2b48ff5180 -->

```csharp
public enum Inno.Editor.Rendering.EditorViewportManipulationPlane : int
```

Selects whether transform handles use all axes or a contributor-declared planar orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L244).

## `Spatial`

<a id="api-5bd3ed94e719cec1"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportManipulationPlane.Spatial de666c01753dab60b74e3388aae75205b01e6e4e3872c6788f5501f4dd6a7d74 -->

```csharp
Inno.Editor.Rendering.EditorViewportManipulationPlane.Spatial = 0
```

Keeps the full three-dimensional translation, rotation, and scale controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L249).

## `XY`

<a id="api-4d55008c7bbaec37"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportManipulationPlane.XY f7725a18658a8b2937eddac6dd62ed1b97657dff904210e1938760a96445e621 -->

```csharp
Inno.Editor.Rendering.EditorViewportManipulationPlane.XY = 1
```

Uses the X/Y translation and scale axes with the Z rotation handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L254).

## `XZ`

<a id="api-ffa4bdd3e22c3b9e"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportManipulationPlane.XZ 9e92c3b90386c29fd0797eaea3db8ef3e3d333d83260bb70c4010624172e6c5e -->

```csharp
Inno.Editor.Rendering.EditorViewportManipulationPlane.XZ = 2
```

Uses the X/Z translation and scale axes with the Y rotation handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L259).

## `YZ`

<a id="api-bd2b2c4ac5d32fbb"></a>
<!-- api: F:Inno.Editor.Rendering.EditorViewportManipulationPlane.YZ 107adf5da59455a283aaaae52fb8be8257a983577f32151b8bbbfb3b32354da2 -->

```csharp
Inno.Editor.Rendering.EditorViewportManipulationPlane.YZ = 3
```

Uses the Y/Z translation and scale axes with the X rotation handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L264).
