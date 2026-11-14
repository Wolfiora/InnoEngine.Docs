---
uid: api.c9df05aa3757173097a743f8561a71def462b3025f132a7e10d39a7b4f88b532
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MetadataValue(System.String,System.Action,System.String)"
source: xml
reviewed: f64789cb21a40feb4a1d411128864237ed8171467832abd4dd920c4a6d95eec7
title: "ImGuiWidget.MetadataValue"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a subdued metadata prefix followed by an interactive value on the same line.

## Parameters

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `drawValue`:** Callback that draws the value or action following the metadata.

**Parameter `tooltip`:** Optional explanation displayed while the metadata is hovered.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `metadata` or `drawValue` is `null`.
