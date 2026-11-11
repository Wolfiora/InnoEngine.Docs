---
title: "ImGuiWidget.ImGuiWidget — Method: SearchInput"
description: "Exact Method: SearchInput contracts in ImGuiWidget.ImGuiWidget."
uid: api.inno.editor.imgui.91eb16374cd1e462
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.d7feaecdd475b63f#type-declaration
---
# `ImGuiWidget.ImGuiWidget`: Method: SearchInput

Read these exact member contracts together with the [containing type](imguiwidget.imguiwidget.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SearchInput`

<a id="api-e171920c40adbabb"></a>
<!-- api: M:Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single) 825847cae7835154b281305d1768e3382ffe73adba0cc0f6c5884e2d73de037e -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.ImGuiWidget.SearchInput(string id, string hint, ref string query, nuint capacity = 256, float width = -1)
```

Draws a single-line search field with a stable identifier.

**Constraints:** Escape clears a nonempty query before leaving text input on a subsequent press.

**Parameter `id`:** The stable control identifier.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `query`:** The mutable search query.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

**Returns:** `true` when the query changed; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Search.cs#L35).
