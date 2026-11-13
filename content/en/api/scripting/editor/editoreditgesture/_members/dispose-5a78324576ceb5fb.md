---
uid: api.5a78324576ceb5fb211c175ab7e0f4779136709a8c7990de25022abb8cadac00
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.Dispose"
source: xml
reviewed: ba2162315e28a426e037efdcd50e7983e33377884c0615da490a6147d1f4016f
title: "Dispose"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Cancels an unfinished gesture and releases its ownership only after rollback succeeds.

**Exception `T:System.InvalidOperationException`:** Rollback is blocked or a nested transaction remains active.
