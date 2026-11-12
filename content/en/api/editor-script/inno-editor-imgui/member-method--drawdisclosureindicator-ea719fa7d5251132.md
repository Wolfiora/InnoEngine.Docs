---
title: "ImGuiWidget — Method: DrawDisclosureIndicator"
description: "Exact Method: DrawDisclosureIndicator contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.ea719fa7d5251132
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: DrawDisclosureIndicator

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawDisclosureIndicator`

<a id="api-a4a96ab9efda6b76"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DrawDisclosureIndicator(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean,System.Boolean) 2a9d570556e4c6ebca749086e44418b574bebd5f5c07646b79e7f60e0df962d3 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.DrawDisclosureIndicator(System.Numerics.Vector2 min, System.Numerics.Vector2 max, bool open, bool dimmed = false)
```

Draws a vertically centered disclosure triangle with button-style hover feedback.

**Parameter `min`:** The minimum screen coordinate of the indicator area.

**Parameter `max`:** The maximum screen coordinate of the indicator area.

**Parameter `open`:** Whether the represented content is expanded.

**Parameter `dimmed`:** Whether the indicator uses the inactive text color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Card.cs#L195).
