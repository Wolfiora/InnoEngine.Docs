---
uid: api.3723d87b72b5c87480504dac3158f65a27dddb72de02a1aefbb81237863fff5f
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableIcon(System.String,System.String,System.String)"
source: xml
reviewed: 089b38ad8d6d0948c9dc52096f761c57e60446fa0bfbb274a524ae3440b9f1a1
title: "ClickableIcon"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a clickable icon inside the same square interaction slot used by editor close controls. The icon has no resting background and changes only its glyph color while hovered or active.

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `icon`:** The visible icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

**Returns:** `true` when the icon is pressed.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `icon` is `null`.
