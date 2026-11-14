---
uid: api.01fdb154174d8d2a90d2cf3b13504f8e3b747dba37b0f3907c5e455d64e45eea
symbol: "engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorPreviewService.TryRender(Inno.Editor.Rendering.EditorViewportComposition,Inno.Editor.Rendering.EditorPreviewHandle@)"
source: xml
reviewed: 67bebeab0fc5a7409cf39cc2f3725b8bda8e39c4302f4e0823ee0eed8ec43ab0
title: "IEditorPreviewService.TryRender"
kind: api
owners: [Inno.Editor.Rendering]
apiSurface: source-clr
---

Submits an isolated rendering composition through the shared offscreen viewport bridge.

**Parameter `composition`:** Invocation-local layers; the host retains no contributor instances after the frame.

**Parameter `handle`:** Receives a current-generation preview once its target is resident.

**Returns:** True when the completed previous output can be drawn; false during initial allocation or resize.
