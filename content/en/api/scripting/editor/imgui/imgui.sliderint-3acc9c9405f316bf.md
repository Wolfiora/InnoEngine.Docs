---
uid: api.3acc9c9405f316bfad69ba42cd282ab772ca690877c081612e6d99eb2b7c14ba
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.SliderInt(System.String,System.Int32@,System.Int32,System.Int32,System.String,InnoEditor.ImGui.ImGuiSliderFlags)"
source: xml
reviewed: a0c6ad967cb3f388cb06158a6fba11e98943feec3cdfc8430b805d9de77e9952
title: "ImGui.SliderInt"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Edits an integer within explicit inclusive bounds.

## Parameters

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `value`:** The caller-owned value updated only after an accepted edit.

**Parameter `minimum`:** The inclusive lower bound or upper-left corner.

**Parameter `maximum`:** The inclusive upper bound or lower-right corner.

**Parameter `format`:** The numeric display format.

**Parameter `flags`:** The explicit control and interaction options.

## Returns

True when the documented control event or condition is present; otherwise false.
