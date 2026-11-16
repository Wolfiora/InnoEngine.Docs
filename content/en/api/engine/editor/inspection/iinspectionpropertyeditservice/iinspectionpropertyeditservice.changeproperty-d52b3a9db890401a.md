---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d52b3a9db890401a1f4d4e16b9688378e222a88ab9613b989ddf421be7494334
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.IInspectionPropertyEditService.ChangeProperty(System.Object,System.String,System.Action,System.String,System.String,System.String)
title: IInspectionPropertyEditService.ChangeProperty
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 4c064fd60debe2feb40006660fecec83b5d87abd1df85c5f80a7b9b22f7bf673
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `owner`:** The domain object that owns the root serialized property.

**Parameter `propertyName`:** The exact root serialized member name.

**Parameter `mutation`:** The callback that assigns the requested value.

**Parameter `historyName`:** The user-facing name for the resulting history entry.

**Parameter `mergeKey`:** The current shared gesture key, or null for a discrete edit.

**Parameter `componentName`:** An optional public value component; null replaces the complete root value.

## Returns

`true` when the value changed and the owning feature recorded the edit; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `owner` or `mutation` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `propertyName` or `historyName` is empty.
