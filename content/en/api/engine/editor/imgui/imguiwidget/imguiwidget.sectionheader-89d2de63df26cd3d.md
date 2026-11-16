---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.89d2de63df26cd3d6095c4cc26f1c7bbd20d4d7865580c0d988a75ae2a8ce5c9
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)
title: ImGuiWidget.SectionHeader
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: d1505b0719d07125410deff301ce20baef8ed08289ff06f9ae5fb83a25064f1e
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
