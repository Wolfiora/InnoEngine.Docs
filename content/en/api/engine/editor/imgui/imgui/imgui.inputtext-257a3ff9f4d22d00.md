---
uid: api.257a3ff9f4d22d006583bc1d77e5544615376718283e5363e2aa242421dac348
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.InputText(System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags)"
source: xml
reviewed: 01b316e29393bf92a19d1923502e3690c9a69e34d4b9c80c6ebcd65b1f43f992
title: "ImGui.InputText"
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
