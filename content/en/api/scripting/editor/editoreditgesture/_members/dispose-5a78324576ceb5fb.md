---
uid: api.5a78324576ceb5fb211c175ab7e0f4779136709a8c7990de25022abb8cadac00
symbol: "scripting:Inno.Editor.Interactions:M:InnoEditor.Interactions.EditorEditGesture.Dispose"
source: xml
reviewed: a833112261f3f8b2c0621309cfbd7dee273e5f771a42c0893f85335476787bc4
title: "Dispose"
kind: api
owners: [Inno.Editor.Interactions]
apiSurface: editor-script
apiScope: Editor
---

Cancels an unfinished gesture and releases its ownership only after rollback succeeds.

**Exception `T:System.InvalidOperationException`:** Rollback is blocked or a nested transaction remains active.
