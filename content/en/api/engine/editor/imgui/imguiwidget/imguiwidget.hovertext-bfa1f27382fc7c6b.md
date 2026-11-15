---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bfa1f27382fc7c6b42ad37f6d28975dafa74a11c154d33e4c5fea7149409b830
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.HoverText(System.String,System.String)
title: ImGuiWidget.HoverText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: a435bcce8a0566c38bc5a598d2f0549b9e8803bee4d117037fe002bb4b79638f

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the interaction.

**Parameter `text`:** Visible link text.

## Returns

`true` when the link is pressed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.
