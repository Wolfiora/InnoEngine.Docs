---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cac0f35842d103f1f1a19c7daed1dd641b2ab6343cf90788a9236db17bc452b4
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Checkbox(System.String,System.Boolean@,System.String)
title: ImGuiWidget.Checkbox
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 12853a18dd0eac3921aecd538f21bc3944e8ba12e18e596c61816841f6c160b0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `label`:** Visible label and stable ImGui identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

## Returns

`true` when the value changed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `label` is empty or whitespace.
