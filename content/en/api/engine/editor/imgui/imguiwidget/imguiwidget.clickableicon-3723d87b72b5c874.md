---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3723d87b72b5c87480504dac3158f65a27dddb72de02a1aefbb81237863fff5f
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.ClickableIcon(System.String,System.String,System.String)
title: ImGuiWidget.ClickableIcon
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 0944482796e3f4515473ce86030f4e8857ac3d6809dfbb6f82ca4f0ad311c198
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `icon`:** The visible icon glyph.

**Parameter `tooltip`:** Optional tooltip displayed while the interaction is hovered.

## Returns

`true` when the icon is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `icon` is `null`.
