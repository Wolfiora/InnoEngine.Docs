---
title: "ImGuiWidget — Method: MeasureDialog"
description: "Exact Method: MeasureDialog contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.462ed383ff347359
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: MeasureDialog

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `MeasureDialog`

<a id="api-8f94d081d72b0b2f"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.MeasureDialog(InnoEditor.ImGui.DialogPresentation,System.Numerics.Vector2) 6a82c7e01c15fe0c22f8f1ae7737355ecab4de83987a00946cef7f97511c7208 -->

```csharp
public InnoEditor.ImGui.DialogLayout InnoEditor.ImGui.ImGuiWidget.MeasureDialog(InnoEditor.ImGui.DialogPresentation presentation, System.Numerics.Vector2 availableSize)
```

Measures current dialog content before its window is opened. The returned geometry must be used with the same presentation.

**Parameter `presentation`:** The immutable content captured for this frame.

**Parameter `availableSize`:** The bounded content area in already scaled presentation coordinates.

**Returns:** The bounded current-frame layout, including a single scrolling body when required.

**Throws `System.ArgumentNullException`:** The message is null.

**Throws `System.ArgumentException`:** The message, expanded details or action label contain an embedded zero code unit.

**Throws `System.Text.EncoderFallbackException`:** The message, expanded details or action label contain invalid Unicode.

**Throws `System.ArgumentOutOfRangeException`:** The available dimensions are not finite and positive, or a determinate progress fraction is outside zero through one.

**Throws `System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Throws `System.ObjectDisposedException`:** The owning UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L119).
