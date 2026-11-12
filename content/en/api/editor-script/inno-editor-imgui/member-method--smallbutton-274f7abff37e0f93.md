---
title: "ImGui — Method: SmallButton"
description: "Exact Method: SmallButton contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.274f7abff37e0f93
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: SmallButton

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SmallButton`

<a id="api-a0082f43cbf8d23c"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.SmallButton(System.String) d4e9c2df10d7366c1c1fcad3533cde2ecf9d0dee3caac2d262b3f2d53836ba46 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.SmallButton(string label)
```

Draws a compact button.

**Returns:** `true` when the button is activated.

**Parameter `label`:** The visible label and optional ImGui identity suffix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L55).
