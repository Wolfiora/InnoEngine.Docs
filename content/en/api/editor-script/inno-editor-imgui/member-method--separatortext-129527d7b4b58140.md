---
title: "ImGui — Method: SeparatorText"
description: "Exact Method: SeparatorText contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.129527d7b4b58140
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SeparatorText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SeparatorText`

<a id="api-25895dee18b4bdb7"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SeparatorText(System.String) ce519537796170cebfd62948599b00870c92e63274f90c4e6bb7765ce19e72a1 -->

```csharp
public static void InnoEditor.ImGui.ImGui.SeparatorText(string label)
```

Draws a labeled horizontal separator.

**Parameter `label`:** The label text validated by the separator text operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L905).
