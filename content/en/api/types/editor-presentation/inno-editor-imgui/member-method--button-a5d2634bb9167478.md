---
title: "ImGui — Method: Button"
description: "Exact Method: Button contracts in ImGui."
uid: api.inno.editor.imgui.a5d2634bb9167478
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: Button

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `Button`

<a id="api-a1b78639304c4b66"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.Button(System.String,System.Numerics.Vector2) b08fe4515f76f8700e09f99947c313ff6fb6bc45bcd2cd8454ed13bb09ea8632 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.Button(string label, System.Numerics.Vector2 size = default(System.Numerics.Vector2))
```

Draws a standard button.

**Parameter `label`:** The visible label and optional ImGui identity suffix.

**Parameter `size`:** The requested size, or zero components for automatic sizing.

**Returns:** `true` when the button is activated.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L38).
