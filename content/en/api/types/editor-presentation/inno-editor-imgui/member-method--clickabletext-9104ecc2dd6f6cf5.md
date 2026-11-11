---
title: "ImGuiWidget.ImGuiWidget — Method: ClickableText"
description: "Exact Method: ClickableText contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.9104ecc2dd6f6cf5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: ClickableText

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `ClickableText`

<a id="api-69c538962104e688"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(System.String,System.String,System.Numerics.Vector2,System.String) 955b54930f90d2a10da3e72692c5e043f83bbd1a60ea98c366f09f7e16674d64 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(string id, string text, System.Numerics.Vector2 controlSize, string? tooltip = null)
```

Draws clickable text centered inside an explicitly sized transparent interaction area.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `controlSize`:** Size of the transparent interaction area.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the text is pressed.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.

**Throws `System.ArgumentOutOfRangeException`:** Thrown when either component of `controlSize` is not positive.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L303).

## `ClickableText`

<a id="api-79f6c774a2dbbab8"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(System.String,System.String,System.String) 5e1ff75adc5372f2e68262a1779fc11f62732f38c61c74f8306131b74014b7d8 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(string id, string text, string? tooltip = null)
```

Draws clickable text without a persistent or hovered background.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the text is pressed.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L182).
