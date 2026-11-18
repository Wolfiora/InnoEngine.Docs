---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.af604b5d5c58a56937427641fa98a3cfc9307e1dbc2391b3784840791196932c
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SaveLayoutIfChanged
title: EditorContext.SaveLayoutIfChanged
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
sourceFingerprint: f96b66b25858b8bc89176e634ff4673747a3ea8977584fce8f577a281e4fbe88
apiScope: Editor
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
