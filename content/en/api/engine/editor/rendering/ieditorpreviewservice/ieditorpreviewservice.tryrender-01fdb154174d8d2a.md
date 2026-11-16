---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.01fdb154174d8d2a90d2cf3b13504f8e3b747dba37b0f3907c5e455d64e45eea
symbol: engine:Inno.Editor.Rendering:M:Inno.Editor.Rendering.IEditorPreviewService.TryRender(Inno.Editor.Rendering.EditorViewportComposition,Inno.Editor.Rendering.EditorPreviewHandle@)
title: IEditorPreviewService.TryRender
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: source-clr
reviewed: 73c18efe165f1da0e886ae14f06ce620c697181096d8358fa09417965b5fefa8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `composition`:** Invocation-local layers; the host retains no contributor instances after the frame.

**Parameter `handle`:** Receives a current-generation preview once its target is resident.

## Returns

True when the completed previous output can be drawn; false during initial allocation or resize.
