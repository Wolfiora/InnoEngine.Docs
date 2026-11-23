---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.ed35b6f254d0b5ef716acabcdfed9f90a36368e89687c51f0121057d22913c9c
symbol: engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.OpenDocument(System.Guid,Inno.Core.Graphs.GraphDocument,Inno.Editor.Interactions.IEditorHistory)
title: GraphEditorModule.OpenDocument
kind: api
owners:
- Inno.Editor.Graph
apiSurface: source-clr
sourceFingerprint: 15fe741a1d8c3c96fb341970eb40a44e8acdbe2d7a98a62f2e6ca317dc99785a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `documentID`:** Persistent document identity; use the Asset identity for asset-backed graphs.

**Parameter `document`:** Mutable neutral document owned by the current asset generation.

**Parameter `history`:** Shared editor history used for every data mutation.

## Returns

A presentation-independent document controller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The bounded document owner is full.
