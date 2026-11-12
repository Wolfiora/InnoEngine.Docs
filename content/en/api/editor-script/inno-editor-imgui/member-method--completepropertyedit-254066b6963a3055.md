---
title: "ImGuiWidget — Method: CompletePropertyEdit"
description: "Exact Method: CompletePropertyEdit contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.254066b6963a3055
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: CompletePropertyEdit

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CompletePropertyEdit`

<a id="api-819b50b5d0de6902"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.CompletePropertyEdit(System.String) fbf5d9de82af470c6949496cf2278652c26273aed1a238393495745a6bcf07d5 -->

```csharp
public void InnoEditor.ImGui.ImGuiWidget.CompletePropertyEdit(string path)
```

Observes the current property after drawing, including release and cancellation without a new value sample.

**Parameter `path`:** The owner-qualified path passed to the property edit boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L100).
