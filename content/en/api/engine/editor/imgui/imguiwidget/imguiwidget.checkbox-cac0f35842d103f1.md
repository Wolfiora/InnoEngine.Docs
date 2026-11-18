---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cac0f35842d103f1f1a19c7daed1dd641b2ab6343cf90788a9236db17bc452b4
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Checkbox(System.String,System.Boolean@,System.String)
title: ImGuiWidget.Checkbox
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: d0dd5788f73def9bfac689a439159223638a66d0c737c91482d5d48eb784db2c
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
