---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.718d3f677592d89f985a4d3cc90aa60e11633e29e2494baee81961cdb43d7fbf
symbol: engine:Inno.Editor.Inspection:M:Inno.Editor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(Inno.Editor.Core.EditorContext,System.Object,System.Object,System.String,Inno.Core.Serialization.SerializedProperty,Inno.Editor.Inspection.IInspectionPropertyEditService,System.Boolean)
title: SerializedPropertyRenderer.DrawDraftProperty
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: source-clr
reviewed: 3d4362432c9488342d4bca2bad95f21732f0519a6c7a1dc20da3f0b6c3ab67eb
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
