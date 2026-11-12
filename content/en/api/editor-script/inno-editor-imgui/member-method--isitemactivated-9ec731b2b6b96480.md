---
title: "ImGui — Method: IsItemActivated"
description: "Exact Method: IsItemActivated contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.9ec731b2b6b96480
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsItemActivated

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsItemActivated`

<a id="api-5d03f8209b7091c3"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsItemActivated 155615e81e754d335688cb60d59e6f4e1fc7355ea033064297e7f3b29c3a42dc -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsItemActivated()
```

Checks the first frame of the last control interaction.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L216).
