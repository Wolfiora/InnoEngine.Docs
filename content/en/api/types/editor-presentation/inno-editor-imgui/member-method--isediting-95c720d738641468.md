---
title: "ImGuiWidget.ImGuiWidget — Method: IsEditing"
description: "Exact Method: IsEditing contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.95c720d738641468
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: IsEditing

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsEditing`

<a id="api-4f39e95049b98240"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsEditing(System.String) 924d8c91e614589ab36b45b406682a609b96dae24c9b10f435cd1d494209b47a -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.IsEditing(string path)
```

Checks whether this owner still owns a particular edit, including after a close or generation boundary.

**Parameter `path`:** The stable edit identity.

**Returns:** True only while the matching owner still has an active transaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Editing.cs#L92).
