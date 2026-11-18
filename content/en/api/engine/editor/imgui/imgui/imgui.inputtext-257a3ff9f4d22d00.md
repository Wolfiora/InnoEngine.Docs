---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.257a3ff9f4d22d006583bc1d77e5544615376718283e5363e2aa242421dac348
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.InputText(System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags)
title: ImGui.InputText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: a144fd8a29fbac65f492be9e760efa058bbe419b6df7785e1af2fff5105ca196
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `label`:** The control label.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

## Returns

`true` when the control reports an edit or submit event.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.
