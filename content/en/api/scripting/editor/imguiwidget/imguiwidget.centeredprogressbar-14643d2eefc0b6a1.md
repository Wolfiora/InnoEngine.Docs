---
uid: api.14643d2eefc0b6a1479c2e0672190ff95079715f74fb55c66940d20d4a853c69
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.CenteredProgressBar(System.Single,System.Numerics.Vector2,System.String)"
source: xml
reviewed: 1d34bae0ace01bfcc76f0a8d4ef80d3a6a02806ecdbe7d18f21ab99ef24c93da
title: "ImGuiWidget.CenteredProgressBar"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a progress bar whose overlay remains centered over the complete bar.

## Parameters

**Parameter `fraction`:** The completed fraction rendered by the progress bar.

**Parameter `size`:** The requested ImGui progress-bar size.

**Parameter `overlay`:** The text drawn at the geometric center of the complete progress bar.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `overlay` is `null`.
