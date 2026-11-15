---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b525d203a6a92d8d7cba5870f530430bb317b312367874105a548ee4ae20f5d3
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer`1.GetIcon(Inno.Editor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.GetIcon
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 84fc9c1a47409490dadfb9f34a159bef620677c5ba549ac47770a9a7c20b882a

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Resolves the icon glyph displayed for the current target.

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Returns

The target-specific icon glyph. The default implementation returns ``P:Inno.Editor.Inspection.InspectionDrawer`1.icon``.
