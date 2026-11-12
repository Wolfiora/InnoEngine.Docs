---
title: "ImGuiWidget — Method: CenteredButton"
description: "Exact Method: CenteredButton contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.8e383bc92ab5136f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CenteredButton

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CenteredButton`

<a id="api-d18aac12fc900a10"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CenteredButton(System.String,System.Single) 391f54e037c7425fbb640856e159e1333b61a4da4267b6b8fbdf678a1b20f3bd -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.CenteredButton(string label, float topPadding = 0)
```

Draws a horizontally centered button with optional space above it.

**Parameter `label`:** Visible label and optional ImGui identifier suffix.

**Parameter `topPadding`:** Additional vertical space above the button.

**Returns:** `true` when the button is pressed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L226).
