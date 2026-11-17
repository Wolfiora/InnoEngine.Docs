---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2df1b40be2fc7cd1789fa80468c134c4a26b59dba4182476d1e5b2ac91bb3764
symbol: engine:Inno.Scene:M:Inno.Scene.SceneWorld.MoveGameObjectToScene(Inno.Scene.GameObject,Inno.Scene.GameScene)
title: SceneWorld.MoveGameObjectToScene
kind: api
owners:
- Inno.Scene
apiSurface: source-clr
reviewed: 584d14cf97b72f18d59079c7d971c808accb137caa380120f8c4cde2f0363754
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

**Exception `T:System.InvalidOperationException`:** Thrown when either scene is not loaded or the object is not live.
