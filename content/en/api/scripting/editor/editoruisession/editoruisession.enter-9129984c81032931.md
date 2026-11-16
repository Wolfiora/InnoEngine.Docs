---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.9129984c81032931af61576761b2c5b13651781628f9015d028f701c56b9d19f
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorUiSession.Enter
title: EditorUiSession.Enter
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 1f7af84f7d091e767e0aa3915dff067acf1a3c45a866e642a0ab2286c4622800
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

An owner-thread scope that must be released in reverse activation order.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The session has retired.

**Exception `T:System.InvalidOperationException`:** The caller is not the owner thread.
