---
uid: api.dbe2f573c8bd02d56ef5b3f2c61754ea2fd842d71f9bdc42c184791281f912eb
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2)"
source: xml
reviewed: 549b531ef2c6103cd1209c70c0ab2197392bb2211745053145959f7042c6ef12
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
