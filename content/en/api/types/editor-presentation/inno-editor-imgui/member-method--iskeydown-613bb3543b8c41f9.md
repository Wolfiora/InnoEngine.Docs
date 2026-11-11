---
title: "ImGui — Method: IsKeyDown"
description: "Exact Method: IsKeyDown contracts in ImGui."
uid: api.inno.editor.imgui.613bb3543b8c41f9
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsKeyDown

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsKeyDown`

<a id="api-558e709833ffbf3a"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsKeyDown(Inno.Editor.ImGui.ImGuiKey) ded01ed3e39faaa2e36dda9acd4bd07f3aa77ab0e289617a4577d9cd6de6f7a3 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsKeyDown(Inno.Editor.ImGui.ImGuiKey key)
```

Checks whether a presentation key remains held.

**Parameter `key`:** The presentation key to inspect.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L82).
