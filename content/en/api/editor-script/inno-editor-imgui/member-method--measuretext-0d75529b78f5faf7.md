---
title: "ImGui — Method: MeasureText"
description: "Exact Method: MeasureText contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.0d75529b78f5faf7
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: MeasureText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `MeasureText`

<a id="api-bb9f28a7adfea63f"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.MeasureText(System.String,System.Single) b3212f4bb7b4b42583d570f78ad1771a123284f009dc5c52dcbe009343aefdd0 -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.MeasureText(string text, float scale)
```

Measures literal text at a relative font scale.

**Parameter `text`:** The literal text to measure.

**Parameter `scale`:** Scale relative to the current font.

**Returns:** The copied width and height in UI pixels.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L150).

## `MeasureText`

<a id="api-4e59f32f2ee79b9a"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.MeasureText(System.String) bba265a2258ef28b387a47c471379e0472624703710fd6ed21ed93cd5bb005a0 -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.MeasureText(string text)
```

Measures text using the current font.

**Returns:** The measured width and height.

**Parameter `text`:** The text text validated by the measure text operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1037).
