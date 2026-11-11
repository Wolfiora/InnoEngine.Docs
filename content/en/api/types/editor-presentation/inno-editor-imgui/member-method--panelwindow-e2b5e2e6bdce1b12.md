---
title: "ImGuiWidget.ImGuiWidget — Method: PanelWindow"
description: "Exact Method: PanelWindow contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.e2b5e2e6bdce1b12
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: PanelWindow

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PanelWindow`

<a id="api-5e82c403042c2b19"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PanelWindow(System.String,System.Boolean@,System.Action,Inno.Editor.ImGui.ImGuiWindowFlags,System.Boolean) 125a716dbee5431dad7ef6313bfeb85554fd83f219570122b7de5afcc0afbbe6 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.PanelWindow(string title, ref bool isOpen, System.Action drawBody, Inno.Editor.ImGui.ImGuiWindowFlags flags = Inno.Editor.ImGui.ImGuiWindowFlags.NoCollapse, bool useWindowPadding = true)
```

Opens a standard panel window and executes panel body.

**Parameter `title`:** Window title.

**Parameter `isOpen`:** Visible state.

**Parameter `drawBody`:** Panel body callback.

**Parameter `flags`:** Window flags.

**Parameter `useWindowPadding`:** Whether the panel body should use the current standard window padding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Panel.cs#L32).
