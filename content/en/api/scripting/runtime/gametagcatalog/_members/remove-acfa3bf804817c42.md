---
uid: api.acfa3bf804817c42de697c5e8acd65a6d978c0cb9568eea1592998c8623e7263
symbol: "scripting:Inno.Scene:M:InnoEngine.Scene.GameTagCatalog.Remove(System.String)"
source: xml
reviewed: cce7e60ab7d3f23e8ea5d9039dd48280f50898623f0e60f5dd15af2f89d57fb1
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
