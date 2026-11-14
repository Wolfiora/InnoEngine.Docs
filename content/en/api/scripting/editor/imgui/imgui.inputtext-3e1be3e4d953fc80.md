---
uid: api.3e1be3e4d953fc809dd191742ffa93c6b4203cfcaabebb1248e062f0ec2fb5f0
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.InputText(System.String,System.String@,System.Int32,InnoEditor.ImGui.ImGuiInputTextFlags)"
source: xml
reviewed: b69f13d18b27a7ffccf883af83880526bd83282c235698ca12904538aacdd5a3
title: "ImGui.InputText"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Draws and edits a bounded UTF-8 text value.

## Parameters

**Parameter `label`:** The control label.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

## Returns

`true` when the control reports an edit or submit event.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.
