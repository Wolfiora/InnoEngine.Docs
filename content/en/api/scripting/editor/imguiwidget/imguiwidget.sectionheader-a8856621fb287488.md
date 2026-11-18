---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a8856621fb287488b532712baa8d1260d17251be3e3269ed676a454252f108ad
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)
title: ImGuiWidget.SectionHeader
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 5588e81ae799ce93536a2dc4145a215eb268d222ad54bee9949b50fd038c6582
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

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.

## Returns

`true` when the section content should be drawn; otherwise, `false` when the section is collapsed.
