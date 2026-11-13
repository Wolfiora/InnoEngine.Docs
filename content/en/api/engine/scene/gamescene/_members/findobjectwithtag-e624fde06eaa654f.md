---
uid: api.e624fde06eaa654fda3650e82a52163622660d64c600289040b0faffcd8fe222
symbol: "engine:Inno.Scene:M:Inno.Scene.GameScene.FindObjectWithTag(System.String)"
source: xml
reviewed: b07e52786c071263df956f011a0ee12e740e11e1467534cdd6f09cce1b14db9f
title: "FindObjectWithTag"
kind: api
owners: [Inno.Scene]
apiSurface: source-clr
---

Finds the first game object with an ordinally matching tag in scene storage order.

**Parameter `tag`:** Tag to find.

**Returns:** The first match, or `null` when no object matches.

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or contains only white-space characters.
