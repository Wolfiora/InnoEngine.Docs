---
uid: api.c6bc90617140e352576f6ce915b4c62d6e46c57abddbea57126d818e4a79a8db
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphDocumentController.ReplaceDocument(Inno.Core.Graphs.GraphDocument,System.String,System.String)"
source: xml
reviewed: dfd9f7ea9c2780ee0ee77f4458a86dd8c57cd0ad44fd33e476c0267580e3a0e4
title: "ReplaceDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Replaces the complete neutral document as one atomic, undoable authoring operation.

**Parameter `replacement`:** Complete replacement document copied by the operation.

**Parameter `historyName`:** Concise artist-facing history entry name.

**Parameter `gestureId`:** Unique active gesture identity for continuous samples, or null for an independent edit.
