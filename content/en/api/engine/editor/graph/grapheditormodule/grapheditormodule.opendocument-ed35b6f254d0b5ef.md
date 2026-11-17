---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.ed35b6f254d0b5ef716acabcdfed9f90a36368e89687c51f0121057d22913c9c
symbol: engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.OpenDocument(System.Guid,Inno.Core.Graphs.GraphDocument,Inno.Editor.Interactions.IEditorHistory)
title: GraphEditorModule.OpenDocument
kind: api
owners:
- Inno.Editor.Graph
apiSurface: source-clr
reviewed: 14bdafebefabc66a67272d84a6656a1620af7cc7eeeb3ac9131e0e0b9d01cc56
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
