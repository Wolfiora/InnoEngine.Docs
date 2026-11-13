---
uid: api.f7644753f9e50f60f5b3e0778774f8134f09e7cc93b1d8687101136a2dd85e91
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer\u00601.DrawHeader(Inno.Editor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: ce51ca7fe1861f22f81ba5ead3fe30eb2d7e4e45b7d3b9591e4fe646e2e55d51
title: "DrawHeader"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Draws target-specific controls in the second row of the Inspector target header.

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Remarks

The callback is clipped to one header row. Implementations should keep all controls on the current line and must not begin another window, child, table, or popup.
