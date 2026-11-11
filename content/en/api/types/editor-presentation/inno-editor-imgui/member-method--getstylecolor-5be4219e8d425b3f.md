---
title: "ImGui — Method: GetStyleColor"
description: "Exact Method: GetStyleColor contracts in ImGui."
uid: api.inno.editor.imgui.5be4219e8d425b3f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetStyleColor

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetStyleColor`

<a id="api-c8cfbe55a787517b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetStyleColor(Inno.Editor.ImGui.ImGuiCol) b0c8e750c9a9cffbae9603e085e150f06179e677357b5f3094e2fd30379e9a36 -->

```csharp
public static uint Inno.Editor.ImGui.ImGui.GetStyleColor(Inno.Editor.ImGui.ImGuiCol color)
```

Gets the current style color including the active alpha.

**Parameter `color`:** The packed RGBA color or semantic style slot.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Drawing.cs#L20).
