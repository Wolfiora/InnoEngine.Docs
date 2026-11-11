---
title: "ImGui — Method: GetControlId"
description: "Exact Method: GetControlId contracts in ImGui."
uid: api.inno.editor.imgui.f15bd1660b15430e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetControlId

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetControlId`

<a id="api-6f1daa455ff865ce"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetControlId(System.String) 13b994308346d1f86cb83862169d38516ceaf1f2cefe49ead99c87256741417b -->

```csharp
public static uint Inno.Editor.ImGui.ImGui.GetControlId(string label)
```

Derives a control identity from the current window and ID stack.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Drawing.cs#L35).
