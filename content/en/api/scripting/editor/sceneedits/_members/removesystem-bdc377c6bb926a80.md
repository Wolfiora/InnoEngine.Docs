---
uid: api.bdc377c6bb926a805f0c6a442a35089ecc156f6eb47ec97e07f2720dc5a3253f
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.RemoveSystem(InnoEngine.Scene.GameSystem,System.String)"
source: xml
reviewed: 5afa1da9178e13ea2de5caad6b530f0000aed7dfd770d6576065786d23680c01
title: "RemoveSystem"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Removes the system from its scene and records a reversible serialized history change.

**Parameter `system`:** The registered system to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the system was removed and recorded.
