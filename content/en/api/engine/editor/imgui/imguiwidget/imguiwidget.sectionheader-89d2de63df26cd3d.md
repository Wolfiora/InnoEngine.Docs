---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.89d2de63df26cd3d6095c4cc26f1c7bbd20d4d7865580c0d988a75ae2a8ce5c9
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)
title: ImGuiWidget.SectionHeader
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: b63801e9c15a1ea5dd973af804c0395c037f8cc7c8bc4b4cdf8b80f274949b27
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

## Returns

`true` when the section content should be drawn; otherwise, `false` when the section is collapsed.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.
