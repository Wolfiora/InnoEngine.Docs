---
uid: api.c35e45f41eb1b3e768481a3f0d003b33f2e72070c8bdf711110664c799014887
symbol: "engine:Inno.Editor.ImGui:P:Inno.Editor.ImGui.EditorUiSession.current"
source: xml
reviewed: 5d439871406a013b16f75c6156ebfa5c8884c153bc445a44f2987b1862f67347
title: "EditorUiSession.current"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Gets the current synchronous drawing scope; this accessor never creates or owns a session.

**Exception `T:System.InvalidOperationException`:** No UI drawing scope is active on the calling thread.
