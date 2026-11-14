---
uid: api.2e0b03a5948cd3125f3e72a714a1a0de62a2de9e49e7275d24d1cc32636621b6
symbol: "engine:Inno.Scene:P:Inno.Scene.GameObject.tag"
source: xml
reviewed: 414440bc22dd542fa3beac83342fd49407e9f68d8308881533d6bafb181109a1
title: "GameObject.tag"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Gets or sets the ordinal tag used to categorize and query this game object.

## Remarks

Tag definitions are project configuration stored separately from scene data. Scene and prefab serialization persist the assigned ordinal value even when its current project definition is absent.

**Exception `T:System.ArgumentException`:** Thrown when the assigned tag is empty or contains only white-space characters.
