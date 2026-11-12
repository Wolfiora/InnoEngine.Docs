---
title: "ImGuiWidget — Method: EndSearchPopup"
description: "Exact Method: EndSearchPopup contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.12c7077a4f598edf
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: EndSearchPopup

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `EndSearchPopup`

<a id="api-8821e0d0380fea47"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.EndSearchPopup cce5b6d61d2eecd449bb62cf976586052144441ed754293a22c53de9571a0e8f -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.EndSearchPopup()
```

Ends a popup opened by `InnoEditor.ImGui.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single)`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Search.cs#L92).
