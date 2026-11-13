---
uid: api.2df1b40be2fc7cd1789fa80468c134c4a26b59dba4182476d1e5b2ac91bb3764
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.MoveGameObjectToScene(Inno.Scene.GameObject,Inno.Scene.GameScene)"
source: xml
reviewed: fe525766e6d806f65d10196d0def8b70cd7e2995f7e58574b62e0da6e81b61a4
title: "MoveGameObjectToScene"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Moves a live object subtree between two scenes loaded by this world.

**Parameter `gameObject`:** The live root object to move.

**Parameter `destination`:** The loaded destination scene.

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded or the object is not live.
