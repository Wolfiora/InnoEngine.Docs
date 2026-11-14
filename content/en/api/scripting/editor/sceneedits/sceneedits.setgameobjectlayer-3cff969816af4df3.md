---
uid: api.3cff969816af4df371a4533f289238b07351068750f9f5a1a4d0766c995c6a34
symbol: "scripting:Inno.Editor.Scene:M:InnoEditor.Scene.SceneEdits.SetGameObjectLayer(InnoEngine.Scene.GameObject,InnoEngine.Scene.GameLayer,System.String)"
source: xml
reviewed: 3c8338a633bda0e54aa82b880fb81b5f35744a8ed34bd871f1d7cbdfcac607b1
title: "SceneEdits.SetGameObjectLayer"
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
