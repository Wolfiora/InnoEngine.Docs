---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.af604b5d5c58a56937427641fa98a3cfc9307e1dbc2391b3784840791196932c
symbol: scripting:Inno.Editor.Core:M:InnoEditor.Core.EditorContext.SaveLayoutIfChanged
title: EditorContext.SaveLayoutIfChanged
kind: api
owners:
- Inno.Editor.Core
apiSurface: editor-script
reviewed: 2c132666630734dbd5abc1d00fd739d03a33b88cbdbfd41b9443065958ebf1b8
apiScope: Editor

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Returns

`true` when a changed document was written.

## Exceptions

**Exception `T:System.IO.IOException`:** Thrown when the layout document cannot be written atomically.

**Exception `T:System.UnauthorizedAccessException`:** Thrown when the layout document is inaccessible.
