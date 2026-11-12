---
title: "ImGui — Method: TableSetupColumn"
description: "Exact Method: TableSetupColumn contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.7919f6a09a7b7cd1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: TableSetupColumn

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TableSetupColumn`

<a id="api-db514d34c8902d47"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.TableSetupColumn(System.String,InnoEditor.ImGui.ImGuiTableColumnFlags,System.Single) c9c31dcb598e7532aaf289050c69f31675d698ba0e4947d35fceb002f621f5a2 -->

```csharp
public static void InnoEditor.ImGui.ImGui.TableSetupColumn(string label, InnoEditor.ImGui.ImGuiTableColumnFlags flags = InnoEditor.ImGui.ImGuiTableColumnFlags.None, float widthOrWeight = 0)
```

Declares one table column.

**Parameter `label`:** The column label.

**Parameter `flags`:** Column behavior.

**Parameter `widthOrWeight`:** The initial fixed width or stretch weight.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L418).
