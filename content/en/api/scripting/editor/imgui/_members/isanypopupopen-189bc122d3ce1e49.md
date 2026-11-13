---
uid: api.189bc122d3ce1e493b6f3338652f55ffc677219195a7a73f465820a2a3febf35
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.IsAnyPopupOpen"
source: xml
reviewed: 7ac9404fc1f9c9860c260d4fc76f6ae1762bccbfd05971d75708fa758e074bd0
title: "IsAnyPopupOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Reads whether an open popup or modal currently prevents underlying canvas and list input.

**Returns:** True when any popup is open in this native context, independently of its identifier or nesting.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
