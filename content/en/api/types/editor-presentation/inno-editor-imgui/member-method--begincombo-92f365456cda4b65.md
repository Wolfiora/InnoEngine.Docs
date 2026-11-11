---
title: "ImGui — Method: BeginCombo"
description: "Exact Method: BeginCombo contracts in ImGui."
uid: api.inno.editor.imgui.92f365456cda4b65
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: BeginCombo

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginCombo`

<a id="api-76e1f1fa10826870"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.BeginCombo(System.String,System.String,Inno.Editor.ImGui.ImGuiComboFlags) 4ae71a3f3c6c239db8cb366b6438161fc43f707adc28d90f5c1e97e5df76eee5 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.BeginCombo(string label, string preview, Inno.Editor.ImGui.ImGuiComboFlags flags = Inno.Editor.ImGui.ImGuiComboFlags.None)
```

Begins a combo popup.

**Parameter `label`:** The control label.

**Parameter `preview`:** The preview text.

**Parameter `flags`:** Combo behavior.

**Returns:** `true` when combo contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L480).
