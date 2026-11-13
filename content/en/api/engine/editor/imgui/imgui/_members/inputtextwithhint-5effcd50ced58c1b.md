---
uid: api.5effcd50ced58c1be92ba72e5cd4e4d027036a95d44767d36f2b69597d1411af
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.InputTextWithHint(System.String,System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags)"
source: xml
reviewed: b7aed1584a2bc1342b0d4762553a8cb5c258f57a979f454ff645ba7d81d94e3c
title: "InputTextWithHint"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws and edits a bounded UTF-8 text value with placeholder text.

**Parameter `label`:** The control label.

**Parameter `hint`:** The placeholder shown while the value is empty.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

**Returns:** `true` when the control reports an edit or submit event.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.
