---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.editor.inspection.c40f722122401247
symbol: engine:Inno.Editor.Inspection:T:Inno.Editor.Inspection.InspectionDrawerFactory
title: InspectionDrawerFactory
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
sourceFingerprint: c7c542ef6ff7ea6ca051b75efda9c72a1a5ced05d4708f98e192043c3455c9dd
contracts:
- project.inno-editor-inspection

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Parameters

**Parameter `drawerType`:** The concrete drawer type selected from the active type catalog.

## Returns

A new drawer instance whose runtime type is `drawerType`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Implementations may throw when `drawerType` is `null`.
