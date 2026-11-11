---
title: "ImGui — Method: GetWindowPos"
description: "Exact Method: GetWindowPos contracts in ImGui."
uid: api.inno.editor.imgui.095f0b24cee75064
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetWindowPos

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowPos`

<a id="api-d8e4fd1c9f0a1968"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetWindowPos 20bfaf4e5ba435f343adbdf19d28cc4748a2119da2f32e5312d5109c325767f7 -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.ImGui.ImGui.GetWindowPos()
```

Gets the current window screen-space origin.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L77).
