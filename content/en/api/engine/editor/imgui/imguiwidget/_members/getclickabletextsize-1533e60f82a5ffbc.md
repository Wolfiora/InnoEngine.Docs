---
uid: api.1533e60f82a5ffbc29a43410ca3de865f463ec72f39e439babd84af5d652359f
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetClickableTextSize(System.String,System.Numerics.Vector2)"
source: xml
reviewed: bbfe903aa402cb0d17ebf6504174fcb2b240254292d04240f709e6dbacbe3b1f
title: "GetClickableTextSize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Calculates a clickable text area from visible text and requested inner padding.

**Parameter `text`:** Visible text whose dimensions determine the content size.

**Parameter `padding`:** Horizontal and vertical padding surrounding the text.

**Returns:** The complete transparent interaction area size.

**Exception `T:System.ArgumentNullException`:** Thrown when `text` is `null`.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when either component of `padding` is negative.
