---
uid: api.6d634aeba87a808e59d7a09c873d654fe93a4e316290ebc21e62bf17580929ce
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.AddComponent(Inno.Scene.GameObject,System.Type,System.String)"
source: xml
reviewed: f66b46d32dae111089254ecfa08ee19dc2a96346f962d493ff777631204f67af
title: "SceneEdits.AddComponent"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Adds one component and records its identity, stable type, index, and persistent properties.

**Parameter `owner`:** The live GameObject receiving the component.

**Parameter `componentType`:** The concrete component type to create.

**Parameter `historyName`:** An optional user-facing history entry name.

**Returns:** The newly attached component.
