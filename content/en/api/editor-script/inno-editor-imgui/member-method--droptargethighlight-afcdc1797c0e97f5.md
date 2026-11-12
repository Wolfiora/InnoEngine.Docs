---
title: "ImGuiWidget — Method: DropTargetHighlight"
description: "Exact Method: DropTargetHighlight contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.afcdc1797c0e97f5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: DropTargetHighlight

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DropTargetHighlight`

<a id="api-e6ebc1f8d1a16af3"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DropTargetHighlight(System.Numerics.Vector2,System.Numerics.Vector2) 2df20762e0acf63fc89f452eceb6e0ec63ff2078452389f6bdb6bb74e9aa2132 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.DropTargetHighlight(System.Numerics.Vector2 min, System.Numerics.Vector2 max)
```

Draws the standard yellow rectangular drag-and-drop target highlight above all normal
window content in screen coordinates.

**Parameter `min`:** Minimum target coordinate.

**Parameter `max`:** Maximum target coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L398).
