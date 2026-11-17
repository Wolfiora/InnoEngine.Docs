---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e72857d1b17dc7de7d2fed3392443a7737234fd8a703895d9f3db664a3c07397
symbol: scripting:Inno.Editor.Rendering:M:InnoEditor.Rendering.IEditorPreviewService.TryRender(InnoEditor.Rendering.EditorViewportComposition,InnoEditor.Rendering.EditorPreviewHandle@)
title: IEditorPreviewService.TryRender
kind: api
owners:
- Inno.Editor.Rendering
apiSurface: editor-script
reviewed: 39e774aaca719723413c007e55fcabe7fa31b644860c59088eec19aee420f48f
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
