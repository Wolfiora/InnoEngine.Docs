---
uid: api.4e6edfd58bc126fbd63961e94e740570db89d6e6188f761b2bbaeb4173392d89
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorPreviewService.TryGetTexture(Inno.Rendering.Assets.TextureAsset,Inno.Editor.Rendering.EditorPreviewHandle@)"
source: xml
reviewed: 0d1a5c8eb250891d16a6d33fdbd2ad23f1bc9b9da573d1e831f29ed578594541
title: "TryGetTexture"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Tries to resolve a standalone texture preview without blocking target compilation.

**Parameter `texture`:** Texture asset to preview.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

**Returns:** `true` when the preview is ready.
