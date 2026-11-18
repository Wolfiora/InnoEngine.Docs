---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fa80f3fa48f8d6859e91f994012cdaabd3669eca2f19fd0077269613cba17eca
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.Open(System.String)
title: IEditorSceneWorkspace.Open
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: 8df35830e555792b8fbe739bf7a900c888f3860d46999674f37e41069a1dc290
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `relativePath`:** The source-relative scene asset path.

## Returns

The existing loaded instance or newly loaded scene.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.
