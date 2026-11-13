---
uid: api.c6bc90617140e352576f6ce915b4c62d6e46c57abddbea57126d818e4a79a8db
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.ReplaceDocument(Inno.Core.Graphs.GraphDocument,System.String,System.String)"
source: xml
reviewed: d97e25e932b3f3f9b7c4aedf5f515f3e7ce6f36aebbd870c6e06cae6c1bc7743
title: "ReplaceDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Replaces the complete neutral document as one atomic, undoable authoring operation.

**Parameter `replacement`:** Complete replacement document copied by the operation.

**Parameter `historyName`:** Concise artist-facing history entry name.

**Parameter `gestureId`:** Unique active gesture identity for continuous samples, or null for an independent edit.
