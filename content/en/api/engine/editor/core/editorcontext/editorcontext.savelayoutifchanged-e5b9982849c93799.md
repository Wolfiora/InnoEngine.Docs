---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e5b9982849c9379944dec9f2c72d0a7b4bbebdec28542f1988ab253c3f091a0f
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.SaveLayoutIfChanged
title: EditorContext.SaveLayoutIfChanged
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: fe68d52df86cc7944542f8363e6cd64f944daa72768ba72d7888ca780c015665
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

`true` when a changed document was written.

## Exceptions

**Exception `T:System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.
