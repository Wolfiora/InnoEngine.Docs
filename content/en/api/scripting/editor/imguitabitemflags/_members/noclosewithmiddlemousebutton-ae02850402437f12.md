---
uid: api.ae02850402437f12eb3e8a49af4c453a24837cacc9553040ba578e6484a23329
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiTabItemFlags.NoCloseWithMiddleMouseButton"
source: xml
reviewed: 00f9eb2f04e3cefdf7d8c8fb68ca528337a9a45c9099718cc654ceafa94afcf8
title: "NoCloseWithMiddleMouseButton"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Disable behavior of closing tabs (that are submitted with p\_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) \*p\_open = false.
