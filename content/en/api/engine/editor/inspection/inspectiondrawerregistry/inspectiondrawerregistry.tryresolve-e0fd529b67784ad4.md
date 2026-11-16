---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e0fd529b67784ad4000d81305e98898531de7822326c50df15ecd29e5cce66e6
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerRegistry.TryResolve(Inno.Editor.Core.EditorContext,System.Object,Inno.Editor.Inspection.SerializedPropertyRenderer,Inno.Editor.Inspection.IInspectionDrawer@,Inno.Editor.Inspection.InspectionDrawContext@)
title: InspectionDrawerRegistry.TryResolve
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 7d1d167260309d8e6c290669c47e093dbbefafdce91607c985b0196194778c26
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editorContext`:** The shared editor context exposed to the selected drawer.

**Parameter `target`:** The selected object whose runtime type determines the drawer.

**Parameter `renderer`:** The serialized property renderer exposed to the selected drawer.

**Parameter `drawer`:** The resolved drawer when the method succeeds.

**Parameter `context`:** The target-specific drawing context when the method succeeds.

## Returns

`true` when a matching drawer was resolved.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editorContext`, `target`, or `renderer` is `null`.
