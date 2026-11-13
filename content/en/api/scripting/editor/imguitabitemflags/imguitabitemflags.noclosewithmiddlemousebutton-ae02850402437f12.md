---
uid: api.ae02850402437f12eb3e8a49af4c453a24837cacc9553040ba578e6484a23329
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiTabItemFlags.NoCloseWithMiddleMouseButton"
source: xml
reviewed: 862b1e4bb663687a11e0dfa2f899a93d44f7cfeaa11ab38f05360017b83671ed
title: "ImGuiTabItemFlags.NoCloseWithMiddleMouseButton"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Disable behavior of closing tabs (that are submitted with p\_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) \*p\_open = false.
