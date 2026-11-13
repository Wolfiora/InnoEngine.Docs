---
uid: api.ff083db59d5be924d9cd817f1248ecf7f38494056c82868d0f3f05a5ada64710
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single)"
source: xml
reviewed: fc44fd3998cdbe185a76e487360fcfc429ebe076bac24e29193ad8dabf58d60e
title: "BeginSearchPopup"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Begins a popup and draws its focused search field.

**Parameter `id`:** The popup identifier previously supplied to ImGui.

**Parameter `query`:** The mutable search query.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The search field width, or a negative value to use the editor default.

**Returns:** `true` when popup content should be drawn; otherwise, `false`.
