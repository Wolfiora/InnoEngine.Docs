---
uid: api.b525d203a6a92d8d7cba5870f530430bb317b312367874105a548ee4ae20f5d3
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer\u00601.GetIcon(Inno.Editor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: 4818c7453073d3458e59847ec9add2372c974a4b0da080327ec95317ab79f530
title: "GetIcon"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Resolves the icon glyph displayed for the current target.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The target-specific icon glyph. The default implementation returns ``P:Inno.Editor.Inspection.InspectionDrawer`1.icon``.
