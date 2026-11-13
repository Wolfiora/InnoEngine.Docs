---
uid: api.189bc122d3ce1e493b6f3338652f55ffc677219195a7a73f465820a2a3febf35
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.IsAnyPopupOpen"
source: xml
reviewed: b112a39cd68fc08d797d72f0499988988f052f71dbefa719ed8598e7c64ec9d6
title: "IsAnyPopupOpen"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Reads whether an open popup or modal currently prevents underlying canvas and list input.

**Returns:** True when any popup is open in this native context, independently of its identifier or nesting.

**Exception `T:System.InvalidOperationException`:** No valid drawing session or native frame is active.
