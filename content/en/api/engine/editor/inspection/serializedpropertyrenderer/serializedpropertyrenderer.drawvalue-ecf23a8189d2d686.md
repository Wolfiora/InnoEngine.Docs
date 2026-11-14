---
uid: api.ecf23a8189d2d6863e64ff8edcb9c2c965fb6c3551daf6b078a398b3542b8498
symbol: "engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.DrawValue(Inno.Editor.Core.EditorContext,System.Object,System.String,System.String,System.Type,System.Func{System.Object},System.Action{System.Object},Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean,System.Boolean,System.String,System.Nullable{System.Double},System.Nullable{System.Double})"
source: xml
reviewed: 0f5f21a52e5cc6ef5746f9de66fce8f50046319fed9051b68e3eae246b4da3e6
title: "SerializedPropertyRenderer.DrawValue"
kind: api
owners: [Inno.Editor.Inspection]
apiSurface: source-clr
---

Draws a declared authoring value with existing property drawers and a feature-owned draft edit service.

**Parameter `editorContext`:** Current Editor frame.

**Parameter `owner`:** Stable owner for text state and edit routing; not necessarily a canonical serialized object.

**Parameter `path`:** Stable unique property path.

**Parameter `label`:** User-facing label.

**Parameter `propertyType`:** Declared value type used to select its registered drawer.

**Parameter `getter`:** Reads the detached value.

**Parameter `setter`:** Changes the detached value within the supplied edit service.

**Parameter `edits`:** Feature-owned transaction boundary, propagated to nested properties.

**Parameter `readOnly`:** Whether assignment is disabled.

**Parameter `hdrColor`:** Whether Color values use unclamped linear floating-point channels.

**Parameter `tooltip`:** Optional authoring description rendered by the shared property tooltip.

**Parameter `minimum`:** Optional inclusive numeric editing bound.

**Parameter `maximum`:** Optional inclusive numeric editing bound.
