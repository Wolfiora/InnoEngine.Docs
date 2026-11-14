---
uid: api.dde655438cad3fb3a8c7b58665ede0c14245f11bf703249edd055fa8b49eca59
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerFactory.Invoke(System.Type)"
source: xml
reviewed: 38c5e45a1fdf3cd6afc24bd1b553d08638b11195fe48985457cacd8457ddabd2
title: "InspectionDrawerFactory.Invoke"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates one discovered inspection drawer through the owning editor composition root.

## Parameters

**Parameter `drawerType`:** The concrete drawer type selected from the active type catalog.

## Returns

A new drawer instance whose runtime type is `drawerType`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Implementations may throw when `drawerType` is `null`.
