---
uid: api.d79e3e7cce689c89e2f91b5eef33db58ffee71b693492313e8485428566b283f
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.IsAnyPopupOpen"
source: xml
reviewed: 7d7550915435aa37eb11d5c3bc8ec1616304d9e126f9878d6858329ba6e34671
title: "ImGui.IsAnyPopupOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Reads whether an open popup or modal currently prevents underlying canvas and list input.

## Returns

True when any popup is open in this native context, independently of its identifier or nesting.

## Exceptions

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
