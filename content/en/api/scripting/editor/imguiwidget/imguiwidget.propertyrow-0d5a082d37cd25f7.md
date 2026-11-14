---
uid: api.0d5a082d37cd25f7e0dbc025142fe181937e241828c56a7815c3bfbc6fc7ea82
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.PropertyRow(System.String,System.Action,System.Action)"
source: xml
reviewed: 881ddeec989390deb2be8ad984428f470d1749d3b7207cf21b6d45aeeb03ac97
title: "ImGuiWidget.PropertyRow"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a two-column property row whose label is supplied by a custom presentation callback.

**Parameter `id`:** Stable row identifier.

**Parameter `drawLabel`:** Label presentation callback. It may wrap or draw badges inside the label column.

**Parameter `drawValue`:** Value control callback.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty or whitespace.

**Exception `T:System.ArgumentNullException`:** Thrown when `drawLabel` or `drawValue` is `null`.
