---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.3e1be3e4d953fc809dd191742ffa93c6b4203cfcaabebb1248e062f0ec2fb5f0
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.InputText(System.String,System.String@,System.Int32,InnoEditor.ImGui.ImGuiInputTextFlags)
title: ImGui.InputText
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
sourceFingerprint: 8587ebfa694a8a484a87d1bf02505ce5273632bf3e55ad896d46ad9b888a0067
apiScope: Editor
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
