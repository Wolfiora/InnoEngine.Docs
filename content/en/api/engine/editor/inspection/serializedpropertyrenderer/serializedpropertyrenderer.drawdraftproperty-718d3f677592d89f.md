---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.718d3f677592d89f985a4d3cc90aa60e11633e29e2494baee81961cdb43d7fbf
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(Inno.Editor.Core.EditorContext,System.Object,System.Object,System.String,Inno.Core.Serialization.SerializedProperty,Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean)
title: SerializedPropertyRenderer.DrawDraftProperty
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
sourceFingerprint: eb62fde6829b817db5b727f24ac755dba9e2da79716833034d4e5a40be0aa0ad
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `editorContext`:** Current Editor frame.

**Parameter `stateOwner`:** Stable host-owned presentation state, containing no collectible objects.

**Parameter `valueOwner`:** Invocation-local detached value declaring the property and attributes.

**Parameter `ownerPath`:** Stable document or settings path.

**Parameter `property`:** Detached native serialized property.

**Parameter `edits`:** Draft mutation and shared History boundary.

**Parameter `readOnly`:** Whether source ownership prohibits edits.
