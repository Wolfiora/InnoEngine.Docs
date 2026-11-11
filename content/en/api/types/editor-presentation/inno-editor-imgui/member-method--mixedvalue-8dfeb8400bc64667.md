---
title: "ImGuiWidget.ImGuiWidget — Method: MixedValue"
description: "Exact Method: MixedValue contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.8dfeb8400bc64667
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: MixedValue

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `MixedValue`

<a id="api-e24a245b7e3f6ac7"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MixedValue(System.Boolean,System.Action) 741c2a7515804ad3b2f4288197fe7868cbba07f0ed3a37464dd125eeceb615fe -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.MixedValue(bool mixed, System.Action draw)
```

Draws one control group with the native mixed-value state, restoring the previous item flags on failure.

**Parameter `mixed`:** Whether the current selection contains different values.

**Parameter `draw`:** Synchronous control drawing; never retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.MixedValue.cs#L27).
