---
title: "ImGuiWidget — Method: EndBoundedCombo"
description: "Exact Method: EndBoundedCombo contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.d0905baca2788b58
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: EndBoundedCombo

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `EndBoundedCombo`

<a id="api-b7aa2d817bb593a3"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.EndBoundedCombo e1c1a7a98ae47d60be341e25324270c688798dedb12dd9a4304823b9c393dcd2 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.EndBoundedCombo()
```

Ends a combo opened by `InnoEditor.ImGui.ImGuiWidget.BeginBoundedCombo(System.String,System.String,InnoEditor.ImGui.ImGuiComboFlags)`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selector.cs#L55).
