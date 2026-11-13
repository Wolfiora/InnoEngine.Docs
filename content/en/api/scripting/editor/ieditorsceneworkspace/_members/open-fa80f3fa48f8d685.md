---
uid: api.fa80f3fa48f8d6859e91f994012cdaabd3669eca2f19fd0077269613cba17eca
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.IEditorSceneWorkspace.Open(System.String)"
source: xml
reviewed: b2d3e978edff6e8b05c506f6eda5a824369bfbd2b800575388f88f37674d820c
title: "Open"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Opens a scene asset additively as the active editor scene.

**Parameter `relativePath`:** The source-relative scene asset path.

**Returns:** The existing loaded instance or newly loaded scene.

**Exception `T:System.InvalidOperationException`:** Thrown while Play Mode runtime copies are active or when the asset cannot be opened.
