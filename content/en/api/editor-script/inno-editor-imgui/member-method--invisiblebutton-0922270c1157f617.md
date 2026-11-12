---
title: "ImGui — Method: InvisibleButton"
description: "Exact Method: InvisibleButton contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.0922270c1157f617
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: InvisibleButton

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `InvisibleButton`

<a id="api-70084edabc431f63"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.InvisibleButton(System.String,System.Numerics.Vector2,InnoEditor.ImGui.ImGuiButtonFlags) c87e172f7cd390cf4f1ffa7518e64a0356e2707887fc78249779a847a695b10f -->

```csharp
public static bool InnoEditor.ImGui.ImGui.InvisibleButton(string label, System.Numerics.Vector2 size, InnoEditor.ImGui.ImGuiButtonFlags flags = InnoEditor.ImGui.ImGuiButtonFlags.None)
```

Submits an explicitly drawn control interaction rectangle.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `size`:** The explicit two-dimensional extent.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L26).
