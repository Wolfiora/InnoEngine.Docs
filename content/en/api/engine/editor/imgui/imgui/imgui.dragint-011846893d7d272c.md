---
uid: api.011846893d7d272ca3d79115a7588135b99160580313dcd03cbd39384818e418
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.DragInt(System.String,System.Int32@,System.Single,System.Int32,System.Int32,System.String,Inno.Editor.ImGui.ImGuiSliderFlags)"
source: xml
reviewed: b65ddb8677bbdf7e330c8dc358633432ceb199509d1e61d3d47ab48649d06b37
title: "ImGui.DragInt"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Edits an integer by pointer drag with explicit speed and optional bounds.

## Parameters

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `value`:** The caller-owned value updated only after an accepted edit.

**Parameter `speed`:** The pointer movement multiplier.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `format`:** The numeric display format.

**Parameter `flags`:** The explicit control and interaction options.

## Returns

True when the documented control event or condition is present; otherwise false.
