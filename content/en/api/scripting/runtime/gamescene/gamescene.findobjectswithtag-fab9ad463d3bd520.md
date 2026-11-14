---
uid: api.fab9ad463d3bd5202d4e85b9f5fbcb656b4e5ffd60fefc0ebeced60f471af4ba
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameScene.FindObjectsWithTag(System.String)"
source: xml
reviewed: 807c41c9f1f901967f8378a0c4f9a03c4d67f7b226f968468c03154d6c4ff790
title: "GameScene.FindObjectsWithTag"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Finds every game object with an ordinally matching tag in scene storage order.

## Parameters

**Parameter `tag`:** Tag to find.

## Returns

A stable snapshot containing every matching game object.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.
