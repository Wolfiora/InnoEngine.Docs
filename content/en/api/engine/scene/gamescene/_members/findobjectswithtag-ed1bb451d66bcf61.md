---
uid: api.ed1bb451d66bcf61b6b5db2b00427db2122f6ebf40bf9895d0660108cc567a61
symbol: "engine:Inno.Scene:M:Inno.Scene.GameScene.FindObjectsWithTag(System.String)"
source: xml
reviewed: e1a4a5a37008e5f5252c24b06a23557f38fb3a7162f93c49990b56b4bb4d07c7
title: "FindObjectsWithTag"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Finds every game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** A stable snapshot containing every matching game object.

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.
