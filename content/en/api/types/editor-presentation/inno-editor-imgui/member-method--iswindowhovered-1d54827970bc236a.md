---
title: "ImGui — Method: IsWindowHovered"
description: "Exact Method: IsWindowHovered contracts in ImGui."
uid: api.inno.editor.imgui.1d54827970bc236a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: IsWindowHovered

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `IsWindowHovered`

<a id="api-84a94360f6c824a0"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.IsWindowHovered(Inno.Editor.ImGui.ImGuiHoveredFlags) ec8f230c9a3834e7bcc5cb49fd977106866368259a5d5f5603ceddc532bcd03d -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.IsWindowHovered(Inno.Editor.ImGui.ImGuiHoveredFlags flags = Inno.Editor.ImGui.ImGuiHoveredFlags.None)
```

Checks window hover under the declared interaction policy.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Input.cs#L165).
