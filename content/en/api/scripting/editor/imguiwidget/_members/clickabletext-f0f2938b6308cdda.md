---
uid: api.f0f2938b6308cdda1a04ae7eed079441f58ecfea422ff38f5e3e6fb7ec744d8d
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.ClickableText(System.String,System.String,System.String)"
source: xml
reviewed: bc8d53bbb507993c8edc4d5c50c48c9fd31b41d0161dbac931c7317f8f92d556
title: "ClickableText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws clickable text without a persistent or hovered background.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the text is pressed.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.
