---
uid: api.ec5e3f060e250fcda1ba117be620298d5f154604bebe2de03cd3df7fb13e2e36
symbol: "engine:Inno.Editor.ImGui:F:Inno.Editor.ImGui.ImGuiTabBarFlags.NoCloseWithMiddleMouseButton"
source: xml
reviewed: e0498f66819b3879cf06e6fe3a7ba3c8264bd497ab7318578f62abb45ec8f416
title: "NoCloseWithMiddleMouseButton"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Disable behavior of closing tabs (that are submitted with p\_open != NULL) with middle mouse button. You may handle this behavior manually on user's side with if (IsItemHovered() & & IsMouseClicked(2)) \*p\_open = false.
