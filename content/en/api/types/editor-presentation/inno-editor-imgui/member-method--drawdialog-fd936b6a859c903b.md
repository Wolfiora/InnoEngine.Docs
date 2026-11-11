---
title: "ImGuiWidget.ImGuiWidget — Method: DrawDialog"
description: "Exact Method: DrawDialog contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.fd936b6a859c903b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: DrawDialog

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `DrawDialog`

<a id="api-8a2581bff0c8b51d"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation,Inno.Editor.ImGui.ImGuiWidget.DialogLayout) a6f67b9500f1bdf88365783099f677ef27dd3d688e96e96d53ac07eb839a29e8 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.DrawDialog(Inno.Editor.ImGui.ImGuiWidget.DialogPresentation presentation, Inno.Editor.ImGui.ImGuiWidget.DialogLayout layout)
```

Draws one prepared message dialog. Text owns one bounded scroll region and actions remain outside it.

**Parameter `presentation`:** The same immutable content used for measurement.

**Parameter `layout`:** The measurement captured in this frame and context.

**Returns:** True when the enabled action was activated by native button input or its explicitly enabled Escape policy.

**Throws `System.ArgumentNullException`:** The message is null.

**Throws `System.ArgumentOutOfRangeException`:** The layout is invalid.

**Throws `System.InvalidOperationException`:** The owning frame, context or thread is not active.

**Throws `System.ObjectDisposedException`:** The owning UI session has retired.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Dialog.cs#L202).
