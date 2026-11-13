---
uid: api.1e7b1cbe3ed7cb5702ae06cf0440f401d0393d9999c0e7b1c150fcde1bd5cc5a
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CompactDragFloat(System.String,System.Single@,System.Single,System.Nullable{System.Single},System.Nullable{System.Single})"
source: xml
reviewed: 253825f9c588df3c7b7d9edfe428b28d2c180b67f6752a29f6c13b0b5604e046
title: "CompactDragFloat"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a floating-point drag field with a compact one-decimal presentation and precise text editing.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `speed`:** Drag speed.

**Parameter `minimum`:** Optional inclusive lower bound.

**Parameter `maximum`:** Optional inclusive upper bound.

**Returns:** `true` when the exact value changed.
