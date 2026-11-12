---
title: "ImGuiWidget — Method: PanelWindow"
description: "Exact Method: PanelWindow contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.0e25851bfc69c89b
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: PanelWindow

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `PanelWindow`

<a id="api-efa1f14415d413d1"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.PanelWindow(System.String,System.Boolean@,System.Action,InnoEditor.ImGui.ImGuiWindowFlags,System.Boolean) 820d3f4568ace6f0bbf47f8caf0b424a423402e904e47fbe0fe69aef61f73994 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.PanelWindow(string title, ref bool isOpen, System.Action drawBody, InnoEditor.ImGui.ImGuiWindowFlags flags = InnoEditor.ImGui.ImGuiWindowFlags.NoCollapse, bool useWindowPadding = true)
```

Opens a standard panel window and executes panel body.

**Parameter `title`:** Window title.

**Parameter `isOpen`:** Visible state.

**Parameter `drawBody`:** Panel body callback.

**Parameter `flags`:** Window flags.

**Parameter `useWindowPadding`:** Whether the panel body should use the current standard window padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L32).
