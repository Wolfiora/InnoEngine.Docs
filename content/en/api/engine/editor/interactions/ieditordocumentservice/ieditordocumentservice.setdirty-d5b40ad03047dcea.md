---
uid: api.d5b40ad03047dcea4115604afaefb8ac313bbc8acbfaf4797fdce830b25c707e
symbol: "engine:Inno.Editor.Interactions:M:Inno.Editor.Interactions.IEditorDocumentService.SetDirty(System.Guid,System.Boolean)"
source: xml
reviewed: 07b9941914505cab1c7cdd31792bfacbf7b0cab54ecc3f0b6d10d51853bb59dd
title: "IEditorDocumentService.SetDirty"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: source-clr
---

Updates a document's unsaved state without saving, discarding or changing its History.

**Parameter `documentId`:** Stable tab identity.

**Parameter `isDirty`:** Whether the provider's current draft differs from its saved baseline.
