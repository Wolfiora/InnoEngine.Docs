---
uid: api.c26f2fb089f1bd4e3d4905ae80815776f5fa08c9d9a86d34e495088d371a0793
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorStyleMetrics.SetCompactMode(System.Boolean)"
source: xml
reviewed: 0f2b21c4f46d4d96dbdeca32fd9b88fa7fa2c1842cd8d323b7d56a2094046276
title: "SetCompactMode"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Requests comfortable or compact density without changing an active session frame.

**Parameter `value`:** `true` for compact density.

**Returns:** `true` when the requested density changed; owned drawing applies it at the next frame preparation.

**Exception `T:System.ObjectDisposedException`:** The owning session has retired or is no longer available.

**Exception `T:System.InvalidOperationException`:** The caller is not the owning session's thread.
