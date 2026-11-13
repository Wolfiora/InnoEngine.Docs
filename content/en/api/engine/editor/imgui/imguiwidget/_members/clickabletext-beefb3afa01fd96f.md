---
uid: api.beefb3afa01fd96f38738fee20b4da6d5afbb2e0d2b88c1f5bfc3ea9d8a3854c
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(System.String,System.String,System.Numerics.Vector2,System.String)"
source: xml
reviewed: f280c4e57241af129fafadafdda47291bc4ce7f628249ea3b3fd8938d0c98587
title: "ClickableText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws clickable text centered inside an explicitly sized transparent interaction area.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `controlSize`:** Size of the transparent interaction area.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the text is pressed.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `controlSize` is not positive.
