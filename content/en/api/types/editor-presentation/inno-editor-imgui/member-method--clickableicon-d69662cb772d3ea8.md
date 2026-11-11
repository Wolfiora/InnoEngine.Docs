---
title: "ImGuiWidget.ImGuiWidget — Method: ClickableIcon"
description: "Exact Method: ClickableIcon contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.d69662cb772d3ea8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: ClickableIcon

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClickableIcon`

<a id="api-61026aab6fac47ae"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableIcon(System.String,System.String,System.String) b850822da24f978888852297fc1cc522bcc559281f9ff9077ef9fa4bb8b40be8 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableIcon(string id, string icon, string? tooltip = null)
```

Draws a clickable icon inside the same square interaction slot used by editor close controls.
The icon has no resting background and changes only its glyph color while hovered or active.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `icon`:** The visible icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the icon is pressed.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `icon` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L252).
