---
uid: api.9dd72da3964bba5b409d1f7e35b5914de9056897e6121c4c9476817ea635810d
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.RebindDocument(System.Guid,InnoEngine.Graphs.GraphDocument)"
source: xml
reviewed: 9712c3a9a297669fd6c0d26950f88980382e710104d40ec54574a016e0faca63
title: "RebindDocument"
kind: api
owners: [Inno.Editor.Graph]
apiSurface: editor-script
apiScope: Editor
---

Rebinds an active session to a newly imported current-generation document.

**Parameter `documentId`:** Stable document identity.

**Parameter `document`:** New current-generation document instance.

**Exception `T:System.InvalidOperationException`:** Thrown when the document has no active session.
