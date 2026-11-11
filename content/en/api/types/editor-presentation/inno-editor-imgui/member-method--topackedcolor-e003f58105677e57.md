---
title: "ImGui — Method: ToPackedColor"
description: "Exact Method: ToPackedColor contracts in ImGui."
uid: api.inno.editor.imgui.e003f58105677e57
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: ToPackedColor

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ToPackedColor`

<a id="api-f3f8b69f5574d92e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.ToPackedColor(System.Numerics.Vector4) d43be290a64f80b432c962ba160a2ac7c239884c970a8c9616f45fb5d81122e9 -->

```csharp
public static uint Inno.Editor.ImGui.ImGui.ToPackedColor(System.Numerics.Vector4 color)
```

Converts a floating-point RGBA color to Dear ImGui packed color order.

**Returns:** The packed color value.

**Parameter `color`:** The color consumed by to packed color; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1171).
