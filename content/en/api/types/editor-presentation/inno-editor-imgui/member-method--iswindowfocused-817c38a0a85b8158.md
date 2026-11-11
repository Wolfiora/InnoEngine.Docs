---
title: "ImGui — Method: IsWindowFocused"
description: "Exact Method: IsWindowFocused contracts in ImGui."
uid: api.inno.editor.imgui.817c38a0a85b8158
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsWindowFocused

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsWindowFocused`

<a id="api-a8fe1681e798e5b6"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsWindowFocused(Inno.Editor.ImGui.ImGuiFocusedFlags) 812b239606ff650ae9284893bc627050c252ff1ca3f230479eece93287b1c54c -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsWindowFocused(Inno.Editor.ImGui.ImGuiFocusedFlags flags = Inno.Editor.ImGui.ImGuiFocusedFlags.None)
```

Checks keyboard focus within the declared window scope.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L180).
