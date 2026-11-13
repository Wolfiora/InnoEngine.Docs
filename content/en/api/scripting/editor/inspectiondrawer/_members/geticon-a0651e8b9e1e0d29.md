---
uid: api.a0651e8b9e1e0d29c9c5bd46be44704c3916220afa57cb6d4bde38c799a8c8a4
symbol: "scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.InspectionDrawer\u00601.GetIcon(InnoEditor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: 213b2a2d8ac6f48f42ceb69541e3e517c552e7c6073c0aa06fc2c5ea103dba7b
title: "GetIcon"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: editor-script
apiScope: Editor
---

Resolves the icon glyph displayed for the current target.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The target-specific icon glyph. The default implementation returns ``P:InnoEditor.Inspection.InspectionDrawer`1.icon``.
