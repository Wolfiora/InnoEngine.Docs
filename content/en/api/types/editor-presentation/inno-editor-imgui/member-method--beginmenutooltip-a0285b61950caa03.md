---
title: "ImGuiWidget.ImGuiWidget — Method: BeginMenuTooltip"
description: "Exact Method: BeginMenuTooltip contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.a0285b61950caa03
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginMenuTooltip

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginMenuTooltip`

<a id="api-a6edb08588df7832"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuTooltip b79fcb840d46e83b2cd0c2b3706522f66b63c3675c1112dde2cd0269dbdf6459 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuTooltip()
```

Begins a parent-viewport tooltip using the same padding, colors, border, and spacing as editor menus.

**Returns:** `true` when tooltip content should be submitted; otherwise,
    `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L61).
