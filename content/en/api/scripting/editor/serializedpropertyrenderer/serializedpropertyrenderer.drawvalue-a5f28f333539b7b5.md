---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a5f28f333539b7b56e4ce9bac67def7c0b81a6cde257581289c2189564d7d378
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.DrawValue(InnoEditor.Core.EditorContext,System.Object,System.String,System.String,System.Type,System.Func{System.Object},System.Action{System.Object},InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean,System.Boolean,System.String,System.Nullable{System.Double},System.Nullable{System.Double})
title: SerializedPropertyRenderer.DrawValue
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: 66e05aa9ae8cc5819bd1218ce96aee46969624a6711df08e042e5ed318c9bb99
apiScope: Editor
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
