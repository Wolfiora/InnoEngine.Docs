---
uid: api.2df1b40be2fc7cd1789fa80468c134c4a26b59dba4182476d1e5b2ac91bb3764
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.MoveGameObjectToScene(Inno.Scene.GameObject,Inno.Scene.GameScene)"
source: xml
reviewed: 507599faab1da883cd10e55cd3de1da5dd1c4a9c6c71549dcf91eb5cada555f6
title: "SceneWorld.MoveGameObjectToScene"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Moves a live object subtree between two scenes loaded by this world.

## Parameters

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded or the object is not live.
