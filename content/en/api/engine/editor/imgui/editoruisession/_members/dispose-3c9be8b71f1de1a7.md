---
uid: api.3c9be8b71f1de1a71b08850fb4d47a8beed4d6dc6b21260f1a5492bde3ff0459
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.EditorUiSession.Dispose"
source: xml
reviewed: a23bff3703685588b40ad1a506f46a6e4946aa965cdef98ef554bc0aa248a9ba
title: "Dispose"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Releases presentation state after all drawing scopes and domain edit gestures have ended.

**Exception `T:System.InvalidOperationException`:** A drawing scope is active or the caller is not the owner thread.
