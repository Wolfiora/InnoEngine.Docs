---
title: "ImGuiWidget — Method: CenteredProgressBar"
description: "Exact Method: CenteredProgressBar contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.1d3f272fe8f6612e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CenteredProgressBar

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CenteredProgressBar`

<a id="api-fa3be0ef41ce7e04"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CenteredProgressBar(System.Single,System.Numerics.Vector2,System.String) 30736af81f10c62dfcff01a21b6153ee4ee884278ef8a5fb3a5954f2335153f0 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CenteredProgressBar(float fraction, System.Numerics.Vector2 size, string overlay)
```

Draws a progress bar whose overlay remains centered over the complete bar.

**Parameter `fraction`:** The completed fraction rendered by the progress bar.

**Parameter `size`:** The requested ImGui progress-bar size.

**Parameter `overlay`:** The text drawn at the geometric center of the complete progress bar.

**Throws `System.ArgumentNullException`:** Thrown when `overlay` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L256).
