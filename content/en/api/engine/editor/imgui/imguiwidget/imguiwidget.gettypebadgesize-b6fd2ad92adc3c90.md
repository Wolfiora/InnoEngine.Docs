---
uid: api.b6fd2ad92adc3c909ffb50695f6ee6013855353ccc354a68180e3c80d866de08
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.GetTypeBadgeSize(System.String)"
source: xml
reviewed: 8e8ec4c384bfa6caf608fe49b33c55ddd9591f42775b10d3b702ff06ef27457c
title: "ImGuiWidget.GetTypeBadgeSize"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Gets the layout size of a compact outlined type badge.

## Parameters

**Parameter `label`:** Visible type name.

## Returns

The size reserved by `M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.TypeBadge(System.String,System.Numerics.Vector4,System.String)`.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `label` is `null`.
