---
title: "ImGui — Method: GetControlId"
description: "Exact Method: GetControlId contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.a1ba87de14d82ad8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: GetControlId

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `GetControlId`

<a id="api-f4b2625c495b0d97"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.GetControlId(System.String) c0a7d31fe124d8d949349c9ff201d16cc7c8188fd022738dc95921ba80c69abd -->

```csharp
public static uint InnoEditor.ImGui.ImGui.GetControlId(string label)
```

Derives a control identity from the current window and ID stack.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Returns:** A copied value from the active presentation context.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Drawing.cs#L35).
