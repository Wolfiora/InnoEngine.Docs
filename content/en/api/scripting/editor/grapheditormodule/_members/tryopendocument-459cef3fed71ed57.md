---
uid: api.459cef3fed71ed57f321d07b4041999bef4be037455f41d9607c7f2f59161d73
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,InnoEditor.Interactions.IEditorHistory,InnoEditor.Graph.GraphDocumentController@)"
source: xml
reviewed: 01824730dcce280945932a2fa9903bbc37c9aa80f1f578042935f4580d36309c
title: "TryOpenDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Resolves an already open document without replacing its authored contents.

**Parameter `documentId`:** The persistent document identity.

**Parameter `history`:** The shared history owner for the returned controller.

**Parameter `controller`:** The joined controller, or null when the document is closed.

**Returns:** True when the document is still owned by this module.
