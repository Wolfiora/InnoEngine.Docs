---
title: "ImGui — Method: IsKeyPressed"
description: "Exact Method: IsKeyPressed contracts in ImGui."
uid: api.inno.editor.imgui.251e27b3b656ed11
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsKeyPressed

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsKeyPressed`

<a id="api-1528d87fddfbff16"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsKeyPressed(Inno.Editor.ImGui.ImGuiKey,System.Boolean) d2f6e9ce95a538c46fd18d12cb9c17d0ee241cee09951bec4e1ba5af8c7266a8 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsKeyPressed(Inno.Editor.ImGui.ImGuiKey key, bool repeat = true)
```

Checks a presentation-key press with explicit repeat policy.

**Parameter `key`:** The presentation key to inspect.

**Parameter `repeat`:** Whether a held key or button may produce repeats.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L100).
