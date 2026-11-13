---
uid: api.a81a011c9d1cca51f94212fd97f845b685f7ffe05115b6c9b15551555cfe066f
symbol: "engine:Inno.Scene:M:Inno.Scene.GameObject.RemoveComponent(Inno.Scene.GameComponent)"
source: xml
reviewed: 2bf7eefc51b3e3f06cab7714a97537a32773c9cdb02ad8318d93c4d7e01df048
title: "RemoveComponent"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Removes and destroys a specific attached component.

**Parameter `component`:** GameComponent instance to remove.

**Returns:** `true` when the component was attached and removed.

**Exception `T:System.InvalidOperationException`:** Thrown when attempting to remove the mandatory transform.
