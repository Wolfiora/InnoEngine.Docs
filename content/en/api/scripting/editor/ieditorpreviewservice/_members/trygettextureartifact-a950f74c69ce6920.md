---
uid: api.a950f74c69ce69205b5062ee1a9efc2994fdf1ebd220a239f8f64cecfc904e57
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.IEditorPreviewService.TryGetTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference,System.Int32,System.Int32,InnoEditor.Rendering.EditorPreviewHandle@)"
source: xml
reviewed: b509fda16e9b1231dc0afc093b10d98590a354232ab2a00bc52df8b455cd8e20
title: "TryGetTextureArtifact"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Tries to resolve a named texture artifact preview without blocking target compilation.

**Parameter `texture`:** Stable named texture artifact reference.

**Parameter `pixelWidth`:** Positive source width.

**Parameter `pixelHeight`:** Positive source height.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

**Returns:** `true` when the preview is ready.
