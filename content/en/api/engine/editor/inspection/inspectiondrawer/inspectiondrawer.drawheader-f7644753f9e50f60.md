---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f7644753f9e50f60f5b3e0778774f8134f09e7cc93b1d8687101136a2dd85e91
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer`1.DrawHeader(Inno.Editor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.DrawHeader
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
sourceFingerprint: 00231b2e290c1fff01a1b402f37b3060b1854949b77057418074f515f16c9b48
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Remarks

The callback is clipped to one header row. Implementations should keep all controls on the current line and must not begin another window, child, table, or popup.
