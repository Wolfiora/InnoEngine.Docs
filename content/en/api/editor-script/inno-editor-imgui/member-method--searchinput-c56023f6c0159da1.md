---
title: "ImGuiWidget — Method: SearchInput"
description: "Exact Method: SearchInput contracts in ImGuiWidget."
uid: api.inno.editor.imgui.editor-script.c56023f6c0159da1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.7b683e110163fdd5#type-declaration
---
# `ImGuiWidget`: Method: SearchInput

Read these exact member contracts together with the [containing type](innoeditor.imgui.imguiwidget.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `SearchInput`

<a id="api-31ce5b3e7f969572"></a>
<!-- api: M:InnoEditor.ImGui.ImGuiWidget.SearchInput(System.String,System.String,System.String@,System.UIntPtr,System.Single) 1eada15910d8858e3ee727ae004540b2a808cde1de49425d15c97d4a50e663df -->

```csharp
public bool InnoEditor.ImGui.ImGuiWidget.SearchInput(string id, string hint, ref string query, nuint capacity = 256, float width = -1)
```

Draws a single-line search field with a stable identifier.

**Constraints:** Escape clears a nonempty query before leaving text input on a subsequent press.

**Parameter `id`:** The stable control identifier.

**Parameter `hint`:** The hint shown while the query is empty.

**Parameter `query`:** The mutable search query.

**Parameter `capacity`:** The maximum UTF-8 buffer capacity.

**Parameter `width`:** The control width, or a negative value to fill the available space.

**Returns:** `true` when the query changed; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Search.cs#L35).
