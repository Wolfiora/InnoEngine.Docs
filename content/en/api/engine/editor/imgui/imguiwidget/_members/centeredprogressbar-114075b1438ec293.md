---
uid: api.114075b1438ec2930efe55240bc28b582687578cd70cb7887474ddc527abf662
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CenteredProgressBar(System.Single,System.Numerics.Vector2,System.String)"
source: xml
reviewed: c0173e71bbd1b12d84ac7a56946babfb6fc760ac78751f2914981502133c436b
title: "CenteredProgressBar"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a progress bar whose overlay remains centered over the complete bar.

**Parameter `fraction`:** The completed fraction rendered by the progress bar.

**Parameter `size`:** The requested ImGui progress-bar size.

**Parameter `overlay`:** The text drawn at the geometric center of the complete progress bar.

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.
