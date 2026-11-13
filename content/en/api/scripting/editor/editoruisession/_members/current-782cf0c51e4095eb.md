---
uid: api.782cf0c51e4095eb21f305d845263fa66692fd5e85c86dee7af4a448436bc21c
symbol: "scripting:Inno.Editor.ImGui:P:InnoEditor.ImGui.EditorUiSession.current"
source: xml
reviewed: 619eec39769f092267a591a113d14afa267abc66c1d9a114ab3bb4d80203cbbd
title: "current"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Gets the current synchronous drawing scope; this accessor never creates or owns a session.

**Exception `T:System.InvalidOperationException`:** No UI drawing scope is active on the calling thread.
