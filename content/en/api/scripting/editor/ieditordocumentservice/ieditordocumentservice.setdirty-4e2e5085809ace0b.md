---
uid: api.4e2e5085809ace0b0bf5c5aaf010066b81443ae36098d244d50ea28298fe1b45
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.IEditorDocumentService.SetDirty(System.Guid,System.Boolean)"
source: xml
reviewed: 18c1b773ea943ad187e6d15cc3208845377551ba88d61ccf616dca016a0251a5
title: "IEditorDocumentService.SetDirty"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Updates a document's unsaved state without saving, discarding or changing its History.

**Parameter `documentId`:** Stable tab identity.

**Parameter `isDirty`:** Whether the provider's current draft differs from its saved baseline.
