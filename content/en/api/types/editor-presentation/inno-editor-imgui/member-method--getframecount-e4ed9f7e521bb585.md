---
title: "ImGui — Method: GetFrameCount"
description: "Exact Method: GetFrameCount contracts in ImGui."
uid: api.inno.editor.imgui.e4ed9f7e521bb585
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetFrameCount

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetFrameCount`

<a id="api-17654a2c5bf9d465"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetFrameCount a55ed9485ec97b1e86ea715e524ba656e951f1384d9fccfdd1cb8c00cb13fb75 -->

```csharp
public static int Inno.Editor.ImGui.ImGui.GetFrameCount()
```

Gets the current native frame identity for transient diagnostics.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L273).
