---
uid: api.e9bf0765a6ef8b04875825bb49b1a59998bddabfb37a1ae5a9a4d636ff031feb
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.HeaderSurface(System.String,System.Action,System.Boolean)"
source: xml
reviewed: d7da5b95dcbdedf2c07da776c034f15998d2f6a255438f7254775a81afe9c30f
title: "ImGuiWidget.HeaderSurface"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a square-cornered editor header surface using the shared target-header palette, border, and padding.

## Parameters

**Parameter `id`:** Stable identifier used by ImGui to track the header region.

**Parameter `drawContent`:** Callback that draws the complete header content.

**Parameter `spanWindowPadding`:** Whether the header should extend through the current parent window padding to both edges.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawContent` is `null`.
