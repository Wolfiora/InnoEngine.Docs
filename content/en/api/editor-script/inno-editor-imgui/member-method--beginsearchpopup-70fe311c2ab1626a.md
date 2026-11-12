---
title: "ImGuiWidget — Method: BeginSearchPopup"
description: "Exact Method: BeginSearchPopup contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.70fe311c2ab1626a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: BeginSearchPopup

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `BeginSearchPopup`

<a id="api-cdcd1e55fa4da3bc"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.BeginSearchPopup(System.String,System.String@,System.String,System.UIntPtr,System.Single) f5bb8684941f9c1682889140e3e4a580b7d6224e36c9e0c8c5ab7c837fefc9a6 -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.BeginSearchPopup(string id, ref string query, string hint, nuint capacity = 256, float width = -1)
```

Begins a popup and draws its focused search field.

**Parameter `id`:** The popup identifier previously supplied to ImGui.

**Parameter `query`:** The mutable search query.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The search field width, or a negative value to use the editor default.

**Returns:** `true` when popup content should be drawn; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Search.cs#L69).
