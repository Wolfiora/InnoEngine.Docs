---
uid: api.c17a1ce639b15c34ef7b00a68a44a11a3d9678ff365b3966eba33a670eaff7ea
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawContext.DrawProperties"
source: xml
reviewed: 876c649c441a3aeceec9d8c42ec8fda092c78e6e06009196f3c00912f096aa3d
title: "DrawProperties"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Draws every runtime-visible serialized property through the shared attribute and property drawer pipeline.

## Remarks

Properties without an explicit `Header` attribute are placed in the shared implicit Properties section. Custom drawers may call this method before or after their own sections.
