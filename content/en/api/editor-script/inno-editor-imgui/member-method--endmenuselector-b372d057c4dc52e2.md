---
title: "ImGuiWidget — Method: EndMenuSelector"
description: "Exact Method: EndMenuSelector contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.b372d057c4dc52e2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: EndMenuSelector

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `EndMenuSelector`

<a id="api-db2e2c24e2d22d31"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.EndMenuSelector 5d4a2721d0524999115a30db1e65dd39e4404ee646af2ffd98f96a84ad3a93b3 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.EndMenuSelector()
```

Ends a selector popup opened by `InnoEditor.ImGui.ImGuiWidget.BeginMenuSelector(System.String,System.String,System.Single,System.Single)`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Selector.cs#L122).
