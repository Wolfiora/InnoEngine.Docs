---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b7f1aa0f0eecc5830acfd54b2dbf96270ee6d35bfa515c016d6b4d6ac69cfdb8
symbol: scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneHierarchyEdit.MoveToScene(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameScene)
title: SceneHierarchyEdit.MoveToScene
kind: api
owners:
- Inno.Editor.Scene
apiSurface: editor-script
sourceFingerprint: 7a1a0965ef43e40845cfd56ca8b7165ebe02b00c94aeefbad0f405dc459bdc4c
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
