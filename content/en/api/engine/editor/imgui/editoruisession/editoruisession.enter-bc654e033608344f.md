---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bc654e033608344f2209897debd87f89183088d9543dca361f216baebb3e6beb
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorUiSession.Enter
title: EditorUiSession.Enter
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
reviewed: fa33976a4a45c3217da687851c91ca37ce99baa78d5dcfb027a3dff7aad5ae18

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Returns

An owner-thread scope that must be released in reverse activation order.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The session has retired.

**Exception `T:System.InvalidOperationException`:** The caller is not the owner thread.
