---
uid: api.e4a0470aaf429cd3fc9509726f003cf26b042ebc6b618c0cd5ce57c1c9b03e4f
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameObject.RemoveComponent(InnoEngine.Scene.GameComponent)"
source: xml
reviewed: a791871f2c801d763730dc64e909ab35600e3d4aacc8c2a92d4c32e61d0bae22
title: "RemoveComponent"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Removes and destroys a specific attached component.

**Parameter `component`:** GameComponent instance to remove.

**Returns:** `true` when the component was attached and removed.

**Exception `T:System.InvalidOperationException`:** Thrown when attempting to remove the mandatory transform.
