---
title: "TransformGizmoSpace"
description: "Reference for TransformGizmoSpace in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.cfb70b4b7c69cd8d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `TransformGizmoSpace`

This reference describes `TransformGizmoSpace` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Local`](#api-2239affd0fc2519e) | Field |
| [`World`](#api-9dde4ed3847974e7) | Field |

## Type declaration

<a id="api-cfb70b4b7c69cd8d"></a>
<!-- api: T:InnoEditor.ImGui.TransformGizmoSpace 505acf586685bff78831baeab9eb57567c3799deeeffc87bebc7530e715f65a2 -->

```csharp
public enum InnoEditor.ImGui.TransformGizmoSpace : int
```

Chooses how the manipulation axes are oriented.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L45).

## `Local`

<a id="api-2239affd0fc2519e"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoSpace.Local a8f573ed58f729a606b8cb8aa5116a210555fa877e1662bae2ab2362529b5061 -->

```csharp
InnoEditor.ImGui.TransformGizmoSpace.Local = 0
```

Uses the object's local orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L50).

## `World`

<a id="api-9dde4ed3847974e7"></a>
<!-- api: F:InnoEditor.ImGui.TransformGizmoSpace.World f859ab04745cb845f80d7ebf169d8cb12a9e764d7d80514b9f2eb6134fa11043 -->

```csharp
InnoEditor.ImGui.TransformGizmoSpace.World = 1
```

Uses the world's orientation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L54).
