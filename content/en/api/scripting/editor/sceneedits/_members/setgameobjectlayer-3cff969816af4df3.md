---
uid: api.3cff969816af4df371a4533f289238b07351068750f9f5a1a4d0766c995c6a34
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.SetGameObjectLayer(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameLayer,System.String)"
source: xml
reviewed: 69d5b92ef6bc0c95b46e47e5e39fff1691e38a018b39a1ff6f817561f370d3eb
title: "SetGameObjectLayer"
kind: api
owners: [Inno.Editor.Scene]
apiSurface: editor-script
apiScope: Editor
---

Changes the layer of a live GameObject and records the two stable numeric layer slots.

**Parameter `gameObject`:** The live GameObject whose layer should change.

**Parameter `layer`:** The requested project layer slot.

**Parameter `historyName`:** The user-facing history entry name.

**Exception `T:System.ArgumentNullException`:** Thrown when `gameObject` is `null`.

**Exception `T:System.ArgumentException`:** Thrown when `historyName` is empty.
