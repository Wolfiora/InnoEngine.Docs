---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.a0651e8b9e1e0d29c9c5bd46be44704c3916220afa57cb6d4bde38c799a8c8a4
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer`1.GetIcon(InnoEditor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.GetIcon
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
sourceFingerprint: e23dc41792d81e3e04684b4608317b1d4e40beb11c8506f9559a75b10b0f2d9a
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
