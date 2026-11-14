---
uid: api.93fc278744a25b3df475ba8b0d93fff8b0ccb698fe712bd43f9864ffde508aba
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,Inno.Editor.Interactions.IEditorHistory,Inno.Editor.Graph.GraphDocumentController@)"
source: xml
reviewed: a1c9818d215ebfbd8e5229f3dc616045aeb85893d52964f7d5ac60861a6d56e7
title: "GraphEditorModule.TryOpenDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Resolves an already open document without replacing its authored contents.

**Parameter `documentId`:** The persistent document identity.

**Parameter `history`:** The shared history owner for the returned controller.

**Parameter `controller`:** The joined controller, or null when the document is closed.

**Returns:** True when the document is still owned by this module.
