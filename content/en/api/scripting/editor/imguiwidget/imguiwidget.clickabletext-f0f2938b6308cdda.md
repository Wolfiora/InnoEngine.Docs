---
uid: api.f0f2938b6308cdda1a04ae7eed079441f58ecfea422ff38f5e3e6fb7ec744d8d
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ClickableText(System.String,System.String,System.String)"
source: xml
reviewed: 22aac95349726581d574905c7a8d7261efd8cbb00dc194ec3361de1ae7eb3a15
title: "ImGuiWidget.ClickableText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws clickable text without a persistent or hovered background.

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

## Returns

`true` when the text is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.
