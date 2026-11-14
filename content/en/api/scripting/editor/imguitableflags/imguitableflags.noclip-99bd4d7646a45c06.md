---
uid: api.99bd4d7646a45c06e88685522f9c5ba15623bc9757c240b0f1f5e875f9e3716f
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiTableFlags.NoClip"
source: xml
reviewed: 5de195a3aabc26843b09e44d65afac678fb0e298c05060d2ba2f7ee6456afb82
title: "ImGuiTableFlags.NoClip"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Disable clipping rectangle for every individual columns (reduce draw command count, items will be able to overflow into other columns). Generally incompatible with TableSetupScrollFreeze().
