---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a8856621fb287488b532712baa8d1260d17251be3e3269ed676a454252f108ad
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)
title: ImGuiWidget.SectionHeader
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 6373c4577ef711a5e381e6112786219388c4594ff36cbb3a7625b5059a1a8bf9
apiScope: Editor
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
