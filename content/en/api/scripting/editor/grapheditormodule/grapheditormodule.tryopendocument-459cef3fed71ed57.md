---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.459cef3fed71ed57f321d07b4041999bef4be037455f41d9607c7f2f59161d73
symbol: scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,InnoEditor.Interactions.IEditorHistory,InnoEditor.Graph.GraphDocumentController@)
title: GraphEditorModule.TryOpenDocument
kind: api
owners:
- Inno.Editor.Graph
apiSurface: editor-script
sourceFingerprint: 89e2df2cf257f48a8c8bc6943a65d85af99dc7f6504c74682c40e75135f66705
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentId`:** The persistent document identity.

**Parameter `history`:** The shared history owner for the returned controller.

**Parameter `controller`:** The joined controller, or null when the document is closed.

## Returns

True when the document is still owned by this module.
