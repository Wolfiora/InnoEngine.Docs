---
uid: api.edfc3e6146b0f00956bbcd6f1978017715460646f6283bdbcd7d9870794dcb76
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiFontScope.Dispose"
source: xml
reviewed: 65eda26cd0e8fed8069f35481d07361646bac2403ea60cc1ba246e0e404545a2
title: "ImGuiFontScope.Dispose"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Restores the preceding font after validating scope order; default and retired scopes are inert.

**Exception `T:System.InvalidOperationException`:** The scope is used in another context, frame or stack position.
