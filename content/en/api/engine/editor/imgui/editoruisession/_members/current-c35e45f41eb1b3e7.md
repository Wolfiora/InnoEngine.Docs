---
uid: api.c35e45f41eb1b3e768481a3f0d003b33f2e72070c8bdf711110664c799014887
symbol: "engine:Inno.Editor.ImGui:P:Inno.Editor.ImGui.EditorUiSession.current"
source: xml
reviewed: 9078a23f9e7b2a85ed7b85661ac0da0157c88dc2482afc95590d20de73f4e7a6
title: "current"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Gets the current synchronous drawing scope; this accessor never creates or owns a session.

**Exception `T:System.InvalidOperationException`:** No UI drawing scope is active on the calling thread.
