---
title: "EditorViewportManipulationPlane"
description: "Reference for EditorViewportManipulationPlane in Inno.Editor.Rendering."
uid: api.inno.editor.rendering.editor-script.56785eea0411f1a7
kind: api
owners:
  - Inno.Editor.Rendering
apiSurface: editor-script
contracts:
  - project.inno-editor-rendering
  - manual.scripting.use-script-api
---
# `EditorViewportManipulationPlane`

This reference describes `EditorViewportManipulationPlane` in `Inno.Editor.Rendering`. Read the [shared contract](../../projects/inno-editor-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Spatial`](#api-440a22a2a2702c84) | Field |
| [`XY`](#api-27bc555d3218a66f) | Field |
| [`XZ`](#api-f259aa4736a99d8a) | Field |
| [`YZ`](#api-76ec7675d14475c7) | Field |

## Type declaration

<a id="api-56785eea0411f1a7"></a>
<!-- api: T:InnoEditor.Rendering.EditorViewportManipulationPlane cf2716d79e889a1e1a9ab9c43f24d1c82fff2bea3975656dee073f64282c4965 -->

```csharp
public enum InnoEditor.Rendering.EditorViewportManipulationPlane : int
```

Selects whether transform handles use all axes or a contributor-declared planar orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L244).

## `Spatial`

<a id="api-440a22a2a2702c84"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportManipulationPlane.Spatial 19c900841c8d0c4324016272714877906866d6fadcacdd0776fae75f620c4a0d -->

```csharp
InnoEditor.Rendering.EditorViewportManipulationPlane.Spatial = 0
```

Keeps the full three-dimensional translation, rotation, and scale controls.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L249).

## `XY`

<a id="api-27bc555d3218a66f"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportManipulationPlane.XY c0e978ebea248a600c02c10b02a51e3781c4df022ec8c223cbfd8cb0d9f38faa -->

```csharp
InnoEditor.Rendering.EditorViewportManipulationPlane.XY = 1
```

Uses the X/Y translation and scale axes with the Z rotation handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L254).

## `XZ`

<a id="api-f259aa4736a99d8a"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportManipulationPlane.XZ 1147a52b659e5f1d1c81ea9be50ad0f69d7003229ab0b214f321fecf43e3c6eb -->

```csharp
InnoEditor.Rendering.EditorViewportManipulationPlane.XZ = 2
```

Uses the X/Z translation and scale axes with the Y rotation handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L259).

## `YZ`

<a id="api-76ec7675d14475c7"></a>
<!-- api: F:InnoEditor.Rendering.EditorViewportManipulationPlane.YZ acd90ef521a6cd9987393a446c8293e716aa1d8631970dc2ae54406a60ba067c -->

```csharp
InnoEditor.Rendering.EditorViewportManipulationPlane.YZ = 3
```

Uses the Y/Z translation and scale axes with the X rotation handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/features/Inno.Editor.Rendering/EditorViewportContributor.cs#L264).
