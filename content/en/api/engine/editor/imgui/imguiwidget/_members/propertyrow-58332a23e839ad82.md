---
uid: api.58332a23e839ad827e89ac55ff750169cb1021d877f73bacc7a0b5edca60cd35
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.String,System.Action,System.String)"
source: xml
reviewed: 40a0b15db58933a5d895b1b97ec9d7d72c58e0a184faa716aba486a67bdb5dc6
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
