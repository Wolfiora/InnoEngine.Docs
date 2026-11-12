---
title: "ImGuiWidget — Method: BeginMenuTooltip"
description: "Exact Method: BeginMenuTooltip contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.1306264b92c8c25e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginMenuTooltip

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginMenuTooltip`

<a id="api-31adaa13af05d193"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginMenuTooltip 020cfca32412347efcfac0a006e6b3849d09b868cf16ef57335a9238830080b0 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.BeginMenuTooltip()
```

Begins a parent-viewport tooltip using the same padding, colors, border, and spacing as editor menus.

**Returns:** `true` when tooltip content should be submitted; otherwise,
            `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L61).
