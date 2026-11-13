---
uid: api.8eb7db22321c48b727f01f27f371849cf22430434c754959bedff6e35712d52e
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiTableFlags.PreciseWidths"
source: xml
reviewed: 1971717db4ef376d6d254409b721e90fae69426a6f58b62a1c1585b18c31a0fc
title: "PreciseWidths"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Disable distributing remainder width to stretched columns (width allocation on a 100-wide table with 3 columns: Without this flag: 33,33,34. With this flag: 33,33,33). With larger number of columns, resizing will appear to be less smooth.
