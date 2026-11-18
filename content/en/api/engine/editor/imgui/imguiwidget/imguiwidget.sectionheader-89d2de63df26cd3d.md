---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.89d2de63df26cd3d6095c4cc26f1c7bbd20d4d7865580c0d988a75ae2a8ce5c9
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)
title: ImGuiWidget.SectionHeader
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 6b0f8ca84056fff0f4126844d84f6fec263f4c8da130c2597cf40559ab99c5f2
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `title`:** Section title.

**Parameter `description`:** Optional hover explanation.

**Parameter `drawLeadingControl`:** Optional interactive control drawn before the section title.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.

## Returns

`true` when the section content should be drawn; otherwise, `false` when the section is collapsed.
