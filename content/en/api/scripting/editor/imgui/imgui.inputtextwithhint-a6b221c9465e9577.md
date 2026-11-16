---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.a6b221c9465e9577896774bc4d782b3dcdad9307e3c1143abc988bc49143ffea
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGui.InputTextWithHint(System.String,System.String,System.String@,System.Int32,InnoEditor.ImGui.ImGuiInputTextFlags)
title: ImGui.InputTextWithHint
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: c7eccffaa3cb5c1efc1f65fd53f697ca72efae177b28315a3b8c529c06bae3c2
apiScope: Editor
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
