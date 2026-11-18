---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e5b9982849c9379944dec9f2c72d0a7b4bbebdec28542f1988ab253c3f091a0f
symbol: engine:Inno.Editor.Core:M:Inno.Editor.Core.EditorContext.SaveLayoutIfChanged
title: EditorContext.SaveLayoutIfChanged
kind: api
owners:
- Inno.Editor.Core
apiSurface: source-clr
sourceFingerprint: 2da9949d82797a42a9dc972b6936b3d2f686d5e9dc4d6c45e36ec2110e908edd
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
