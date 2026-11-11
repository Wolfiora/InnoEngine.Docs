---
title: "ImGui — Method: InvisibleButton"
description: "Exact Method: InvisibleButton contracts in ImGui."
uid: api.inno.editor.imgui.7abc65ba86943299
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: InvisibleButton

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `InvisibleButton`

<a id="api-2de6186a1f3dc6a7"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.InvisibleButton(System.String,System.Numerics.Vector2,Inno.Editor.ImGui.ImGuiButtonFlags) c20081eabd30daaeccf267ef404c5578f47057592a79560e65c77c0e50270ff4 -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.InvisibleButton(string label, System.Numerics.Vector2 size, Inno.Editor.ImGui.ImGuiButtonFlags flags = Inno.Editor.ImGui.ImGuiButtonFlags.None)
```

Submits an explicitly drawn control interaction rectangle.

**Parameter `label`:** The visible label and optional stable ID suffix.

**Parameter `size`:** The explicit two-dimensional extent.

**Parameter `flags`:** The explicit control and interaction options.

**Returns:** True when the documented control event or condition is present; otherwise false.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Controls.cs#L26).
