---
uid: api.d604897f6ce7374203880373925f63ccbcfe9bc47eebdfe5323d46f8f81c12f2
symbol: "scripting:Inno.Editor.ImGui:M:InnoEditor.ImGui.ImGuiWidget.BeginBoundedCombo(System.String,System.String,InnoEditor.ImGui.ImGuiComboFlags)"
source: xml
reviewed: 9c196a0d4c0ea0dae3a1969b1fcf73cc4ef6de6a5ad7a2f33e5f7794a1fdc273
title: "BeginBoundedCombo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: editor-script
apiScope: Editor
---

Begins a combo whose popup opens below the control and stays within its containing window.

**Parameter `id`:** Stable combo identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed combo.

**Parameter `flags`:** Native combo presentation flags. Only `F:InnoEditor.ImGui.ImGuiComboFlags.WidthFitPreview` is supported.

**Returns:** `true` when the combo popup is open and its contents should be submitted; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `preview` is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `flags` contains a presentation mode unsupported by the editor selector.
