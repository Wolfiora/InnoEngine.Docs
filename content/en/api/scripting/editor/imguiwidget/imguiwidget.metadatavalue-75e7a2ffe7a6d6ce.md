---
uid: api.75e7a2ffe7a6d6ceb8e69915ed46c52678b30c6ea0687c90edada6423a171f6a
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.MetadataValue(System.String,System.Action,System.String)"
source: xml
reviewed: f4a6b582394f08576ceef07153a5de1b0f780489fa9b5d72aa277a5a6358c6f4
title: "ImGuiWidget.MetadataValue"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a subdued metadata prefix followed by an interactive value on the same line.

## Parameters

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `drawValue`:** Callback that draws the value or action following the metadata.

**Parameter `tooltip`:** Optional explanation displayed while the metadata is hovered.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `metadata` or `drawValue` is `null`.
