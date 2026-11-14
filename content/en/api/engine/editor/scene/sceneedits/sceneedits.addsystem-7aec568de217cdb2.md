---
uid: api.7aec568de217cdb2d19f86067aa71d5b894576b9ad329cee9c94d7c4fe973dc1
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.AddSystem(Inno.Scene.GameScene,System.Type,System.String)"
source: xml
reviewed: 77a53942aca11737a59dcdf4615337787ed82f0d14aa9a9e0c1397d14526936d
title: "SceneEdits.AddSystem"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Adds one scene system and records its identity, stable type, index, and persistent properties.

**Parameter `scene`:** The loaded scene receiving the system.

**Parameter `systemType`:** The concrete system type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly registered system.
