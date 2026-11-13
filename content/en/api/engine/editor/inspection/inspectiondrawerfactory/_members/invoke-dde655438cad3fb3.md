---
uid: api.dde655438cad3fb3a8c7b58665ede0c14245f11bf703249edd055fa8b49eca59
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerFactory.Invoke(System.Type)"
source: xml
reviewed: 232f0bdf86024c559cb75abf12b90dff96f6393244f34221665fcdf0106a8189
title: "Invoke"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Creates one discovered inspection drawer through the owning editor composition root.

**Parameter `drawerType`:** The concrete drawer type selected from the active type catalog.

**Returns:** A new drawer instance whose runtime type is `drawerType`.

**Exception `T:System.ArgumentNullException`:** Implementations may throw when `drawerType` is `null`.
