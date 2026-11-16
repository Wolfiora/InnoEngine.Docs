---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d4c21376519c665aa894ceee82adecfad330589bdffbb7c07b5cc143767ff32f
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactSliderFloat(System.String,System.Single@,System.Single,System.Single)
title: ImGuiWidget.CompactSliderFloat
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 8708fadc9d479d3a2a68504ef0978a8edab936b479599ddd73855bde65d1306f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `minimum`:** Inclusive lower bound.

**Parameter `maximum`:** Inclusive upper bound.

## Returns

`true` when the exact value changed.
