---
uid: api.ed35b6f254d0b5ef716acabcdfed9f90a36368e89687c51f0121057d22913c9c
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.OpenDocument(System.Guid,Inno.Core.Graphs.GraphDocument,Inno.Editor.Interactions.IEditorHistory)"
source: xml
reviewed: 86da8236dff29a4869ae8903133b8f3f0c9e16932f81ea645e5b5a96e150f091
title: "GraphEditorModule.OpenDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Opens or joins an active graph document session.

## Parameters

**Parameter `documentId`:** Persistent document identity; use the Asset identity for asset-backed graphs.

**Parameter `document`:** Mutable neutral document owned by the current asset generation.

**Parameter `history`:** Shared editor history used for every data mutation.

## Returns

A presentation-independent document controller.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The bounded document owner is full.
