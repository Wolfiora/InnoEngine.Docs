---
title: "ImGuiWidget — Property: isMixedValue"
description: "Exact Property: isMixedValue contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.c2afaf3fa8bbbc52
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Property: isMixedValue

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `isMixedValue`

<a id="api-02d596e1e2b9f5d9"></a>
<!-- api: P:InnoEditor.ImGui.ImGuiWidget.isMixedValue 82be892282bf28dc90813139430ee2c78127940838d1bcdd79c9e9b608ec9f26 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.isMixedValue { get; }
```

Gets whether the currently drawn control group represents differing selected values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.MixedValue.cs#L16).
