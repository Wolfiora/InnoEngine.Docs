---
title: "ImGui — Method: MeasureWrappedText"
description: "Exact Method: MeasureWrappedText contracts in ImGui."
uid: api.inno.editor.imgui.4b488c4aa186db79
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: MeasureWrappedText

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MeasureWrappedText`

<a id="api-8321588d0d3b8fbe"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.MeasureWrappedText(System.String,System.Single) cf3d94a4883e49c6c8e2f763a05b5045b178a9bc9e3c24c6a165c16e2cd78c54 -->

```csharp
public static System.Numerics.Vector2 Inno.Editor.ImGui.ImGui.MeasureWrappedText(string text, float wrapWidth)
```

Measures literal text using the same current font and wrap width as wrapped drawing.

**Parameter `text`:** The literal text, including explicit line breaks.

**Parameter `wrapWidth`:** The available width in already scaled presentation coordinates.

**Returns:** The copied natural text extent at the specified width.

**Throws `System.ArgumentNullException`:** The text is null.

**Throws `System.ArgumentException`:** The text contains an embedded zero code unit.

**Throws `System.Text.EncoderFallbackException`:** The text contains invalid Unicode.

**Throws `System.ArgumentOutOfRangeException`:** The width is not finite and positive.

**Throws `System.InvalidOperationException`:** No drawing scope is active on the owning UI thread and native context.

**Throws `System.ObjectDisposedException`:** The active UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1073).
