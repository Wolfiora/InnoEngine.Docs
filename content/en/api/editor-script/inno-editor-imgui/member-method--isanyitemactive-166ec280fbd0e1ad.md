---
title: "ImGui — Method: IsAnyItemActive"
description: "Exact Method: IsAnyItemActive contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.166ec280fbd0e1ad
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsAnyItemActive

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsAnyItemActive`

<a id="api-a4d776aa4cecb700"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsAnyItemActive 8e5fbd595dff80d53a6b01cdeb8f325f811868c4c4331cca0b025d33149e0c9a -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsAnyItemActive()
```

Checks whether a submitted control owns an active interaction.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L204).
