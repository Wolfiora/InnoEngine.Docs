---
title: "ImGuiWidget.ImGuiWidget — Method: BeginMenuPopup"
description: "Exact Method: BeginMenuPopup contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.541f3a5607032857
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginMenuPopup

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginMenuPopup`

<a id="api-9d56f03ea3261228"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuPopup(System.String) 3bf9c87fd31dc9550a22739590082ce9a2a12a19c656fc38d5b4e09ac1585d09 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginMenuPopup(string id)
```

Begins an explicitly opened popup using the editor context-menu presentation contract.
The popup stays in its parent viewport, sizes itself to submitted content, and scrolls when
its work-area bound is reached.

**Parameter `id`:** The stable identifier previously passed to ImGui when opening the popup.

**Returns:** `true` when popup content should be submitted; otherwise,
    `false`.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L31).
