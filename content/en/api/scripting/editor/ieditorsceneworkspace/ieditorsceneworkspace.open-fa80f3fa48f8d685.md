---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fa80f3fa48f8d6859e91f994012cdaabd3669eca2f19fd0077269613cba17eca
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.Open(System.String)
title: IEditorSceneWorkspace.Open
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 4716ef4254fc70540ae7d3b3b5df72a88dc8919e1d20a1f4dd70b5d7b7763e21
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
