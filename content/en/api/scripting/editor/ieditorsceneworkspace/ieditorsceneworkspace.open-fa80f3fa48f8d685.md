---
uid: api.fa80f3fa48f8d6859e91f994012cdaabd3669eca2f19fd0077269613cba17eca
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.Open(System.String)"
source: xml
reviewed: a0373ff5fdc0e7c198ddd29471a60c55e33c0f36cb5ff7b5e2400331a3070dba
title: "IEditorSceneWorkspace.Open"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Opens a scene asset additively as the active editor scene.

## Parameters

**Parameter `relativePath`:** The source-relative scene asset path.

## Returns

The existing loaded instance or newly loaded scene.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.
