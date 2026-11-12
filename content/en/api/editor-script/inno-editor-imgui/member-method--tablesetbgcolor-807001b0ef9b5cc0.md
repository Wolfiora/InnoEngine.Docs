---
title: "ImGui — Method: TableSetBgColor"
description: "Exact Method: TableSetBgColor contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.807001b0ef9b5cc0
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: TableSetBgColor

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TableSetBgColor`

<a id="api-4222036babb56fdb"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.TableSetBgColor(InnoEditor.ImGui.ImGuiTableBgTarget,System.UInt32,System.Int32) 799be039beb5e296770e7cf8f80f2cfddf2af24b43884f22d918dbce68bcdf94 -->

```csharp
public static void InnoEditor.ImGui.ImGui.TableSetBgColor(InnoEditor.ImGui.ImGuiTableBgTarget target, uint color, int column = -1)
```

Sets a table row or cell background through the current table scope.

**Parameter `target`:** The table background role.

**Parameter `color`:** The packed RGBA color or semantic style slot.

**Parameter `column`:** The target column, or -1 for the current row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Tables.cs#L38).
