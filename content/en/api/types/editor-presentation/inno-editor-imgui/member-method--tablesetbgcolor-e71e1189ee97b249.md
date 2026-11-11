---
title: "ImGui — Method: TableSetBgColor"
description: "Exact Method: TableSetBgColor contracts in ImGui."
uid: api.inno.editor.imgui.e71e1189ee97b249
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: TableSetBgColor

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TableSetBgColor`

<a id="api-784dbf04c6b530a0"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.TableSetBgColor(Inno.Editor.ImGui.ImGuiTableBgTarget,System.UInt32,System.Int32) 9fbb4db5b25d20d4078bd04ed843d625ba6611f9628e6f60c983e76c0d68d568 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.TableSetBgColor(Inno.Editor.ImGui.ImGuiTableBgTarget target, uint color, int column = -1)
```

Sets a table row or cell background through the current table scope.

**Parameter `target`:** The table background role.

**Parameter `color`:** The packed RGBA color or semantic style slot.

**Parameter `column`:** The target column, or -1 for the current row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Tables.cs#L38).
