---
uid: api.f3a1d6195781d7553241824559bbe6a4af6d4a4cf99390de979f922dbc8b6717
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(System.String,System.String,System.String)"
source: xml
reviewed: c89ce4f0521ee94dde3ecc289c36df19f2f14155283dae9868f64ab65e804a0a
title: "ImGuiWidget.ClickableText"
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
