---
title: "ImGui — Method: IsMouseDoubleClicked"
description: "Exact Method: IsMouseDoubleClicked contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.8c11d6bec2a4b376
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsMouseDoubleClicked

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsMouseDoubleClicked`

<a id="api-7c4206bdc0ba224b"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsMouseDoubleClicked(InnoEditor.ImGui.ImGuiMouseButton) 646173b95e2a09cf3990561b8503be8636d3e2ce814ab31d047642d74c27da78 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsMouseDoubleClicked(InnoEditor.ImGui.ImGuiMouseButton button)
```

Checks the backend-classified double-click event.

**Parameter `button`:** The pointer button to inspect.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L67).
