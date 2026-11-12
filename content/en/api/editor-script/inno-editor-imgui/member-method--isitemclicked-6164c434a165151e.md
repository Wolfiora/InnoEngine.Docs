---
title: "ImGui — Method: IsItemClicked"
description: "Exact Method: IsItemClicked contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.6164c434a165151e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsItemClicked

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsItemClicked`

<a id="api-a34d4ae309726fc8"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsItemClicked(InnoEditor.ImGui.ImGuiMouseButton) 0b428b1a7672f9f07c28b4132ee5ac7d1e58205be1d5620ffea0fd9c20578105 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsItemClicked(InnoEditor.ImGui.ImGuiMouseButton button = InnoEditor.ImGui.ImGuiMouseButton.Left)
```

Gets whether the previous item was clicked with a mouse button.

**Parameter `button`:** The mouse button to query.

**Returns:** `true` when the item was clicked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1120).
