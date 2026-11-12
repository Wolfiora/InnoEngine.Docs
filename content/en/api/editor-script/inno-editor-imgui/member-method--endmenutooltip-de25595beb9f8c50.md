---
title: "ImGuiWidget — Method: EndMenuTooltip"
description: "Exact Method: EndMenuTooltip contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.de25595beb9f8c50
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: EndMenuTooltip

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `EndMenuTooltip`

<a id="api-9435166bf40f92cb"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.EndMenuTooltip 6a89011068af27db6263d9f4d6b3dfb80a583dccc2f389dd9cd11f2dc7e597bf -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.EndMenuTooltip()
```

Ends a tooltip opened by `InnoEditor.ImGui.ImGuiWidget.BeginMenuTooltip` and restores the previous style.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L75).
