---
title: "ImGui — Method: IsItemHovered"
description: "Exact Method: IsItemHovered contracts in ImGui."
uid: api.inno.editor.imgui.f449ac3c3eb02fbe
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsItemHovered

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsItemHovered`

<a id="api-bd4aef6bcc92ddc0"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsItemHovered(Inno.Editor.ImGui.ImGuiHoveredFlags) 2082b30f2d8531faa5ffc73e52757fcd2f65998698e29daaa467c8ecf83ab2ce -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsItemHovered(Inno.Editor.ImGui.ImGuiHoveredFlags flags = Inno.Editor.ImGui.ImGuiHoveredFlags.None)
```

Gets whether the previous item is hovered.

**Parameter `flags`:** Hovered query behavior.

**Returns:** `true` when the query succeeds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1093).
