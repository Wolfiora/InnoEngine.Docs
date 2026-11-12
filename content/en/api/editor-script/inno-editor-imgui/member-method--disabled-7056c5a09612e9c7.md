---
title: "ImGuiWidget — Method: Disabled"
description: "Exact Method: Disabled contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.7056c5a09612e9c7
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: Disabled

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `Disabled`

<a id="api-96fda5505791c4c3"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.Disabled(System.Boolean,System.Action) 4603469a6e14a86f2b38254f7138a4aa64cda8ecefe01322fa16531f88e5bb81 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.Disabled(bool disabled, System.Action draw)
```

Draws content inside an ImGui disabled scope when requested.

**Parameter `disabled`:** Whether interaction is disabled.

**Parameter `draw`:** Drawing callback.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Property.cs#L349).
