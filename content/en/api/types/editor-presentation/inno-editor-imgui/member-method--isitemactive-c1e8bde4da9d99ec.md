---
title: "ImGui — Method: IsItemActive"
description: "Exact Method: IsItemActive contracts in ImGui."
uid: api.inno.editor.imgui.c1e8bde4da9d99ec
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsItemActive

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsItemActive`

<a id="api-34345b03ddd59692"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsItemActive 7eb5249071f404927123764d671eecfdc077db17f072914b00185e10596bb64c -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsItemActive()
```

Gets whether the previous item is active.

**Returns:** `true` while the item owns an active interaction.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L1105).
