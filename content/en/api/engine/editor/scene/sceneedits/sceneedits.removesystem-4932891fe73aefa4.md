---
uid: api.4932891fe73aefa46f9f523f61ad34949a5d0d96cbd8c62957fa0e377b4bf69c
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.RemoveSystem(Inno.Scene.GameSystem,System.String)"
source: xml
reviewed: 7e71ee26c31eb51ea9d02884ca52597302da16931a7604bebe61bc89418f8999
title: "SceneEdits.RemoveSystem"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Removes the system from its scene and records a reversible serialized history change.

**Parameter `system`:** The registered system to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the system was removed and recorded.
