---
uid: api.14643d2eefc0b6a1479c2e0672190ff95079715f74fb55c66940d20d4a853c69
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CenteredProgressBar(System.Single,System.Numerics.Vector2,System.String)"
source: xml
reviewed: 203780ece5f0187f8a059c61a55c16a3edd933177ff04542fe5588c6de970164
title: "CenteredProgressBar"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a progress bar whose overlay remains centered over the complete bar.

**Parameter `fraction`:** The completed fraction rendered by the progress bar.

**Parameter `size`:** The requested ImGui progress-bar size.

**Parameter `overlay`:** The text drawn at the geometric center of the complete progress bar.

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.
