---
title: "ImGuiWidget — Method: BeginMenuPopup"
description: "Exact Method: BeginMenuPopup contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.adeabf5753ed152d
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginMenuPopup

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginMenuPopup`

<a id="api-6a92dab778265881"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginMenuPopup(System.String) 33cdb7e29ca107a733ab2c775c5dbcdddbb320d4cd587dea563c86217d07572e -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.BeginMenuPopup(string id)
```

Begins an explicitly opened popup using the editor context-menu presentation contract.
The popup stays in its parent viewport, sizes itself to submitted content, and scrolls when
its work-area bound is reached.

**Parameter `id`:** The stable identifier previously passed to ImGui when opening the popup.

**Returns:** `true` when popup content should be submitted; otherwise,
            `false`.

**Throws `System.ArgumentException`:** Thrown when `id` is empty.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.ContextMenu.cs#L31).
