---
uid: api.20e03f9c427708488b6a3ead6f4a8f28ab67c53c6a810ed83b982fdcd512b9ac
symbol: "engine:Inno.Editor.Scene:M:Inno.Editor.Scene.SceneEdits.SetGameObjectLayer(Inno.Scene.GameObject,Inno.Scene.Layers.GameLayer,System.String)"
source: xml
reviewed: 9ae292e30c7a6ba92602d8e7dcdddd205c954128ba2944b08a95fa36e6fcfb5f
title: "SetGameObjectLayer"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: source-clr
---

Changes the layer of a live GameObject and records the two stable numeric layer slots.

**Parameter `gameObject`:** The live GameObject whose layer should change.

**Parameter `layer`:** The requested project layer slot.

**Parameter `historyName`:** The user-facing history entry name.

**Exception `T:System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `historyName` is empty.
