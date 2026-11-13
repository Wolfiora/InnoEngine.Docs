---
uid: api.1cf7993e5f5279c5459503f38c411bb9996eef5dce262bc39325a24fc04bba44
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CompactSliderFloat(System.String,System.Single@,System.Single,System.Single)"
source: xml
reviewed: aaf12381a7441f3eb724ad0a304f46d6d8739b2b39c889902fe2aa2925bb356d
title: "CompactSliderFloat"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a bounded slider with compact presentation and a double-click precise input mode.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `minimum`:** Inclusive lower bound.

**Parameter `maximum`:** Inclusive upper bound.

**Returns:** `true` when the exact value changed.
