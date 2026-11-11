---
title: "ImGui — Method: PushStyleVar"
description: "Exact Method: PushStyleVar contracts in ImGui."
uid: api.inno.editor.imgui.457850ae0030578e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: PushStyleVar

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `PushStyleVar`

<a id="api-32b8df9d853e9d5e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.PushStyleVar(Inno.Editor.ImGui.ImGuiStyleVar,System.Numerics.Vector2) da46aaafdced976a57c7dc20d4429498af542b570f2a312e9cbe1f21438ef85a -->

```csharp
public static void Inno.Editor.ImGui.ImGui.PushStyleVar(Inno.Editor.ImGui.ImGuiStyleVar style, System.Numerics.Vector2 value)
```

Pushes one two-component style override.

**Parameter `style`:** The style variable.

**Parameter `value`:** The vector value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L853).

## `PushStyleVar`

<a id="api-30ee8680f03fdb9b"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.PushStyleVar(Inno.Editor.ImGui.ImGuiStyleVar,System.Single) 1bb7e36e69a1ed708ce85046c6411300c3b78e875b18efd3f12b6f8e4eb32950 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.PushStyleVar(Inno.Editor.ImGui.ImGuiStyleVar style, float value)
```

Pushes one scalar style override.

**Parameter `style`:** The style variable.

**Parameter `value`:** The scalar value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L836).
