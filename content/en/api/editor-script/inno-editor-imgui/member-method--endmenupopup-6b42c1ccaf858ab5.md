---
title: "ImGuiWidget — Method: EndMenuPopup"
description: "Exact Method: EndMenuPopup contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.6b42c1ccaf858ab5
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: EndMenuPopup

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `EndMenuPopup`

<a id="api-3623ed9aa3d917a2"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.EndMenuPopup e472c48095cfd18ef5feb3976bbdabdcac55db5e18cbea324b221f76d7b6ef95 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.EndMenuPopup()
```

Ends a popup opened by `InnoEditor.ImGui.ImGuiWidget.BeginMenuPopup(System.String)` and restores the previous style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L47).
