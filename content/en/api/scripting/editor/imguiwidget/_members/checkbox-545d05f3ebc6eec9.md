---
uid: api.545d05f3ebc6eec93bf6d96ef280335398ddf5ac71790732b581d5407de758d0
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.Checkbox(System.String,System.Boolean@,System.String)"
source: xml
reviewed: 9171489b4cca0dba3b1b5d5a7ca80e2e280d3c667c95751a4c5ca0268b3eb282
title: "Checkbox"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws a standard checkbox with the shared editor tooltip behavior.

**Parameter `label`:** Visible label and stable ImGui identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

**Returns:** `true` when the value changed.

**Exception `T:System.ArgumentException`:** Thrown when `label` is empty or whitespace.
