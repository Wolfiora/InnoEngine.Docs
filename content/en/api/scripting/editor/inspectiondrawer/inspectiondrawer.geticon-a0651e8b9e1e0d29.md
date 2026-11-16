---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a0651e8b9e1e0d29c9c5bd46be44704c3916220afa57cb6d4bde38c799a8c8a4
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer`1.GetIcon(InnoEditor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.GetIcon
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: a4ce4615be4f8919b39998a099de9817d1047d13e51161b77bc7ef1cd7b8976c
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Returns

The target-specific icon glyph. The default implementation returns ``P:InnoEditor.Inspection.InspectionDrawer`1.icon``.
