---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.993a7cc95669d633c8aa9c255bc9a55739dd164493dc03e7acf9db02b142322e
symbol: engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneHierarchyEdit.MoveToScene(Inno.Scene.GameObject,Inno.Scene.GameScene)
title: SceneHierarchyEdit.MoveToScene
kind: api
owners:
- Inno.Editor.Scene
apiSurface: source-clr
sourceFingerprint: 2a13f9e20ffef6af2b5b4be3532a79d1b80543d325e3b82fb8bdc3b0f4a8bb80
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
