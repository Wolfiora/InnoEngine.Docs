---
uid: api.09c81dd60ada62ca96ed2c135444734063314fda53659ef4ee412a587371d90d
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.DragInt(System.String,System.Int32@,System.Single,System.Int32,System.Int32,System.String,InnoEditor.ImGui.ImGuiSliderFlags)"
source: xml
reviewed: f956d1f8ba65b541732247c0e6ade2039dcaf499326c001991fba5f2fc3347c2
title: "ImGui.DragInt"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
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
