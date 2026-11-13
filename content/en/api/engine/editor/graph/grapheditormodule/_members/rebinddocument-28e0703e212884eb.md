---
uid: api.28e0703e212884eba3419cd0248d613ad4b09ebbbf9c4b7fa8044cabb768baae
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.RebindDocument(System.Guid,Inno.Core.Graphs.GraphDocument)"
source: xml
reviewed: a50295f5f47d9b96202e3b01d14fa04ad5742a10ee5680b0487078c906ba14e3
title: "RebindDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Rebinds an active session to a newly imported current-generation document.

**Parameter `documentId`:** Stable document identity.

**Parameter `document`:** New current-generation document instance.

**Exception `T:System.InvalidOperationException`:** Thrown when the document has no active session.
