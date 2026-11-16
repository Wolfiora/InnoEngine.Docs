---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.55a76545e7f012a243360a652d2646f560efafa1fee6923ce91a93427e8f9ade
symbol: scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.OpenDocument(System.Guid,InnoEngine.Graphs.GraphDocument,InnoEditor.Interactions.IEditorHistory)
title: GraphEditorModule.OpenDocument
kind: api
owners:
- Inno.Editor.Graph
apiSurface: editor-script
reviewed: 5f52d7e7abe7f10f2befc7f349aa0323d9831c6615e8e778087f4c1e88c29420
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentId`:** Persistent document identity; use the Asset identity for asset-backed graphs.

**Parameter `document`:** Mutable neutral document owned by the current asset generation.

**Parameter `history`:** Shared editor history used for every data mutation.

## Returns

A presentation-independent document controller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The bounded document owner is full.
