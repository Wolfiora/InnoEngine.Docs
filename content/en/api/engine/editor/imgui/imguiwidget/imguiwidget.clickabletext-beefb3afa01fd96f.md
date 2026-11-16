---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.beefb3afa01fd96f38738fee20b4da6d5afbb2e0d2b88c1f5bfc3ea9d8a3854c
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableText(System.String,System.String,System.Numerics.Vector2,System.String)
title: ImGuiWidget.ClickableText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 081717b9ae120194ed1caf49a12a1481f33eb359c8454ebd73b68ec2c00d4f06
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible text or icon glyph.

**Parameter `controlSize`:** Size of the transparent interaction area.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

## Returns

`true` when the text is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `controlSize` is not positive.
