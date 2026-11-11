---
title: "ImGui — Method: BeginTable"
description: "Exact Method: BeginTable contracts in ImGui."
uid: api.inno.editor.imgui.30350dd74fa751f1
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: BeginTable

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginTable`

<a id="api-2d122108cc66cfac"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.BeginTable(System.String,System.Int32,Inno.Editor.ImGui.ImGuiTableFlags,System.Numerics.Vector2,System.Single) d3449aa444c88b2017dc1adb3f77533cff06e1b17095723fdd7c1ced4a3cdde1 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.BeginTable(string id, int columns, Inno.Editor.ImGui.ImGuiTableFlags flags = Inno.Editor.ImGui.ImGuiTableFlags.None, System.Numerics.Vector2 size = default(System.Numerics.Vector2), float innerWidth = 0)
```

Begins a table.

**Parameter `id`:** The table identity.

**Parameter `columns`:** The positive column count.

**Parameter `flags`:** Table behavior.

**Parameter `size`:** The requested outer size.

**Returns:** `true` when table contents should be submitted.

**Parameter `innerWidth`:** Optional inner scrolling width; zero uses the outer size.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L386).
