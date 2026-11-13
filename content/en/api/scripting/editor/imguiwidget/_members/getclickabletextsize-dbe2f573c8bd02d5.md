---
uid: api.dbe2f573c8bd02d56ef5b3f2c61754ea2fd842d71f9bdc42c184791281f912eb
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2)"
source: xml
reviewed: 6a2adea89d5f9d1e0e531bc4ffc4c631f1fa55e6350cfc1a3726d75f2832d3b1
title: "GetClickableTextSize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Calculates a clickable text area from visible text and requested inner padding.

**Parameter `text`:** Visible text whose dimensions determine the content size.

**Parameter `padding`:** Horizontal and vertical padding surrounding the text.

**Returns:** The complete transparent interaction area size.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `padding` is negative.
