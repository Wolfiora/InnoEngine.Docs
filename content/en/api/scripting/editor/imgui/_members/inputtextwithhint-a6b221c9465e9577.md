---
uid: api.a6b221c9465e9577896774bc4d782b3dcdad9307e3c1143abc988bc49143ffea
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.InputTextWithHint(System.String,System.String,System.String@,System.Int32,InnoEditor.ImGui.ImGuiInputTextFlags)"
source: xml
reviewed: eb9cb01f959481b455de6baaddbe62eea1e1909d4a498994ceb1ac7b95647517
title: "InputTextWithHint"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws and edits a bounded UTF-8 text value with placeholder text.

**Parameter `label`:** The control label.

**Parameter `hint`:** The placeholder shown while the value is empty.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

**Returns:** `true` when the control reports an edit or submit event.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.
