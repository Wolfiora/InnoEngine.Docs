---
uid: api.b7f1aa0f0eecc5830acfd54b2dbf96270ee6d35bfa515c016d6b4d6ac69cfdb8
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneHierarchyEdit.MoveToScene(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameScene)"
source: xml
reviewed: 8fbaf7f4bd2bdf6bc0c6aeba1707a88b86e7df250914d5596865e7613f9da0ae
title: "MoveToScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Moves a live GameObject subtree into another scene owned by the current editor world.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

**Exception `T:System.ArgumentNullException`:** Thrown when an argument is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded by the editor world.
