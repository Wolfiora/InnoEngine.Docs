---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bffba92c4a26cfae06e44302b627b30711f42dcad3dfd1b0a85bcf9b2df920e9
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryHandler.Apply(Inno.Editor.Interactions.EditorHistoryContext,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryDirection)
title: EditorHistoryHandler.Apply
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
sourceFingerprint: a64f08e0b3fa09ff5b2539a060ae382c0a336da57e8f410d2c9f66a8829b52a1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `context`:** The current-generation editor services.

**Parameter `change`:** The neutral history change.

**Parameter `direction`:** The requested Undo or Redo direction.

## Returns

The transition result. A failure must leave the feature in its original state.
