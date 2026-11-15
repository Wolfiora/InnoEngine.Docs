---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.fa80f3fa48f8d6859e91f994012cdaabd3669eca2f19fd0077269613cba17eca
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.Open(System.String)
title: IEditorSceneWorkspace.Open
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: a0373ff5fdc0e7c198ddd29471a60c55e33c0f36cb5ff7b5e2400331a3070dba
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `relativePath`:** The source-relative scene asset path.

## Returns

The existing loaded instance or newly loaded scene.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.
