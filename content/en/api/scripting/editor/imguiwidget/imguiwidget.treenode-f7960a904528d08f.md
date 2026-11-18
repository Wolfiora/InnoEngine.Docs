---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f7960a904528d08f970853a5ad3eac0eeeaf1e1477651229124d3f27f559331f
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.TreeNode(System.String,System.Action{InnoEditor.ImGui.TreeNodeDrawContext},InnoEditor.ImGui.TreeNodeOptions@)
title: ImGuiWidget.TreeNode
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: a1d61489e219bc1a94519f33270168e43b3148b5de40a8b3dd2e6a20526333a1
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable row identifier.

**Parameter `onDraw`:** Frame-local content drawing for visible or explicitly preserved rows; clipped ordinary rows do not invoke it.

**Parameter `options`:** Tree row options.

## Returns

Interaction and row geometry for the submitted item.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** An explicit flattened depth is negative.
