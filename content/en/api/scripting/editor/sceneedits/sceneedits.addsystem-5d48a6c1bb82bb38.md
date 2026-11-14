---
uid: api.5d48a6c1bb82bb3876ecd409c4521625bfca5d47ba6437cb52fd90f8774e526a
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.AddSystem(InnoEngine.Scene.GameScene,System.Type,System.String)"
source: xml
reviewed: e34a9049135ac1a092f035bdaa0ab211982140783cb32f9c2a5f4d55e8af690d
title: "SceneEdits.AddSystem"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Adds one scene system and records its identity, stable type, index, and persistent properties.

## Parameters

**Parameter `scene`:** The loaded scene receiving the system.

**Parameter `systemType`:** The concrete system type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

## Returns

The newly registered system.
