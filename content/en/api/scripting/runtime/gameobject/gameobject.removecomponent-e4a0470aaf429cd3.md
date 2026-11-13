---
uid: api.e4a0470aaf429cd3fc9509726f003cf26b042ebc6b618c0cd5ce57c1c9b03e4f
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameObject.RemoveComponent(InnoEngine.Scene.GameComponent)"
source: xml
reviewed: b5b47a9adb951d0b6142662cc94473dd55b5c879890bb16393677e4e60faf0b4
title: "GameObject.RemoveComponent"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Removes and destroys a specific attached component.

**Parameter `component`:** GameComponent instance to remove.

**Returns:** `true` when the component was attached and removed.

**Exception `T:System.InvalidOperationException`:** Thrown when attempting to remove the mandatory transform.
