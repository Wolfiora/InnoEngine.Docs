---
title: "ImGuiWidget — Method: CompactDragFloat"
description: "Exact Method: CompactDragFloat contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.58945256cbf3e8f1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CompactDragFloat

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CompactDragFloat`

<a id="api-680a37b32d720947"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CompactDragFloat(System.String,System.Single@,System.Single,System.Nullable{System.Single},System.Nullable{System.Single}) 26ceffa92fd411d2a09a65d937a90a280e3e7afcb620ddea2dcc94bd2c6a4387 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.CompactDragFloat(string label, ref float value, float speed = 0.1, float? minimum = null, float? maximum = null)
```

Draws a floating-point drag field with a compact one-decimal presentation and precise text editing.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `speed`:** Drag speed.

**Parameter `minimum`:** Optional inclusive lower bound.

**Parameter `maximum`:** Optional inclusive upper bound.

**Returns:** `true` when the exact value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L254).
