---
title: "ImGui — Method: GetInput"
description: "Exact Method: GetInput contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.7bc773c0ec222222
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetInput

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetInput`

<a id="api-a7ed0456c4f0c848"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetInput 4cc62a47ab187a3e61cc148812c6c9811ef8dd511f6561585046bd05efb9ea71 -->

```csharp
public static InnoEditor.ImGui.EditorUiInput InnoEditor.ImGui.ImGui.GetInput()
```

Copies the input facts for this frame.

**Returns:** A neutral value snapshot; no pointer or callback is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L28).
