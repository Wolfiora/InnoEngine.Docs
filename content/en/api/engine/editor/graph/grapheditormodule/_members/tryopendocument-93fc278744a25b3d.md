---
uid: api.93fc278744a25b3df475ba8b0d93fff8b0ccb698fe712bd43f9864ffde508aba
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,Inno.Editor.Interactions.IEditorHistory,Inno.Editor.Graph.GraphDocumentController@)"
source: xml
reviewed: 72e1abf5a046bbdf4d60aa089b33fc1d2c08332b24d63bce91b1b5b0e500d839
title: "TryOpenDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Resolves an already open document without replacing its authored contents.

**Parameter `documentId`:** The persistent document identity.

**Parameter `history`:** The shared history owner for the returned controller.

**Parameter `controller`:** The joined controller, or null when the document is closed.

**Returns:** True when the document is still owned by this module.
