---
title: "ImGuiWidget.TransformGizmoSpace"
description: "Reference for ImGuiWidget.TransformGizmoSpace in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.efe036704251095e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.TransformGizmoSpace`

This reference describes `ImGuiWidget.TransformGizmoSpace` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Local`](#api-3cc4f2d8afdeec3a) | Field |
| [`World`](#api-19ba467a415ecfe1) | Field |

## Type declaration

<a id="api-efe036704251095e"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoSpace d0e7d01d3bd4c1c339c98d40e3878345f38c4a5334db49ccc58b76a732523abb -->

```csharp
public enum Inno.Editor.ImGui.ImGuiWidget.TransformGizmoSpace : int
```

Chooses how the manipulation axes are oriented.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L45).

## `Local`

<a id="api-3cc4f2d8afdeec3a"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoSpace.Local 6076d12db542d79d1a2955e4290d699c8bf0cf36e16d06d9c99d216ec8fd18c2 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoSpace.Local = 0
```

Uses the object's local orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L50).

## `World`

<a id="api-19ba467a415ecfe1"></a>
<!-- api: F:Inno.Editor.ImGui.ImGuiWidget.TransformGizmoSpace.World d25128bc67b0df3c27e62278bf44b91c6b4bc0a2bac5cb58a7cc3e261f201707 -->

```csharp
Inno.Editor.ImGui.ImGuiWidget.TransformGizmoSpace.World = 1
```

Uses the world's orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L54).
