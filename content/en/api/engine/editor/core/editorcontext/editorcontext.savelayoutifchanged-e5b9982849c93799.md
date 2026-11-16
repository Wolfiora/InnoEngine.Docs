---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e5b9982849c9379944dec9f2c72d0a7b4bbebdec28542f1988ab253c3f091a0f
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.SaveLayoutIfChanged
title: EditorContext.SaveLayoutIfChanged
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
reviewed: e8cf739a854223f3c718667c36b90931616a7939bbfc3f2450aae3f7a0897055
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
