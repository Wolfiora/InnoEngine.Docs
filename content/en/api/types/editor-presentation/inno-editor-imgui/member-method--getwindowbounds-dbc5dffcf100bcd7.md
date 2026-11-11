---
title: "ImGui — Method: GetWindowBounds"
description: "Exact Method: GetWindowBounds contracts in ImGui."
uid: api.inno.editor.imgui.dbc5dffcf100bcd7
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetWindowBounds

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetWindowBounds`

<a id="api-e2aa50211157ba3e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetWindowBounds d94d1f809ab038d83c35198c289394324ab1600a3d58e299823fae1821ed299c -->

```csharp
public static (float minimumX, float maximumX, System.Numerics.Vector2 workMaximum, System.Numerics.Vector2 padding) Inno.Editor.ImGui.ImGui.GetWindowBounds()
```

Gets copied inner and work bounds for the current window.

**Returns:** Screen-space horizontal bounds and work maximum.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L89).
