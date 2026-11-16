---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1e7b1cbe3ed7cb5702ae06cf0440f401d0393d9999c0e7b1c150fcde1bd5cc5a
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CompactDragFloat(System.String,System.Single@,System.Single,System.Nullable{System.Single},System.Nullable{System.Single})
title: ImGuiWidget.CompactDragFloat
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 6484bddfd9c6e5740f0d68017d91f63e0fa59270ab41f7106a0733f65ed76e09
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

**Parameter `speed`:** Drag speed.

**Parameter `minimum`:** Optional inclusive lower bound.

**Parameter `maximum`:** Optional inclusive upper bound.

## Returns

`true` when the exact value changed.
