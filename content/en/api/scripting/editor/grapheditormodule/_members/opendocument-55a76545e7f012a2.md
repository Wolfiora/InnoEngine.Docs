---
uid: api.55a76545e7f012a243360a652d2646f560efafa1fee6923ce91a93427e8f9ade
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.OpenDocument(System.Guid,InnoEngine.Graphs.GraphDocument,InnoEditor.Interactions.IEditorHistory)"
source: xml
reviewed: c19405191360b4a7e31cacc8f8f230b1a1f40fe58bbb03b73f21f491ff60e6e3
title: "OpenDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Opens or joins an active graph document session.

**Parameter `documentId`:** Persistent document identity; use the Asset identity for asset-backed graphs.

**Parameter `document`:** Mutable neutral document owned by the current asset generation.

**Parameter `history`:** Shared editor history used for every data mutation.

**Returns:** A presentation-independent document controller.

**Exception `T:System.InvalidOperationException`:** The bounded document owner is full.
