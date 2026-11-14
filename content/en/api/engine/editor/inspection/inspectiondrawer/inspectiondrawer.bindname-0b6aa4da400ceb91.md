---
uid: api.0b6aa4da400ceb915ca26ce20eb7e47575f6afe710264563a961c2b67aceb7a8
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer\u00601.BindName(Inno.Editor.Inspection.InspectionDrawContext,\u00600)"
source: xml
reviewed: 8619f85ca16889ae8054be9f8029b5f395fc81d9734612c6dc3df8a3394fd607
title: "InspectionDrawer\u003CTTarget\u003E.BindName"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Binds the name displayed in the first row of the Inspector target header.

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Returns

The current target name and a callback that accepts a requested replacement name, or `null` for the callback when the name is read-only.
