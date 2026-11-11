---
title: "ImGui — Method: IsMouseDoubleClicked"
description: "Exact Method: IsMouseDoubleClicked contracts in ImGui."
uid: api.inno.editor.imgui.bc544646bfd8a8f4
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsMouseDoubleClicked

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsMouseDoubleClicked`

<a id="api-f53ba87f018751b9"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsMouseDoubleClicked(Inno.Editor.ImGui.ImGuiMouseButton) be12ab07a16f31f58e6dcb337b77ebfb41b2b76d92aa2ceed06dc91e4aec8f7c -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsMouseDoubleClicked(Inno.Editor.ImGui.ImGuiMouseButton button)
```

Checks the backend-classified double-click event.

**Parameter `button`:** The pointer button to inspect.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L67).
