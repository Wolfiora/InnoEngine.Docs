---
title: "ImGuiWidget — Method: ClickableText"
description: "Exact Method: ClickableText contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.9ac9b4709bd17cb2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: ClickableText

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `ClickableText`

<a id="api-62d2e4421625f9a7"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.ClickableText(System.String,System.String,System.Numerics.Vector2,System.String) d1c89fa339a798882ee9f635761514c21ddb1fec158081828bfb79bd57c2b2b6 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.ClickableText(string id, string text, System.Numerics.Vector2 controlSize, string? tooltip = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L303).

## `ClickableText`

<a id="api-3fa17d26ed059241"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.ClickableText(System.String,System.String,System.String) f3f438b91b8566b787816ac30dbd25e63f5b2c6a7ba86b2af3485f0512606606 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.ClickableText(string id, string text, string? tooltip = null)
```

Draws clickable text without a persistent or hovered background.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the text is pressed.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.

**Throws `System.ArgumentNullException`:** Thrown when `text` is `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Text.cs#L182).
