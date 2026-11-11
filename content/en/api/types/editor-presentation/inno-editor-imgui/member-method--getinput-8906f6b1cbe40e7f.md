---
title: "ImGui — Method: GetInput"
description: "Exact Method: GetInput contracts in ImGui."
uid: api.inno.editor.imgui.8906f6b1cbe40e7f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetInput

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetInput`

<a id="api-9e6f2483856f5a89"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetInput 59bdb28d4fecacde52300fdd6c46d2458f673c02b5454646b6a091932d1f098e -->

```csharp
public static Inno.Editor.ImGui.EditorUiInput Inno.Editor.ImGui.ImGui.GetInput()
```

Copies the input facts for this frame.

**Returns:** A neutral value snapshot; no pointer or callback is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L28).
