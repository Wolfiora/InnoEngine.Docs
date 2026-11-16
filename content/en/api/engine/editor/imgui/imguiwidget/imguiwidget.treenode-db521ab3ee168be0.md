---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.db521ab3ee168be0edae37bab865146b5eb0e60ff1f093f2e1f44bc727514de1
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TreeNode(System.String,System.Action{Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext},Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions@)
title: ImGuiWidget.TreeNode
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 4532cb3e5354268169c90b2921fa8d0ea676c92633607227b6fa3d6b6779fa44
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
