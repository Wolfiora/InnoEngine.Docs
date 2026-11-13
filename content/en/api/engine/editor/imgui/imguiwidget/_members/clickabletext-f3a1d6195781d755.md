---
uid: api.f3a1d6195781d7553241824559bbe6a4af6d4a4cf99390de979f922dbc8b6717
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(System.String,System.String,System.String)"
source: xml
reviewed: ec5657c888cd950c4560aa33ffaf78edfcd81074738e4c49ed83109a433acbd4
title: "ClickableText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws clickable text without a persistent or hovered background.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the text is pressed.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.
