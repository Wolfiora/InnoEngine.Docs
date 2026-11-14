---
uid: api.8ee5211e0e098d28c38b0a0e32e60edaaeef891bd0c494941d45a01dd1b16869
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerRegistry.TryResolveExact(Inno.Editor.Core.EditorContext,System.Object,Inno.Editor.Inspection.SerializedPropertyRenderer,Inno.Editor.Inspection.IInspectionDrawer@,Inno.Editor.Inspection.InspectionDrawContext@)"
source: xml
reviewed: 87e8bb7a4ecdfc8d1a3ea9016de9286dea0eb3136dc326414922ec82da6259ac
title: "InspectionDrawerRegistry.TryResolveExact"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Resolves only a drawer explicitly registered for the target's exact runtime type.

## Parameters

**Parameter `editorContext`:** The shared editor context exposed to the selected drawer.

**Parameter `target`:** The selected object whose exact runtime type determines the drawer.

**Parameter `renderer`:** The serialized property renderer exposed to the selected drawer.

**Parameter `drawer`:** The exact drawer when the method succeeds.

**Parameter `context`:** The target-specific drawing context when the method succeeds.

## Returns

`true` when an exact registration exists; inherited and fallback drawers are ignored.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `editorContext`, `target`, or `renderer` is `null`.
