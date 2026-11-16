---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.inspection.c40f722122401247
symbol: engine:Inno.Editor.Inspection:T:Inno.Editor.Inspection.InspectionDrawerFactory
title: InspectionDrawerFactory
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 2762c94bc8dc0e44c4e9185e8c0e9c67c0b5d7a0ba933696b80d8fb4e232391c
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
