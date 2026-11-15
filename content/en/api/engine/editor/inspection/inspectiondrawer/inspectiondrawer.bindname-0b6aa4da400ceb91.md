---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0b6aa4da400ceb915ca26ce20eb7e47575f6afe710264563a961c2b67aceb7a8
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer`1.BindName(Inno.Editor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.BindName
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 8619f85ca16889ae8054be9f8029b5f395fc81d9734612c6dc3df8a3394fd607

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Binds the name displayed in the first row of the Inspector target header.

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Returns

The current target name and a callback that accepts a requested replacement name, or `null` for the callback when the name is read-only.
