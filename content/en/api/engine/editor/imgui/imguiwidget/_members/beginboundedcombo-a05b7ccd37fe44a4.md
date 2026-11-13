---
uid: api.a05b7ccd37fe44a404083b2fb051d8b4c75025e871173f0a2565b827a0c68072
symbol: "engine:Inno.Editor.ImGui:M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginBoundedCombo(System.String,System.String,Inno.Editor.ImGui.ImGuiComboFlags)"
source: xml
reviewed: 8d2df88e2e343608deef96bad8f25e369b865f6ee056d5f9c525a301787e2e01
title: "BeginBoundedCombo"
kind: api
owners: [Inno.Editor.ImGui]
apiSurface: source-clr
---

Begins a combo whose popup opens below the control and stays within its containing window.

**Parameter `id`:** Stable combo identifier in the current ImGui scope.

**Parameter `preview`:** Text displayed by the closed combo.

**Parameter `flags`:** Native combo presentation flags. Only `F:Inno.Editor.ImGui.ImGuiComboFlags.WidthFitPreview` is supported.

**Returns:** `true` when the combo popup is open and its contents should be submitted; otherwise, `false`.

**Exception `T:System.ArgumentException`:** Thrown when `id` is empty.

**Exception `T:System.ArgumentNullException`:** Thrown when `preview` is null.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `flags` contains a presentation mode unsupported by the editor selector.
