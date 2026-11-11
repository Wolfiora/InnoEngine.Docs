---
title: "ImGui — Method: GetWindowSize"
description: "Exact Method: GetWindowSize contracts in ImGui."
uid: api.inno.editor.imgui.9a0986bbf92e8377
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetWindowSize

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowSize`

<a id="api-45cc30cb24304d6a"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetWindowSize 296f2595d65ffa66a28282a9c7d9966d79e3b698f093256661856cc3fbdfc1f3 -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.ImGui.ImGui.GetWindowSize()
```

Gets the current window size in UI units.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L89).
