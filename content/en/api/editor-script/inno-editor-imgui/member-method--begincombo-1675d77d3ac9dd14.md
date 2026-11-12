---
title: "ImGui — Method: BeginCombo"
description: "Exact Method: BeginCombo contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.1675d77d3ac9dd14
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: BeginCombo

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginCombo`

<a id="api-a6467bd463d7aacd"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.BeginCombo(System.String,System.String,InnoEditor.ImGui.ImGuiComboFlags) 340ad12c8d8f4b58335e7046a7225d4b388a7b094d3977a67a70c69f2b477790 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.BeginCombo(string label, string preview, InnoEditor.ImGui.ImGuiComboFlags flags = InnoEditor.ImGui.ImGuiComboFlags.None)
```

Begins a combo popup.

**Parameter `label`:** The control label.

**Parameter `preview`:** The preview text.

**Parameter `flags`:** Combo behavior.

**Returns:** `true` when combo contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L480).
