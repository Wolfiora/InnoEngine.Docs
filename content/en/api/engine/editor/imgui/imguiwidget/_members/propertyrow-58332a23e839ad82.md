---
uid: api.58332a23e839ad827e89ac55ff750169cb1021d877f73bacc7a0b5edca60cd35
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.String,System.Action,System.String)"
source: xml
reviewed: 0b1d3b6e2db40cef085b57a5539c622f4f7defc6e163382aafd69f4590133213
title: "PropertyRow"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a two-column property row with a stable internal identifier.

**Parameter `id`:** Stable row identifier.

**Parameter `label`:** Human-readable property label.

**Parameter `drawValue`:** Value control callback.

**Parameter `tooltip`:** Optional hover help displayed from the property label.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `label` or `drawValue` is `null`.
