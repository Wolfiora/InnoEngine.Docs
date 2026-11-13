---
uid: api.4b01ea381a407438eead1a4a2a635fbd84444ba466e37ef6aa41eaaabf3fe6a0
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameScene.FindObjectWithTag(System.String)"
source: xml
reviewed: 4036b903bc2466ccf80ef4e82525307edcb329bf039efc81dfe25fe102499a82
title: "FindObjectWithTag"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Finds the first game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** The first match, or `null` when no object matches.

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.
