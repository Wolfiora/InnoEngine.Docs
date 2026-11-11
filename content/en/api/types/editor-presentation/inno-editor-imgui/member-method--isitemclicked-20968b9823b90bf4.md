---
title: "ImGui — Method: IsItemClicked"
description: "Exact Method: IsItemClicked contracts in ImGui."
uid: api.inno.editor.imgui.20968b9823b90bf4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsItemClicked

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsItemClicked`

<a id="api-1de16385ae69d275"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsItemClicked(Inno.Editor.ImGui.ImGuiMouseButton) 293d9647a35a932f24cfe46d74a08a986b2da56798afe2b16fd3a7556a2005e9 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsItemClicked(Inno.Editor.ImGui.ImGuiMouseButton button = Inno.Editor.ImGui.ImGuiMouseButton.Left)
```

Gets whether the previous item was clicked with a mouse button.

**Parameter `button`:** The mouse button to query.

**Returns:** `true` when the item was clicked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1120).
