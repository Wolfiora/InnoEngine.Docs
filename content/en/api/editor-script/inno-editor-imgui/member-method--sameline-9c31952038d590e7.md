---
title: "ImGui — Method: SameLine"
description: "Exact Method: SameLine contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.9c31952038d590e7
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SameLine

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SameLine`

<a id="api-2916152350b497c2"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SameLine(System.Single,System.Single) 909eb50731af0a3b7cc0cd0cad6af74fc0502a7a2c019393c16e45b5bb82c44b -->

```csharp
public static void InnoEditor.ImGui.ImGui.SameLine(float offset = 0, float spacing = -1)
```

Places the next item on the same line.

**Parameter `offset`:** The horizontal offset from the line start, or zero for automatic placement.

**Parameter `spacing`:** The explicit spacing, or a negative value for the current style spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L882).
