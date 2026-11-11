---
title: "ImGuiWidget.ImGuiWidget — Method: DrawDisclosureIndicator"
description: "Exact Method: DrawDisclosureIndicator contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.3e18cbf34560b389
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: DrawDisclosureIndicator

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawDisclosureIndicator`

<a id="api-99b5ae613d39b431"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawDisclosureIndicator(System.Numerics.Vector2,System.Numerics.Vector2,System.Boolean,System.Boolean) 613c7bd8f28884fba561f3804455914f72fd4b8e284551b93b71e438d0b8edd6 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawDisclosureIndicator(System.Numerics.Vector2 min, System.Numerics.Vector2 max, bool open, bool dimmed = false)
```

Draws a vertically centered disclosure triangle with button-style hover feedback.

**Parameter `min`:** The minimum screen coordinate of the indicator area.

**Parameter `max`:** The maximum screen coordinate of the indicator area.

**Parameter `open`:** Whether the represented content is expanded.

**Parameter `dimmed`:** Whether the indicator uses the inactive text color.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Card.cs#L195).
