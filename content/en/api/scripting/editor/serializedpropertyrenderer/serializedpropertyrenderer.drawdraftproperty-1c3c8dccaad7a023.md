---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1c3c8dccaad7a023bf75397c2c862115054f1d94fd550b1fb86046f2780aac66
symbol: scripting:Inno.Editor.Inspection:M:InnoEditor.Inspection.SerializedPropertyRenderer.DrawDraftProperty(InnoEditor.Core.EditorContext,System.Object,System.Object,System.String,InnoEngine.Serialization.SerializedProperty,InnoEditor.Inspection.IInspectionPropertyEditService,System.Boolean)
title: SerializedPropertyRenderer.DrawDraftProperty
kind: api
owners:
- Inno.Editor.Inspection
apiSurface: editor-script
reviewed: 70f78187b7a17b7a7a3289d10d7ac21ab597fa0c40d30113fb9df1994610baa2
apiScope: Editor
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
