---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c17a1ce639b15c34ef7b00a68a44a11a3d9678ff365b3966eba33a670eaff7ea
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawContext.DrawProperties
title: InspectionDrawContext.DrawProperties
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 163725a73045e4968c2edcdc9acee7826c16fdc7f7e4843a94442de55efc33f9

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Draws every runtime-visible serialized property through the shared attribute and property drawer pipeline.

## Remarks

Properties without an explicit `Header` attribute are placed in the shared implicit Properties section. Custom drawers may call this method before or after their own sections.
