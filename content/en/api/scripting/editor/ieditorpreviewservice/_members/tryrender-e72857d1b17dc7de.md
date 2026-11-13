---
uid: api.e72857d1b17dc7de7d2fed3392443a7737234fd8a703895d9f3db664a3c07397
symbol: "scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.IEditorPreviewService.TryRender(InnoEditor.Rendering.EditorViewportComposition,InnoEditor.Rendering.EditorPreviewHandle@)"
source: xml
reviewed: 99350c25a67be91cfadfefaa6100c071a9dbb09a7abcc4d8a5fc624efb725063
title: "TryRender"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: editor-script
apiScope: Editor
---

Submits an isolated rendering composition through the shared offscreen viewport bridge.

**Parameter `composition`:** Invocation-local layers; the host retains no contributor instances after the frame.

**Parameter `handle`:** Receives a current-generation preview once its target is resident.

**Returns:** True when the completed previous output can be drawn; false during initial allocation or resize.
