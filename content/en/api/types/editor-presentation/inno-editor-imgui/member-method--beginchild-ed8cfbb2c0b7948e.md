---
title: "ImGui — Method: BeginChild"
description: "Exact Method: BeginChild contracts in ImGui."
uid: api.inno.editor.imgui.ed8cfbb2c0b7948e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: BeginChild

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginChild`

<a id="api-84b2c643d1a6d8a3"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.BeginChild(System.String,System.Numerics.Vector2,Inno.Editor.ImGui.ImGuiChildFlags,Inno.Editor.ImGui.ImGuiWindowFlags) ec8935bf1b2c0d1aab1c7e3429959ebfac1c94eb654e1d295f2c92348ddc0452 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.BeginChild(string id, System.Numerics.Vector2 size = default(System.Numerics.Vector2), Inno.Editor.ImGui.ImGuiChildFlags flags = Inno.Editor.ImGui.ImGuiChildFlags.None, Inno.Editor.ImGui.ImGuiWindowFlags windowFlags = Inno.Editor.ImGui.ImGuiWindowFlags.None)
```

Begins a child region.

**Parameter `id`:** The child identity.

**Parameter `size`:** The requested child size.

**Parameter `flags`:** Child-region behavior.

**Returns:** `true` when child contents should be submitted.

**Parameter `windowFlags`:** Scroll and window policies for the child.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L346).
