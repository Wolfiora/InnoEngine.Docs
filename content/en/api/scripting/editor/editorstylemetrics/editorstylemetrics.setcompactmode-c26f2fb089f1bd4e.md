---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c26f2fb089f1bd4e3d4905ae80815776f5fa08c9d9a86d34e495088d371a0793
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorStyleMetrics.SetCompactMode(System.Boolean)
title: EditorStyleMetrics.SetCompactMode
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 1ef594a8dbfde085f965302ff16182d370d167530fac1829ee629ce5934a2ec8
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `value`:** `true` for compact density.

## Returns

`true` when the requested density changed; owned drawing applies it at the next frame preparation.

## Exceptions

**Exception `T:System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Exception `T:System.InvalidOperationException`:** The caller is not the owning session's thread.
