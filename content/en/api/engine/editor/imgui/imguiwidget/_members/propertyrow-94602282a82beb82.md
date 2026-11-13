---
uid: api.94602282a82beb8239b884229465d23c0235ebc66407f2bd6308ad86ab05fab7
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PropertyRow(System.String,System.Action,System.Action)"
source: xml
reviewed: 1ea3c9756f5fbcc8af66c90e87c5697376a6c8db90595dcae1db2cc39d197999
title: "PropertyRow"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a two-column property row whose label is supplied by a custom presentation callback.

**Parameter `id`:** Stable row identifier.

**Parameter `drawLabel`:** Label presentation callback. It may wrap or draw badges inside the label column.

**Parameter `drawValue`:** Value control callback.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawLabel` or `drawValue` is `null`.
