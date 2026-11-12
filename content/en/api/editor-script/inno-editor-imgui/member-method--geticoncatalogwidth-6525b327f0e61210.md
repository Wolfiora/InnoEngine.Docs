---
title: "ImGuiWidget — Method: GetIconCatalogWidth"
description: "Exact Method: GetIconCatalogWidth contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.6525b327f0e61210
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: GetIconCatalogWidth

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetIconCatalogWidth`

<a id="api-fb7176f7c5a2edc7"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.GetIconCatalogWidth 796ba1448c9405e3da39e5ba8d3259095952c04df66f3f20bb4955acd0d5a5d0 -->

```csharp
public float InnoEditor.ImGui.ImGuiWidget.GetIconCatalogWidth()
```

Measures the standard glyph column once per native frame in this UI session.

**Returns:** The widest visible standard glyph at the current font size, at least one text-line height.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L21).
