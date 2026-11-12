---
title: "ImGuiWidget — Method: DrawDialog"
description: "Exact Method: DrawDialog contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.61a702a7fd648611
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: DrawDialog

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `DrawDialog`

<a id="api-545a149a9d735fed"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.DrawDialog(InnoEditor.ImGui.DialogPresentation,InnoEditor.ImGui.DialogLayout) e6aec197a64e46e380cd727b1d3e5c42df418732ba2f0cfc5fa3b73ef8538942 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.DrawDialog(InnoEditor.ImGui.DialogPresentation presentation, InnoEditor.ImGui.DialogLayout layout)
```

Draws one prepared message dialog. Text owns one bounded scroll region and actions remain outside it.

**Parameter `presentation`:** The same immutable content used for measurement.

**Parameter `layout`:** The measurement captured in this frame and context.

**Returns:** True when the enabled action was activated by native button input or its explicitly enabled Escape policy.

**Throws `System.ArgumentNullException`:** The message is null.

**Throws `System.ArgumentOutOfRangeException`:** The layout is invalid.

**Throws `System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Throws `System.ObjectDisposedException`:** The owning UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L202).
