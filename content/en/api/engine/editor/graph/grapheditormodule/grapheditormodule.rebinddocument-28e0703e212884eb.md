---
uid: api.28e0703e212884eba3419cd0248d613ad4b09ebbbf9c4b7fa8044cabb768baae
symbol: "engine:Inno.Editor.Graph:M:Inno.Editor.Graph.GraphEditorModule.RebindDocument(System.Guid,Inno.Core.Graphs.GraphDocument)"
source: xml
reviewed: 5e40b40f70892d82e6d9978d0fb27d88f23d853950640239310f6c37bdd6754c
title: "GraphEditorModule.RebindDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: source-clr
---

Rebinds an active session to a newly imported current-generation document.

## Parameters

**Parameter `documentId`:** Stable document identity.

**Parameter `document`:** New current-generation document instance.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the document has no active session.
