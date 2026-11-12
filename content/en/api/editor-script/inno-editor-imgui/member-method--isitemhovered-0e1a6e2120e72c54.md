---
title: "ImGui — Method: IsItemHovered"
description: "Exact Method: IsItemHovered contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.0e1a6e2120e72c54
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: IsItemHovered

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `IsItemHovered`

<a id="api-8f551e14675568d7"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.IsItemHovered(InnoEditor.ImGui.ImGuiHoveredFlags) e8d034203fe817bd76f7e2f9e9e8aed435059f3c4481fec9a9b5b3f194aa1a75 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.IsItemHovered(InnoEditor.ImGui.ImGuiHoveredFlags flags = InnoEditor.ImGui.ImGuiHoveredFlags.None)
```

Gets whether the previous item is hovered.

**Parameter `flags`:** Hovered query behavior.

**Returns:** `true` when the query succeeds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1093).
