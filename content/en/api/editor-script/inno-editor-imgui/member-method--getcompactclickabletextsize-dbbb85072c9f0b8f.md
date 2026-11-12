---
title: "ImGuiWidget — Method: GetCompactClickableTextSize"
description: "Exact Method: GetCompactClickableTextSize contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.dbbb85072c9f0b8f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: GetCompactClickableTextSize

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetCompactClickableTextSize`

<a id="api-9d73bab3fea4f347"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.GetCompactClickableTextSize fd71e6b16bd3ae1b2f7b78eed79ce7f4b29752af81aca3a591a0500dda631bd9 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.ImGuiWidget.GetCompactClickableTextSize()
```

Gets the compact fixed interaction size used by icon-style clickable text.

**Returns:** A fixed-size area that follows the editor icon slot convention.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L559).
