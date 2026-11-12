---
title: "ImGui — Method: MeasureWrappedText"
description: "Exact Method: MeasureWrappedText contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.db70515f422ef340
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: MeasureWrappedText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `MeasureWrappedText`

<a id="api-a10b786684442713"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.MeasureWrappedText(System.String,System.Single) 07a50cf5fcc7720d3b3e30786cc8d7d39f718a65ec5b0001b689359544a18335 -->

```csharp
public static System.Numerics.Vector2 InnoEditor.ImGui.ImGui.MeasureWrappedText(string text, float wrapWidth)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1073).
