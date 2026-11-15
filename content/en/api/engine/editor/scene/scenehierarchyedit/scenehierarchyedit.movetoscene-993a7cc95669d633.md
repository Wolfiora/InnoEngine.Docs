---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.993a7cc95669d633c8aa9c255bc9a55739dd164493dc03e7acf9db02b142322e
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneHierarchyEdit.MoveToScene(Inno.Scene.GameObject,Inno.Scene.GameScene)
title: SceneHierarchyEdit.MoveToScene
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
reviewed: 798cd3f5e4c664f326f43fa6349d3fe7f312469c194c790e2583863a126a4ba7

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when an argument is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded by the editor world.
