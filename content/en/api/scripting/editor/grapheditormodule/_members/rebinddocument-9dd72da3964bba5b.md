---
uid: api.9dd72da3964bba5b409d1f7e35b5914de9056897e6121c4c9476817ea635810d
symbol: "scripting:Inno.Editor.Graph:M:InnoEditor.Graph.GraphEditorModule.RebindDocument(System.Guid,InnoEngine.Graphs.GraphDocument)"
source: xml
reviewed: 7b0fbf9dd2c669b72d697d60dd81012ef4ddd8a1281932426273537211e9cc3e
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
