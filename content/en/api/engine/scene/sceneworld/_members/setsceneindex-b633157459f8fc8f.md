---
uid: api.b633157459f8fc8fff2661c26fa463ff851c45c2ad03291b2bdfede440c95cd4
symbol: "engine:Inno.Scene:M:Inno.Scene.SceneWorld.SetSceneIndex(Inno.Scene.GameScene,System.Int32)"
source: xml
reviewed: c28c729da9f3c97d17b25808affbb2c570307ee5dba00d83163a941d874a177d
title: "SetSceneIndex"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Moves a loaded scene to a hierarchy index without changing the active scene.

**Parameter `scene`:** The loaded scene to move.

**Parameter `sceneIndex`:** The requested zero-based hierarchy index.

**Exception `T:System.InvalidOperationException`:** Thrown when the scene is not loaded by this world.
