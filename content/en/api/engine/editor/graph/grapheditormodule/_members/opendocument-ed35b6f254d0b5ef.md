---
uid: api.ed35b6f254d0b5ef716acabcdfed9f90a36368e89687c51f0121057d22913c9c
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.OpenDocument(System.Guid,Inno.Core.Graphs.GraphDocument,Inno.Editor.Interactions.IEditorHistory)"
source: xml
reviewed: 24ba44c99c61d5e39a3b786c04021c36122b106556f45a7f080c908e896a5de8
title: "OpenDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Opens or joins an active graph document session.

**Parameter `documentId`:** Persistent document identity; use the Asset identity for asset-backed graphs.

**Parameter `document`:** Mutable neutral document owned by the current asset generation.

**Parameter `history`:** Shared editor history used for every data mutation.

**Returns:** A presentation-independent document controller.

**Exception `T:System.InvalidOperationException`:** The bounded document owner is full.
