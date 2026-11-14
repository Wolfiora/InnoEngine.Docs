---
uid: api.d8e31355a3b9c2b92b43b45a6d5a5332b78d5043520f0f333393f65e65803a7e
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorPreviewService.TryGetTextureArtifact(Inno.Rendering.Assets.RenderTextureArtifactReference,System.Int32,System.Int32,Inno.Editor.Rendering.EditorPreviewHandle@)"
source: xml
reviewed: 48df41cab691d289ed1b899342ffb85b84b7b05ca89dce4267a08249e370e95b
title: "IEditorPreviewService.TryGetTextureArtifact"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Tries to resolve a named texture artifact preview without blocking target compilation.

## Parameters

**Parameter `texture`:** Stable named texture artifact reference.

**Parameter `pixelWidth`:** Positive source width.

**Parameter `pixelHeight`:** Positive source height.

**Parameter `handle`:** Receives a generation-scoped handle when ready.

## Returns

`true` when the preview is ready.
