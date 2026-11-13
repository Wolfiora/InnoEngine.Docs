---
uid: api.032d789021bb0f3876fc0b57a38e1fd3a0a57f628bf154e608a6c1c171a88075
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.MetadataValue(System.String,System.String,System.String)"
source: xml
reviewed: d1d11dee392e6021e7f8f829406bdf45905cc9d2b9baf8550d5ec516420388e2
title: "MetadataValue"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws one wrapped, subdued value whose metadata and content remain in the value column.

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `value`:** Literal value description shown after the metadata separator.

**Parameter `tooltip`:** Optional explanation displayed while the combined value is hovered.

**Exception `T:System.ArgumentNullException`:** Thrown when `metadata` or `value` is `null`.
