---
title: "ImGuiWidget — Method: TransformGizmo"
description: "Exact Method: TransformGizmo contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.f6b4050d01417d82
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: TransformGizmo

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TransformGizmo`

<a id="api-7340be9b982eacff"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.TransformGizmo(InnoEngine.Mathematics.Matrix,InnoEditor.ImGui.TransformGizmoOptions) 51af6b23abe49d78340eab114565909004e4273428a1d06132d7cd99b31411c1 -->

```csharp
public InnoEditor.ImGui.TransformGizmoResult InnoEditor.ImGui.ImGuiWidget.TransformGizmo(InnoEngine.Mathematics.Matrix world, InnoEditor.ImGui.TransformGizmoOptions options)
```

Draws a transform handle using stack-owned ABI buffers and restores native global style and masks before returning.

**Parameter `world`:** The current world matrix, copied into the native call.

**Parameter `options`:** The explicit viewport and interaction policy.

**Returns:** Copied output with no native pointer or domain object.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Gizmo.cs#L146).
