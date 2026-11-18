---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9129984c81032931af61576761b2c5b13651781628f9015d028f701c56b9d19f
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorUiSession.Enter
title: EditorUiSession.Enter
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: e300fa688c0ebd73de1a1622e1f971c281aec03d53a34f66222e8a52ec6da9eb
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
