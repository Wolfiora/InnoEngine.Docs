---
uid: api.ff083db59d5be924d9cd817f1248ecf7f38494056c82868d0f3f05a5ada64710
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single)"
source: xml
reviewed: 61757f75540a4b09f66cf2d97ed66c37e7a97c05c6322b0e661702ce2c12912d
title: "ImGuiWidget.BeginSearchPopup"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Begins a popup and draws its focused search field.

## Parameters

**Parameter `id`:** The popup identifier previously supplied to ImGui.

**Parameter `query`:** The mutable search query.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The search field width, or a negative value to use the editor default.

## Returns

`true` when popup content should be drawn; otherwise, `false`.
