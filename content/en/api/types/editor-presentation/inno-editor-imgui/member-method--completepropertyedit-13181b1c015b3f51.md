---
title: "ImGuiWidget.ImGuiWidget — Method: CompletePropertyEdit"
description: "Exact Method: CompletePropertyEdit contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.13181b1c015b3f51
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: CompletePropertyEdit

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CompletePropertyEdit`

<a id="api-e652395484fa1066"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompletePropertyEdit(System.String) a34a55b4ffe3db72d9c5e56047b4cdcf61c9ed52269f65a124126f3f7b12b6f6 -->

```csharp
public void Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.CompletePropertyEdit(string path)
```

Observes the current property after drawing, including release and cancellation without a new value sample.

**Parameter `path`:** The owner-qualified path passed to the property edit boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L100).
