---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.bc654e033608344f2209897debd87f89183088d9543dca361f216baebb3e6beb
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorUiSession.Enter
title: EditorUiSession.Enter
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: 7462fbf30cc35cfc6609cabd71fa33ac5067d0b9f80c24204ea5033639b10820
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
