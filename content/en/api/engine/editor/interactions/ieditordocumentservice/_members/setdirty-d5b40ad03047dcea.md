---
uid: api.d5b40ad03047dcea4115604afaefb8ac313bbc8acbfaf4797fdce830b25c707e
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorDocumentService.SetDirty(System.Guid,System.Boolean)"
source: xml
reviewed: f980a576139838a3a67af77980cc10efc2a4b040063ed2853791fec231e70e27
title: "SetDirty"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Updates a document's unsaved state without saving, discarding or changing its History.

**Parameter `documentId`:** Stable tab identity.

**Parameter `isDirty`:** Whether the provider's current draft differs from its saved baseline.
