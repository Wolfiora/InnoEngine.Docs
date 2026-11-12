---
title: "ImGuiWidget — Method: Checkbox"
description: "Exact Method: Checkbox contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.3f3b59e9f7d5c11e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: Checkbox

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Checkbox`

<a id="api-8bf26b91331f7533"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.Checkbox(System.String,System.Boolean@,System.String) ecc66d3b501fb8a503b7f75f95123b0eff3124900d4c56d38927d1ea50a96295 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.Checkbox(string label, ref bool value, string? tooltip = null)
```

Draws a standard checkbox with the shared editor tooltip behavior.

**Parameter `label`:** Visible label and stable ImGui identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

**Returns:** `true` when the value changed.

**Throws `System.ArgumentException`:** Thrown when `label` is empty or whitespace.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L202).
