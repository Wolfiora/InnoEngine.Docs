---
uid: api.87413151e96d5bebe34eeaad69e0d46b4f558b940db246d1b48a84e5c0e983ee
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.IEditorPreviewService.TryGetTexture(InnoEngine.Rendering.TextureAsset,InnoEditor.Rendering.EditorPreviewHandle@)"
source: xml
reviewed: 4f5a2be70022fb768c704e03be878291bbc1ffd05700da0017ac271ab39d826e
title: "IEditorPreviewService.TryGetTexture"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Tries to resolve a standalone texture preview without blocking target compilation.

**Parameter `texture`:** Texture asset to preview.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

**Returns:** `true` when the preview is ready.
