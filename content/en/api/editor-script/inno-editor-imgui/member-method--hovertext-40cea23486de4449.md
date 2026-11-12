---
title: "ImGuiWidget — Method: HoverText"
description: "Exact Method: HoverText contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.40cea23486de4449
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: HoverText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `HoverText`

<a id="api-12cf7eeea79722f4"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.HoverText(System.String,System.String) 32d0d08f0ac1de2067db5269b76c8f666bb01ddfde454e6fab3ddb1c19a075db -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.HoverText(string id, string text)
```

Draws a text link with no button background and highlights it only through text presentation.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible link text.

**Returns:** `true` when the link is pressed.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L205).
