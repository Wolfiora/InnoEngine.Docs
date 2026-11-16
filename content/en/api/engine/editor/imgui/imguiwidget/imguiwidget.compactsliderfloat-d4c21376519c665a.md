---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d4c21376519c665aa894ceee82adecfad330589bdffbb7c07b5cc143767ff32f
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactSliderFloat(System.String,System.Single@,System.Single,System.Single)
title: ImGuiWidget.CompactSliderFloat
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 380cd8f5c93f34f112b5614bcb07a950754ad9cfea5d7562ba2f73d8cd174679
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
