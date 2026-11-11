---
title: "ImGui — Method: SameLine"
description: "Exact Method: SameLine contracts in ImGui."
uid: api.inno.editor.imgui.08929ea9216cfcc8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: SameLine

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SameLine`

<a id="api-173221200e6e0ff3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.SameLine(System.Single,System.Single) 7e9caac5675e683782c4f7a7171a935bb5a212e3804f884d122c4a5fe3a9d217 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.SameLine(float offset = 0, float spacing = -1)
```

Places the next item on the same line.

**Parameter `offset`:** The horizontal offset from the line start, or zero for automatic placement.

**Parameter `spacing`:** The explicit spacing, or a negative value for the current style spacing.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L882).
