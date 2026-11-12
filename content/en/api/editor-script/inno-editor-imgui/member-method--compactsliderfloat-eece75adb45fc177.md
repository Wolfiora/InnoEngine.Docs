---
title: "ImGuiWidget — Method: CompactSliderFloat"
description: "Exact Method: CompactSliderFloat contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.eece75adb45fc177
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CompactSliderFloat

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CompactSliderFloat`

<a id="api-ffb6e457ab2450ef"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CompactSliderFloat(System.String,System.Single@,System.Single,System.Single) f4bae891bf14b6bc06186bd6706f0a10b9147b461593ba2d537613eb9915ef12 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.CompactSliderFloat(string label, ref float value, float minimum, float maximum)
```

Draws a bounded slider with compact presentation and a double-click precise input mode.

**Parameter `label`:** Stable ImGui label and identifier.

**Parameter `value`:** Exact floating-point value to edit. Compact presentation never rounds the stored value.

**Parameter `minimum`:** Inclusive lower bound.

**Parameter `maximum`:** Inclusive upper bound.

**Returns:** `true` when the exact value changed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L288).
