---
uid: api.bd6c753949801e4820150e9412bae03a1755067be31e0e45fd7d9d5fc1878c5f
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.CloseDocument(System.Guid)"
source: xml
reviewed: 5934e3f080f043bed5c32e5be0388fa8c546009a3ddbea3ea499e4edb919fc3e
title: "CloseDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Closes a document explicitly; its neutral History entries remain unavailable until the identity is reopened.

**Parameter `documentId`:** The persistent document identity to release.

**Returns:** True when a live document was closed.
