---
title: "ImGui — Method: GetClipBounds"
description: "Exact Method: GetClipBounds contracts in ImGui."
uid: api.inno.editor.imgui.03421d49be089f3d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetClipBounds

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetClipBounds`

<a id="api-e13a24834c6db74e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetClipBounds cd752ec80d533272257b87f020a5f67c6f2e415c82a35461c98d82d36b3228e7 -->

```csharp
public static (System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum) Inno.Editor.ImGui.ImGui.GetClipBounds()
```

Copies the current window's effective clip after parent and viewport clipping.

**Returns:** Screen-space minimum and maximum values for bounding frame-local submission work.

**Throws `System.InvalidOperationException`:** No valid drawing session or native frame is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L105).
