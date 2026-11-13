---
uid: api.9cf41f8f870db99b59a93b83be2d78a5d98a728ce401d78ebcff33e8366b62c2
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.IEditorSceneWorkspace.SetActiveScene(Inno.Scene.GameScene)"
source: xml
reviewed: 04e2fcc917c4cc09fb6b2c40577750586d7576ae46ff41a5a3cfc53d39c20ac6
title: "SetActiveScene"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Makes one presented scene active without changing scene order.

**Parameter `scene`:** The loaded scene to activate.

**Exception `T:System.ArgumentNullException`:** Thrown when `scene` is `null`.

**Exception `T:System.InvalidOperationException`:** Thrown when the scene is not loaded by this workspace.
