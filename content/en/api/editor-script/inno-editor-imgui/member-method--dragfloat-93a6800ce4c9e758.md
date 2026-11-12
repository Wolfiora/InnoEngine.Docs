---
title: "ImGui — Method: DragFloat"
description: "Exact Method: DragFloat contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.93a6800ce4c9e758
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: DragFloat

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DragFloat`

<a id="api-fe2e063e7065308d"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.DragFloat(System.String,System.Single@,System.Single,System.Single,System.Single) 9dacb6b94ffe670885bfd5a9d46b7bcc6c0a328317a106af509b558199212e4b -->

```csharp
public static bool InnoEditor.ImGui.ImGui.DragFloat(string label, ref float value, float speed = 1, float minimum = 0, float maximum = 0)
```

Draws a floating-point drag control.

**Parameter `label`:** The control label.

**Parameter `value`:** The value to display and update.

**Parameter `speed`:** The drag speed.

**Parameter `minimum`:** The inclusive minimum, or zero with a zero maximum for no clamping.

**Parameter `maximum`:** The inclusive maximum, or zero with a zero minimum for no clamping.

**Returns:** `true` when the value changes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L220).
