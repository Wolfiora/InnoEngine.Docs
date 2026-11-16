---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a8856621fb287488b532712baa8d1260d17251be3e3269ed676a454252f108ad
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)
title: ImGuiWidget.SectionHeader
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 9810bcc55ad65fef9e24985ed67a286647dfa02f5a22653bda9300e1d476349f
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
