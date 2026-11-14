---
uid: api.d3742a3f7dd0ea66eb3c6264cad5329431a14e00b801a90237b9e96b239c2539
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiSliderFlags.ClampZeroRange"
source: xml
reviewed: 56f650a08319541dc6501aff6cfcd21c48c04cdfb82668fce7084e69d550215b
title: "ImGuiSliderFlags.ClampZeroRange"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Clamp even if min==max==0.0f. Otherwise due to legacy reason DragXXX functions don't clamp with those values. When your clamping limits are dynamic you almost always want to use it.
