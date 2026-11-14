---
uid: api.b633157459f8fc8fff2661c26fa463ff851c45c2ad03291b2bdfede440c95cd4
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.SetSceneIndex(Inno.Scene.GameScene,System.Int32)"
source: xml
reviewed: b7dc66c062244ede0194ddd41ae81778ecb82c205d4e9279a71d3642507d41e3
title: "SceneWorld.SetSceneIndex"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Moves a loaded scene to a hierarchy index without changing the active scene.

**Parameter `scene`:** The loaded scene to move.

**Parameter `sceneIndex`:** The requested zero-based hierarchy index.

**Exception `T:System.InvalidOperationException`:** Thrown when the scene is not loaded by this world.
