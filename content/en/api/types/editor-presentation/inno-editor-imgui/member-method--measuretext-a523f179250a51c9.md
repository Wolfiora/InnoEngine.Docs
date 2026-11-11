---
title: "ImGui — Method: MeasureText"
description: "Exact Method: MeasureText contracts in ImGui."
uid: api.inno.editor.imgui.a523f179250a51c9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: MeasureText

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MeasureText`

<a id="api-34e2aaccf12e5b07"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.MeasureText(System.String,System.Single) 2ebf93c40928de06f53d5c5ec1cbac4bdef93385c7e0d21a8233e7a6c32d72ef -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.ImGui.ImGui.MeasureText(string text, float scale)
```

Measures literal text at a relative font scale.

**Parameter `text`:** The literal text to measure.

**Parameter `scale`:** Scale relative to the current font.

**Returns:** The copied width and height in UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L150).

## `MeasureText`

<a id="api-2f7d82967144f1b1"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.MeasureText(System.String) c6a8ecd1fdfb6d444ec94b33aa384ccbe043800852ad13c563866dc54d9ecf9e -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.ImGui.ImGui.MeasureText(string text)
```

Measures text using the current font.

**Returns:** The measured width and height.

**Parameter `text`:** The text text validated by the measure text operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1037).
