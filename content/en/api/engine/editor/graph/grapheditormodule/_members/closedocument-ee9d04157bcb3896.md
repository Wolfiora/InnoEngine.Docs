---
uid: api.ee9d04157bcb38968bdf47ec5a3b8bae37836969aa4a553722c78401ff9a013a
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.CloseDocument(System.Guid)"
source: xml
reviewed: f62cce62d4d591de99a4e3e0235b7f4c7f064812258d2e57a5c0a3c726054efe
title: "CloseDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Closes a document explicitly; its neutral History entries remain unavailable until the identity is reopened.

**Parameter `documentId`:** The persistent document identity to release.

**Returns:** True when a live document was closed.
