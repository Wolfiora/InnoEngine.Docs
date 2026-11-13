---
uid: api.6d634aeba87a808e59d7a09c873d654fe93a4e316290ebc21e62bf17580929ce
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.AddComponent(Inno.Scene.GameObject,System.Type,System.String)"
source: xml
reviewed: ff80bd2f867dc432ae595d5dff03868473fed38770e74a72bbc6c95de78eead3
title: "AddComponent"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Adds one component and records its identity, stable type, index, and persistent properties.

**Parameter `owner`:** The live GameObject receiving the component.

**Parameter `componentType`:** The concrete component type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly attached component.
