---
uid: api.fab9ad463d3bd5202d4e85b9f5fbcb656b4e5ffd60fefc0ebeced60f471af4ba
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameScene.FindObjectsWithTag(System.String)"
source: xml
reviewed: 30e942ab1fffc515f9ec698bfa2112e7cebabb04c6cfa65522b901277cf61db6
title: "FindObjectsWithTag"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Finds every game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** A stable snapshot containing every matching game object.

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.
