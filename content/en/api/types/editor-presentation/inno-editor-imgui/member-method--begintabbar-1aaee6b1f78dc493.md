---
title: "ImGui — Method: BeginTabBar"
description: "Exact Method: BeginTabBar contracts in ImGui."
uid: api.inno.editor.imgui.1aaee6b1f78dc493
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: BeginTabBar

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `BeginTabBar`

<a id="api-3236aa2a411ba158"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.BeginTabBar(System.String,Inno.Editor.ImGui.ImGuiTabBarFlags) efa7093cf756255b690cff19e3e408becc4ac78601ed7ecd731926f8865a1ba4 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.BeginTabBar(string id, Inno.Editor.ImGui.ImGuiTabBarFlags flags = Inno.Editor.ImGui.ImGuiTabBarFlags.None)
```

Begins a tab bar.

**Parameter `id`:** The tab bar identity.

**Parameter `flags`:** Tab-bar behavior.

**Returns:** `true` when tab contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L587).
