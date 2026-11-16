---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a950f74c69ce69205b5062ee1a9efc2994fdf1ebd220a239f8f64cecfc904e57
symbol: scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.IEditorPreviewService.TryGetTextureArtifact(InnoEngine.Rendering.RenderTextureArtifactReference,System.Int32,System.Int32,InnoEditor.Rendering.EditorPreviewHandle@)
title: IEditorPreviewService.TryGetTextureArtifact
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: editor-script
reviewed: 7aba69f6c57a30c43e72e6889c21b8865611da9485c12edd642c74de351f5f95
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `texture`:** Stable named texture artifact reference.

**Parameter `pixelWidth`:** Positive source width.

**Parameter `pixelHeight`:** Positive source height.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

## Returns

`true` when the preview is ready.
