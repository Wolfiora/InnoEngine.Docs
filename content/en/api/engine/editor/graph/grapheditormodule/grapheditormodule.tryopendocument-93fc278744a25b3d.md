---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.93fc278744a25b3df475ba8b0d93fff8b0ccb698fe712bd43f9864ffde508aba
symbol: engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.TryOpenDocument(System.Guid,Inno.Editor.Interactions.IEditorHistory,Inno.Editor.Graph.GraphDocumentController@)
title: GraphEditorModule.TryOpenDocument
kind: api
owners:
- Inno.Editor.Graph
apiSurface: source-clr
sourceFingerprint: 941776c98de13c80d074a15b451ae3b2d8d9974ff4db50f575ac3fd568c0864b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentID`:** The persistent document identity.

**Parameter `history`:** The shared history owner for the returned controller.

**Parameter `controller`:** The joined controller, or null when the document is closed.

## Returns

True when the document is still owned by this module.
