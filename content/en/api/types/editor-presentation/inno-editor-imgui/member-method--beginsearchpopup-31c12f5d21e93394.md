---
title: "ImGuiWidget.ImGuiWidget — Method: BeginSearchPopup"
description: "Exact Method: BeginSearchPopup contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.31c12f5d21e93394
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: BeginSearchPopup

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginSearchPopup`

<a id="api-321dff1c5d75e46c"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single) 3ed8df64558e8d8cba279b024a0720c954f8342890263e52d6c7237a0ae1b1d7 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.BeginSearchPopup(string id, ref string query, string hint, nuint capacity = 256, float width = -1)
```

Begins a popup and draws its focused search field.

**Parameter `id`:** The popup identifier previously supplied to ImGui.

**Parameter `query`:** The mutable search query.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The search field width, or a negative value to use the editor default.

**Returns:** `true` when popup content should be drawn; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Search.cs#L69).
