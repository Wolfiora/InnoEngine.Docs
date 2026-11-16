---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1cf7993e5f5279c5459503f38c411bb9996eef5dce262bc39325a24fc04bba44
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CompactSliderFloat(System.String,System.Single@,System.Single,System.Single)
title: ImGuiWidget.CompactSliderFloat
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: aaf12381a7441f3eb724ad0a304f46d6d8739b2b39c889902fe2aa2925bb356d
apiScope: Editor
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
