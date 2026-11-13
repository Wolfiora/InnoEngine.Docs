---
uid: api.bdc377c6bb926a805f0c6a442a35089ecc156f6eb47ec97e07f2720dc5a3253f
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.RemoveSystem(InnoEngine.Scene.GameSystem,System.String)"
source: xml
reviewed: 646d4066d7369510d57f303c3a35170ccb5f143f673cdc423df8dbf7f8d5744c
title: "SceneEdits.RemoveSystem"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Removes the system from its scene and records a reversible serialized history change.

**Parameter `system`:** The registered system to remove.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** `true` when the system was removed and recorded.
