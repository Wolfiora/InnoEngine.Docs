---
title: "ImGui — Method: GetMousePos"
description: "Exact Method: GetMousePos contracts in ImGui."
uid: api.inno.editor.imgui.ff328fe0ba0b4ec9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetMousePos

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetMousePos`

<a id="api-6cac70f12d475f94"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetMousePos e2cea6755c54d4159fa4a558d436b6d687eecc85da8d6e6265ec64e18d2241fd -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.ImGui.ImGui.GetMousePos()
```

Gets the current pointer position in screen-space UI units.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L17).
