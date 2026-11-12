---
title: "ImGuiWidget — Method: SetupPropertyColumns"
description: "Exact Method: SetupPropertyColumns contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.4b272a88eff99d8c
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: SetupPropertyColumns

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SetupPropertyColumns`

<a id="api-7fe0f8c9eec1f674"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.SetupPropertyColumns f6d7f6b18eeee6f7413b8803c727b86f0e55bb4f46a235456e244ad711eb1818 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.SetupPropertyColumns()
```

Configures the label and input columns of an active table with a shared two-to-three ratio.
A following fixed-width action column may be added by the caller.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L100).
