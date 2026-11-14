---
uid: api.ee9d04157bcb38968bdf47ec5a3b8bae37836969aa4a553722c78401ff9a013a
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.CloseDocument(System.Guid)"
source: xml
reviewed: 84a027361cd301d63ccf1dac4f37392d60d9df41f3ddaed503d1d512d9af9ab6
title: "GraphEditorModule.CloseDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Closes a document explicitly; its neutral History entries remain unavailable until the identity is reopened.

## Parameters

**Parameter `documentId`:** The persistent document identity to release.

## Returns

True when a live document was closed.
