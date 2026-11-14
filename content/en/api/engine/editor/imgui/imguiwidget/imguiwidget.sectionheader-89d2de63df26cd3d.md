---
uid: api.89d2de63df26cd3d6095c4cc26f1c7bbd20d4d7865580c0d988a75ae2a8ce5c9
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SectionHeader(System.String,System.String,System.Action)"
source: xml
reviewed: 326d3fa4b92024e5aea534d0bad17d6de1a557f778a67a7cc2b35919a9179945
title: "ImGuiWidget.SectionHeader"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a section heading with hover-only description using the shared Inspector presentation.

## Parameters

**Parameter `title`:** Section title.

**Parameter `description`:** Optional hover explanation.

**Parameter `drawLeadingControl`:** Optional interactive control drawn before the section title.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `title` is `null`.

## Returns

`true` when the section content should be drawn; otherwise, `false` when the section is collapsed.
