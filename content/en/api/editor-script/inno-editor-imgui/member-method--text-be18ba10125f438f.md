---
title: "ImGui — Method: Text"
description: "Exact Method: Text contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.be18ba10125f438f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: Text

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Text`

<a id="api-5f44ea83db7e1e85"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.Text(System.String) 5895b770e3663ceb8864f02e54896b333ab5c89e8d74bdf55cdb22a76dedf234 -->

```csharp
public static void InnoEditor.ImGui.ImGui.Text(string text)
```

Draws unformatted text.

**Parameter `text`:** Literal text to draw; percent characters are displayed without format-string interpretation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L20).
