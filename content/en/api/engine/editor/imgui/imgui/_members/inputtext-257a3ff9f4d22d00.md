---
uid: api.257a3ff9f4d22d006583bc1d77e5544615376718283e5363e2aa242421dac348
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.InputText(System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags)"
source: xml
reviewed: 365920aab2647946fa5804ec39b4724b7dde97b7b31cc40c6f2e5c6e470d1bfa
title: "InputText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Draws and edits a bounded UTF-8 text value.

**Parameter `label`:** The control label.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

**Returns:** `true` when the control reports an edit or submit event.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.
