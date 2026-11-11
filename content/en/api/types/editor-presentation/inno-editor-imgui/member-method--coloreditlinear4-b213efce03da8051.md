---
title: "ImGui — Method: ColorEditLinear4"
description: "Exact Method: ColorEditLinear4 contracts in ImGui."
uid: api.inno.editor.imgui.b213efce03da8051
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: ColorEditLinear4

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ColorEditLinear4`

<a id="api-865b3b7243b8b16d"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.ColorEditLinear4(System.String,System.Numerics.Vector4@,Inno.Editor.ImGui.ImGuiColorEditFlags) 4f69b963b5854120c9dffb719843e4e8215866077862844fd51ed6362e5fcaa9 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.ColorEditLinear4(string label, ref System.Numerics.Vector4 value, Inno.Editor.ImGui.ImGuiColorEditFlags flags = Inno.Editor.ImGui.ImGuiColorEditFlags.None)
```

Displays a linear RGBA color through a display-sRGB picker and returns edits in linear space.

**Parameter `label`:** The stable identity and visible label of the color control.

**Parameter `value`:** Linear RGB and alpha; only changed RGB channels are decoded, while alpha is never transfer-encoded.

**Parameter `flags`:** Dear ImGui color-edit flags; display modes interpret sRGB values and input storage must be RGB.

**Returns:** True if the display color changed and `value` contains decoded linear RGB.

**Throws `System.ArgumentException`:** HSV input storage conflicts with the linear-RGB value contract.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L308).
