---
title: "ImGuiWidget.ImGuiWidget — Method: TransformGizmo"
description: "Exact Method: TransformGizmo contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.13830c309d05e86c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: TransformGizmo

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TransformGizmo`

<a id="api-13cef7eba0798a30"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TransformGizmo(Inno.Core.Mathematics.Matrix,Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions) 6714a575ff69d0104ba0b9a882c809c5779be53b4e46274ec37c9a2a06fea337 -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.TransformGizmoResult Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TransformGizmo(Inno.Core.Mathematics.Matrix world, Inno.Editor.ImGui.ImGuiWidget.TransformGizmoOptions options)
```

Draws a transform handle using stack-owned ABI buffers and restores native global style and masks before returning.

**Parameter `world`:** The current world matrix, copied into the native call.

**Parameter `options`:** The explicit viewport and interaction policy.

**Returns:** Copied output with no native pointer or domain object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L146).
