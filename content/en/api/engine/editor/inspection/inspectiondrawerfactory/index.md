---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.inno.editor.inspection.c40f722122401247
symbol: engine:Inno.Editor.Inspection:T:Inno.Editor.Inspection.InspectionDrawerFactory
title: InspectionDrawerFactory
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 3b6d3b710a09745cc1622a8afaf3beed56404b8fd35135cf5303f4e3f1c614c8
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
