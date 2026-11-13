---
uid: api.993a7cc95669d633c8aa9c255bc9a55739dd164493dc03e7acf9db02b142322e
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneHierarchyEdit.MoveToScene(Inno.Scene.GameObject,Inno.Scene.GameScene)"
source: xml
reviewed: de4a1d733d925f4c5526029546ee94d116c933796edc7528a1259f9fc0c00124
title: "MoveToScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Moves a live GameObject subtree into another scene owned by the current editor world.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

**Exception `T:System.ArgumentNullException`:** Thrown when an argument is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded by the editor world.
