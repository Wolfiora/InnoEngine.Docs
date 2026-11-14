---
uid: api.9129984c81032931af61576761b2c5b13651781628f9015d028f701c56b9d19f
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.EditorUiSession.Enter"
source: xml
reviewed: 20651b83acab7e307a7d69b440ade3aa450a1982155a808028294b0033e96709
title: "EditorUiSession.Enter"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Activates this session for a synchronous callback while preserving the enclosing scope.

**Returns:** An owner-thread scope that must be released in reverse activation order.

**Exception `T:System.ObjectDisposedException`:** The session has retired.

**Exception `T:System.InvalidOperationException`:** The caller is not the owner thread.
