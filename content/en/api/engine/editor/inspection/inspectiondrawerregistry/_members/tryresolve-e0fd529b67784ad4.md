---
uid: api.e0fd529b67784ad4000d81305e98898531de7822326c50df15ecd29e5cce66e6
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.InspectionDrawerRegistry.TryResolve(Inno.Editor.Core.EditorContext,System.Object,Inno.Editor.Inspection.SerializedPropertyRenderer,Inno.Editor.Inspection.IInspectionDrawer@,Inno.Editor.Inspection.InspectionDrawContext@)"
source: xml
reviewed: 8bded675f4c851b5b5162a6d54cc758bf2c0bfe9994aa18e1482e98640fdaf7d
title: "TryResolve"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Resolves the most specific registered drawer and creates its drawing context.

**Parameter `editorContext`:** The shared editor context exposed to the selected drawer.

**Parameter `target`:** The selected object whose runtime type determines the drawer.

**Parameter `renderer`:** The serialized property renderer exposed to the selected drawer.

**Parameter `drawer`:** The resolved drawer when the method succeeds.

**Parameter `context`:** The target-specific drawing context when the method succeeds.

**Returns:** `true` when a matching drawer was resolved.

**Exception `T:System.ArgumentNullException`:** Thrown when `editorContext`, `target`, or `renderer` is `null`.
