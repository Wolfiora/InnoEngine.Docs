---
uid: api.4abf8001345c2b427ea2e032f2f77d4eba90cc2415eeafffd199f7bcbe4f84f9
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiTabItemFlags.NoCloseWithMiddleMouseButton"
source: xml
reviewed: 867373f7327549250871f5af48b87710e16ccaad30e72680b02621f0288d66f5
title: "NoCloseWithMiddleMouseButton"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Disable behavior of closing tabs (that are submitted with p\_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) \*p\_open = false.
