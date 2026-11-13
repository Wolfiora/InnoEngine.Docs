---
uid: api.02918751a9307dfed7a23f2c9e960818477a779e1c49e5d11545e28423a32e5f
symbol: "scripting:Inno.Editor.ImGui:F:InnoEditor.ImGui.ImGuiTabBarFlags.NoCloseWithMiddleMouseButton"
source: xml
reviewed: 53fa92c9ccc7b02d4bc5210c9245ce7fdb31c2fcf598c68d6bf2207ff59fe1bf
title: "NoCloseWithMiddleMouseButton"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Disable behavior of closing tabs (that are submitted with p\_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) \*p\_open = false.
