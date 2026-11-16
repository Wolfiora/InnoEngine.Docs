---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bffba92c4a26cfae06e44302b627b30711f42dcad3dfd1b0a85bcf9b2df920e9
symbol: engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.EditorHistoryHandler.Apply(Inno.Editor.Interactions.EditorHistoryContext,Inno.Editor.Interactions.EditorHistoryChange,Inno.Editor.Interactions.EditorHistoryDirection)
title: EditorHistoryHandler.Apply
kind: api
owners:
- Inno.Editor.Interactions
apiSurface: source-clr
reviewed: d4af209fbc7e7b919d4eacdbc4a908c72a9ed5a12698ed25135b220307111742
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
