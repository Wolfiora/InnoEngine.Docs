---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.93fc278744a25b3df475ba8b0d93fff8b0ccb698fe712bd43f9864ffde508aba
symbol: engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,Inno.Editor.Interactions.IEditorHistory,Inno.Editor.Graph.GraphDocumentController@)
title: GraphEditorModule.TryOpenDocument
kind: api
owners:
- Inno.Editor.Graph
apiSurface: source-clr
reviewed: 3ecbbf530475a4e7c17b171bb723bc67662bf14a7af8a8e3efc608116ef8996c
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
