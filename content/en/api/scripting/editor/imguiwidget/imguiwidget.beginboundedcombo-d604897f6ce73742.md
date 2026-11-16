---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.d604897f6ce7374203880373925f63ccbcfe9bc47eebdfe5323d46f8f81c12f2
symbol: scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginBoundedCombo(System.String,System.String,InnoEditor.ImGui.ImGuiComboFlags)
title: ImGuiWidget.BeginBoundedCombo
kind: api
owners:
- Inno.Editor.ImGui
apiSurface: editor-script
reviewed: 15bb97f8306e7970506fe2dc15ec78366e8ee02061f20712ad615986d7461842
apiScope: Editor
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `id`:** Stable combo identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed combo.

**Parameter `flags`:** Native combo presentation flags. Only `F:InnoEditor.ImGui.ImGuiComboFlags.WidthFitPreview` is supported.

## Returns

`true` when the combo popup is open and its contents should be submitted; otherwise, `false`.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `preview` is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `flags` contains a presentation mode unsupported by the editor selector.
