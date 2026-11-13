---
uid: api.e9bf0765a6ef8b04875825bb49b1a59998bddabfb37a1ae5a9a4d636ff031feb
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean)"
source: xml
reviewed: 9d8513ecb99dffe10d4f9aa92377074ceae43f294aa6a37e83c1d9154e7c40c5
title: "HeaderSurface"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a square-cornered editor header surface using the shared target-header palette, border, and padding.

**Parameter `id`:** Stable identifier used by ImGui to track the header region.

**Parameter `drawContent`:** Callback that draws the complete header content.

**Parameter `spanWindowPadding`:** Whether the header should extend through the current parent window padding to both edges.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
