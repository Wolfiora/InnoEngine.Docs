---
uid: api.bd6c753949801e4820150e9412bae03a1755067be31e0e45fd7d9d5fc1878c5f
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.CloseDocument(System.Guid)"
source: xml
reviewed: 3109568326d1428c54ad90c26dac5c2a8c9dc2e18d4b8abbf1355d1e9b9efdec
title: "GraphEditorModule.CloseDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Closes a document explicitly; its neutral History entries remain unavailable until the identity is reopened.

**Parameter `documentId`:** The persistent document identity to release.

**Returns:** True when a live document was closed.
