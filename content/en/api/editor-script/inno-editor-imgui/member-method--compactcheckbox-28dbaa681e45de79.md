---
title: "ImGuiWidget — Method: CompactCheckbox"
description: "Exact Method: CompactCheckbox contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.28dbaa681e45de79
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CompactCheckbox

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CompactCheckbox`

<a id="api-3c96f34581c4d7ed"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CompactCheckbox(System.String,System.Boolean@,System.Single,System.String) cbadda866b1224165de386ac6cbdb9c25c79e61e2832098b92eb0d0dd1088ba2 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.CompactCheckbox(string id, ref bool value, float size = -1, string? tooltip = null)
```

Draws a compact checkbox whose checked fill uses the current text color.

**Parameter `id`:** Stable control identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `size`:** Visual square size in pixels.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

**Returns:** `true` when the value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L134).
