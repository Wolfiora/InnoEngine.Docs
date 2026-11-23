---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fd7a1ac85a3780d175745d3b2eaa303e49b50eeae389a438c5460b3f66a46f3b
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorUISession.Enter
title: EditorUISession.Enter
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 6debae3264d7876929c66542d50ee0fffd06ed644839756ad66201927fff5b43
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
