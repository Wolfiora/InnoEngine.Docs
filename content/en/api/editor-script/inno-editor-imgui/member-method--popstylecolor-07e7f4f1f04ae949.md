---
title: "ImGui — Method: PopStyleColor"
description: "Exact Method: PopStyleColor contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.07e7f4f1f04ae949
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PopStyleColor

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PopStyleColor`

<a id="api-fe7a850f87bc3e41"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PopStyleColor(System.Int32) 8cc8d3bd814529093067e6c97ed05333a63e17d5d322877d4dfda58fa4b395c9 -->

```csharp
public static void InnoEditor.ImGui.ImGui.PopStyleColor(int count = 1)
```

Pops color overrides.

**Parameter `count`:** The positive number of overrides to pop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L821).
