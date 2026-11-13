---
uid: api.b525d203a6a92d8d7cba5870f530430bb317b312367874105a548ee4ae20f5d3
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer\u00601.GetIcon(Inno.Editor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: 84fc9c1a47409490dadfb9f34a159bef620677c5ba549ac47770a9a7c20b882a
title: "GetIcon"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Resolves the icon glyph displayed for the current target.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

**Returns:** The target-specific icon glyph. The default implementation returns ``P:Inno.Editor.Inspection.InspectionDrawer`1.icon``.
