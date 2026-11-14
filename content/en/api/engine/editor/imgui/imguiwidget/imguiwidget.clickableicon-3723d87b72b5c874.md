---
uid: api.3723d87b72b5c87480504dac3158f65a27dddb72de02a1aefbb81237863fff5f
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableIcon(System.String,System.String,System.String)"
source: xml
reviewed: 34f549d2507a1a3a8a72ed570ce2fa85c585abbb390460ea9b34dff54c1d4013
title: "ImGuiWidget.ClickableIcon"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a clickable icon inside the same square interaction slot used by editor close controls. The icon has no resting background and changes only its glyph color while hovered or active.

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `icon`:** The visible icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

## Returns

`true` when the icon is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `icon` is `null`.
