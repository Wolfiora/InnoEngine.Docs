---
uid: api.07358afb18d961d1edcf7571a19bb910910b2b7e32bc3cb16a36abfaabd6b926
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MetadataValue(System.String,System.String,System.String)"
source: xml
reviewed: 5942812f5a3af272b87502f1c43cf16fe9221699c18dfe07574728d7511d9ff5
title: "ImGuiWidget.MetadataValue"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws one wrapped, subdued value whose metadata and content remain in the value column.

## Parameters

**Parameter `metadata`:** Short contextual text such as a declared value type.

**Parameter `value`:** Literal value description shown after the metadata separator.

**Parameter `tooltip`:** Optional explanation displayed while the combined value is hovered.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `metadata` or `value` is `null`.
