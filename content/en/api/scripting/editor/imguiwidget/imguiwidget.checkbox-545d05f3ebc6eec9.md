---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.545d05f3ebc6eec93bf6d96ef280335398ddf5ac71790732b581d5407de758d0
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.Checkbox(System.String,System.Boolean@,System.String)
title: ImGuiWidget.Checkbox
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: d173a61fb9e98b5680e00bd2cbb871892a4c5d8879001a51302fd7f468418164
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `label`:** Visible label and stable ImGui identifier.

**Parameter `value`:** Mutable checked state.

**Parameter `tooltip`:** Optional explanation displayed while the checkbox is hovered.

## Returns

`true` when the value changed.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `label` is empty or whitespace.
