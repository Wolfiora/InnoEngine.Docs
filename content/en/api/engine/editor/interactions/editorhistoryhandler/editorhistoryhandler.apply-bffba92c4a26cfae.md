---
uid: api.bffba92c4a26cfae06e44302b627b30711f42dcad3dfd1b0a85bcf9b2df920e9
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryHandler.Apply(Inno.Editor.Interactions.EditorHistoryContext,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryDirection)"
source: xml
reviewed: 282967df3f740729809f6414824f34fcb7454214e83ea9b8e68a4fa7da8535b9
title: "EditorHistoryHandler.Apply"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Atomically applies a neutral history change in the requested direction.

## Parameters

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

## Returns

The transition result. A failure must leave the feature in its original state.
