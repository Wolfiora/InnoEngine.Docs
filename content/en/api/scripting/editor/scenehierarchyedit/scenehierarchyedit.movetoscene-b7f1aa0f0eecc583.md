---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.b7f1aa0f0eecc5830acfd54b2dbf96270ee6d35bfa515c016d6b4d6ac69cfdb8
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneHierarchyEdit.MoveToScene(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameScene)
title: SceneHierarchyEdit.MoveToScene
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
reviewed: 3a7e35b1e73a8b6d60688127da2f5069f8fd7c6906fd676caa20eed000e80705
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when an argument is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded by the editor world.
