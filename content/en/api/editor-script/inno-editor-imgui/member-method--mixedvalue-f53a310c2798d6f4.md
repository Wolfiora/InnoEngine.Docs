---
title: "ImGuiWidget — Method: MixedValue"
description: "Exact Method: MixedValue contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.f53a310c2798d6f4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: MixedValue

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `MixedValue`

<a id="api-3e875e17a4f710c1"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.MixedValue(System.Boolean,System.Action) cc8f5e64030476975a9b77273d0789b707cde6f7f1328788f5abec2f1f12d6b9 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.MixedValue(bool mixed, System.Action draw)
```

Draws one control group with the native mixed-value state, restoring the previous item flags on failure.

**Parameter `mixed`:** Whether the current selection contains different values.

**Parameter `draw`:** Synchronous control drawing; never retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.MixedValue.cs#L27).
