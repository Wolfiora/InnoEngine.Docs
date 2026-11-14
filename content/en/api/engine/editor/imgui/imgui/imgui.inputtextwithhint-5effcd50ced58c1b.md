---
uid: api.5effcd50ced58c1be92ba72e5cd4e4d027036a95d44767d36f2b69597d1411af
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.InputTextWithHint(System.String,System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags)"
source: xml
reviewed: e85fdef310b7137b16ba2a050a416d7da04d0988c4bce0e57a50e27079af97fa
title: "ImGui.InputTextWithHint"
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
