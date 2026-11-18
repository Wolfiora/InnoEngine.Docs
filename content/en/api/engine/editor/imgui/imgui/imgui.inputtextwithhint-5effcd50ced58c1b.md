---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5effcd50ced58c1be92ba72e5cd4e4d027036a95d44767d36f2b69597d1411af
symbol: engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGui.InputTextWithHint(System.String,System.String,System.String@,System.Int32,Inno.Editor.ImGui.ImGuiInputTextFlags)
title: ImGui.InputTextWithHint
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: source-clr
sourceFingerprint: ccbfe53ce87a7720c84b3fa2704d8c0a4fbb2cb16aba46a2ed23f801118ff795
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `label`:** The control label.

**Parameter `hint`:** The placeholder shown while the value is empty.

**Parameter `value`:** The managed string to display and update.

**Parameter `capacity`:** The positive maximum UTF-8 buffer capacity, including the terminator.

**Parameter `flags`:** Text editing behavior.

## Returns

`true` when the control reports an edit or submit event.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `capacity` is not positive.
