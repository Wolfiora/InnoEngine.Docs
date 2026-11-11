---
title: "ImGuiWidget.ImGuiWidget — Method: CenteredButton"
description: "Exact Method: CenteredButton contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.b92b52702c7203b2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CenteredButton

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CenteredButton`

<a id="api-5526ec1d54c43a6b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredButton(System.String,System.Single) 1c54c724980039d7be2f4e4c30f8e2aa7c925726342400b41d1722270d1075dc -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredButton(string label, float topPadding = 0)
```

Draws a horizontally centered button with optional space above it.

**Parameter `label`:** Visible label and optional ImGui identifier suffix.

**Parameter `topPadding`:** Additional vertical space above the button.

**Returns:** `true` when the button is pressed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Controls.cs#L226).
