---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bc654e033608344f2209897debd87f89183088d9543dca361f216baebb3e6beb
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorUiSession.Enter
title: EditorUiSession.Enter
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: 3a460a86fb252c036704409d2d32b2536b2b4ebc86cf6862c2303432c54803b3
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
