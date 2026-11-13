---
uid: api.ed1bb451d66bcf61b6b5db2b00427db2122f6ebf40bf9895d0660108cc567a61
symbol: "engine:Inno.Scene:M:Inno.Scene.GameScene.FindObjectsWithTag(System.String)"
source: xml
reviewed: 07d4692899d61a2efcfb0c50bdea0dc6b8fa424a8f01ebd66487f01a6d2a08ce
title: "FindObjectsWithTag"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Finds every game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** A stable snapshot containing every matching game object.

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.
