---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ecf23a8189d2d6863e64ff8edcb9c2c965fb6c3551daf6b078a398b3542b8498
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.DrawValue(Inno.Editor.Core.EditorContext,System.Object,System.String,System.String,System.Type,System.Func{System.Object},System.Action{System.Object},Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean,System.Boolean,System.String,System.Nullable{System.Double},System.Nullable{System.Double})
title: SerializedPropertyRenderer.DrawValue
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 1785a163a5498bc02980f5c32a4828c2c4cd39b65eac5a8430e180a09e784b87
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

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
