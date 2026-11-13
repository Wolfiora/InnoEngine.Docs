---
uid: api.d4c21376519c665aa894ceee82adecfad330589bdffbb7c07b5cc143767ff32f
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactSliderFloat(System.String,System.Single@,System.Single,System.Single)"
source: xml
reviewed: 20743b1750f315790162166f3a713b065b9b8d0183dc36108780fd0ee43c1369
title: "CompactSliderFloat"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a bounded slider with compact presentation and a double-click precise input mode.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `minimum`:** Inclusive lower bound.

**Parameter `maximum`:** Inclusive upper bound.

**Returns:** `true` when the exact value changed.
