---
title: "ImGui — Method: IsMouseButtonDown"
description: "Exact Method: IsMouseButtonDown contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.c686198f942f4b34
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsMouseButtonDown

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsMouseButtonDown`

<a id="api-e1f8d55fe06a27ed"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsMouseButtonDown(InnoEditor.ImGui.ImGuiMouseButton) 16b5d7d32f1c5d9d3c3b450d22f95f8904d572627f3e0a23746caf99fbbd42d9 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsMouseButtonDown(InnoEditor.ImGui.ImGuiMouseButton button = InnoEditor.ImGui.ImGuiMouseButton.Left)
```

Gets whether a mouse button is held in the current Editor UI frame, including input consumed by UI controls.

**Parameter `button`:** The UI mouse button to query.

**Returns:** True while the button is held; callers must also check their item's active or hovered state before editing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1135).
