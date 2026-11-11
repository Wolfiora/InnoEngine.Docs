---
title: "ImGuiWidget.ImGuiWidget — Method: CenteredProgressBar"
description: "Exact Method: CenteredProgressBar contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.679f40aca24ce679
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CenteredProgressBar

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CenteredProgressBar`

<a id="api-160a62ffccb46dbf"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredProgressBar(System.Single,System.Numerics.Vector2,System.String) 83134b54dc6bc8ccc89bab6f0b25dc5cfb82834827288e44bf31f09375ea1c6f -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredProgressBar(float fraction, System.Numerics.Vector2 size, string overlay)
```

Draws a progress bar whose overlay remains centered over the complete bar.

**Parameter `fraction`:** The completed fraction rendered by the progress bar.

**Parameter `size`:** The requested ImGui progress-bar size.

**Parameter `overlay`:** The text drawn at the geometric center of the complete progress bar.

**Throws `System.ArgumentNullException`:** Thrown when `overlay` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L256).
