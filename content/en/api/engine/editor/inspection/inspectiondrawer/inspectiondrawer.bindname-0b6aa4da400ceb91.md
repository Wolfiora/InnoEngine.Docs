---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0b6aa4da400ceb915ca26ce20eb7e47575f6afe710264563a961c2b67aceb7a8
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawer`1.BindName(Inno.Editor.Inspection.InspectionDrawContext,`0)
title: InspectionDrawer<TTarget>.BindName
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: a7187ce9393f595a4aa9bc6b01b9d3a23ac3e32d8383f5df31f09de14d74fec1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The active Inspector drawing context.

**Parameter `target`:** The strongly typed target being inspected.

## Returns

The current target name and a callback that accepts a requested replacement name, or `null` for the callback when the name is read-only.
