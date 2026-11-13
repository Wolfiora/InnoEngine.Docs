---
uid: api.inno.editor.inspection.c40f722122401247
symbol: "engine:Inno.Editor.Inspection:T:Inno.Editor.Inspection.InspectionDrawerFactory"
source: xml
reviewed: ce82ce20c02ce14cb33ececc6ed095557397dc366e3bbbb84180b5c34805d21b
title: "InspectionDrawerFactory"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
contracts:
- project.inno-editor-inspection
aliases: []
---

Creates one discovered inspection drawer through the owning editor composition root.

**Parameter `drawerType`:** The concrete drawer type selected from the active type catalog.

**Returns:** A new drawer instance whose runtime type is `drawerType`.

**Exception `T:System.ArgumentNullException`:** Implementations may throw when `drawerType` is `null`.
