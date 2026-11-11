---
title: "ImGuiWidget.ImGuiWidget — Method: MeasureDialog"
description: "Exact Method: MeasureDialog contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.9dbcd82025b8434a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: MeasureDialog

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MeasureDialog`

<a id="api-3a92cb68d55d92de"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MeasureDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,System.Numerics.Vector2) 0605845295f1b9561bb64a69500a00656e717af81c1c63027cb846ed8ee7c7ee -->

```csharp
public Inno.Editor.ImGui.ImGuiWidget.DialogLayout Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MeasureDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation presentation, System.Numerics.Vector2 availableSize)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L119).
