---
uid: api.acfa3bf804817c42de697c5e8acd65a6d978c0cb9568eea1592998c8623e7263
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameTagCatalog.Remove(System.String)"
source: xml
reviewed: 144c2049f3ed79b57f74e6b020c7632bdbe5b8fbc20ddacf93b1636d1a9687c1
title: "Remove"
kind: api
owners: [Inno.Scene]
apiSurface: editor-script
apiScope: Runtime
---

Removes one custom project tag definition without rewriting scene assignments.

**Parameter `tag`:** The custom tag to remove.

**Returns:** `true` when an existing definition was removed.

**Exception `T:System.ArgumentException`:** Thrown when `tag` is empty or invalid.
