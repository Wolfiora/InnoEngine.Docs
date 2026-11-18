---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e72857d1b17dc7de7d2fed3392443a7737234fd8a703895d9f3db664a3c07397
symbol: scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.IEditorPreviewService.TryRender(InnoEditor.Rendering.EditorViewportComposition,InnoEditor.Rendering.EditorPreviewHandle@)
title: IEditorPreviewService.TryRender
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: editor-script
sourceFingerprint: fd40c67bb0c1bf0814ffc87e7d58b9572566921bd1e4e4f70c389b4293261d1b
apiScope: Editor
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
