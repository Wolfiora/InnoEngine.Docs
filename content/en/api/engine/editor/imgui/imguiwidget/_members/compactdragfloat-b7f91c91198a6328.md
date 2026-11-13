---
uid: api.b7f91c91198a63284faddcacd1b9951b0bcf86c1b10e988351598300f322fa37
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompactDragFloat(System.String,System.Single@,System.Single,System.Nullable{System.Single},System.Nullable{System.Single})"
source: xml
reviewed: 8f629d95ebb8a8b69d3dd17732f228b735e7f05a55f5306870c2996b5d4a7f7c
title: "CompactDragFloat"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a floating-point drag field with a compact one-decimal presentation and precise text editing.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `speed`:** Drag speed.

**Parameter `minimum`:** Optional inclusive lower bound.

**Parameter `maximum`:** Optional inclusive upper bound.

**Returns:** `true` when the exact value changed.
