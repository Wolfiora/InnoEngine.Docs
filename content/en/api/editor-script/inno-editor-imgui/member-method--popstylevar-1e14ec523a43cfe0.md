---
title: "ImGui — Method: PopStyleVar"
description: "Exact Method: PopStyleVar contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.1e14ec523a43cfe0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: PopStyleVar

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PopStyleVar`

<a id="api-e9550a2c76cd0c2a"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.PopStyleVar(System.Int32) 6d44047602d8a718494b1bc499855cf8c9cec23125f597ad31bf1a6c2fe36c08 -->

```csharp
public static void InnoEditor.ImGui.ImGui.PopStyleVar(int count = 1)
```

Pops style-variable overrides.

**Parameter `count`:** The positive number of overrides to pop.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L867).
