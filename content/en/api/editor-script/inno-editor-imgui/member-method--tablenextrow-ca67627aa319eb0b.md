---
title: "ImGui — Method: TableNextRow"
description: "Exact Method: TableNextRow contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ca67627aa319eb0b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: TableNextRow

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TableNextRow`

<a id="api-2fe634178273b42d"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.TableNextRow(InnoEditor.ImGui.ImGuiTableRowFlags,System.Single) 19514ea7a886e1a8f09e4c68a3471dcfc6233f8e97a19de85c84d5a55a3e887e -->

```csharp
public static void InnoEditor.ImGui.ImGui.TableNextRow(InnoEditor.ImGui.ImGuiTableRowFlags flags = InnoEditor.ImGui.ImGuiTableRowFlags.None, float minimumHeight = 0)
```

Advances to the next table row.

**Parameter `flags`:** Row presentation flags.

**Parameter `minimumHeight`:** Minimum row height in UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L445).
