---
uid: api.cac0f35842d103f1f1a19c7daed1dd641b2ab6343cf90788a9236db17bc452b4
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.Checkbox(System.String,System.Boolean@,System.String)"
source: xml
reviewed: d972f4f85bc93a40239879cc3082bcc0df85891af9f8e7db0a9c1af3349bd7a7
title: "Checkbox"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws a standard checkbox with the shared editor tooltip behavior.

**Parameter `label`:** Visible label and stable ImGui identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

**Returns:** `true` when the value changed.

**Exception `T:System.ArgumentException`:** Thrown when `label` is empty or whitespace.
