---
uid: api.b7f1aa0f0eecc5830acfd54b2dbf96270ee6d35bfa515c016d6b4d6ac69cfdb8
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneHierarchyEdit.MoveToScene(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameScene)"
source: xml
reviewed: aa9e7849a2fe455a778acba689456c59a9204c2fe230dd728228fa5a487f8b4f
title: "SceneHierarchyEdit.MoveToScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Moves a live GameObject subtree into another scene owned by the current editor world.

## Parameters

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when an argument is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded by the editor world.
