---
uid: api.d79e3e7cce689c89e2f91b5eef33db58ffee71b693492313e8485428566b283f
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.IsAnyPopupOpen"
source: xml
reviewed: 30b09ca5c0404502c55d9034a0736d374b60485f6d1e374b03ff9ff4eea0590b
title: "IsAnyPopupOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Reads whether an open popup or modal currently prevents underlying canvas and list input.

**Returns:** True when any popup is open in this native context, independently of its identifier or nesting.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
