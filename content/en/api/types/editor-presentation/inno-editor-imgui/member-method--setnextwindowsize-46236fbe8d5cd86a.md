---
title: "ImGui — Method: SetNextWindowSize"
description: "Exact Method: SetNextWindowSize contracts in ImGui."
uid: api.inno.editor.imgui.46236fbe8d5cd86a
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: SetNextWindowSize

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `SetNextWindowSize`

<a id="api-5d20f2d997f797dc"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.SetNextWindowSize(System.Numerics.Vector2,Inno.Editor.ImGui.ImGuiCond) e82d617a277f4860e08d25c0f6e31520a569fe411099ae3814205ac4c93b8c76 -->

```csharp
public static void Inno.Editor.ImGui.ImGui.SetNextWindowSize(System.Numerics.Vector2 size, Inno.Editor.ImGui.ImGuiCond condition = Inno.Editor.ImGui.ImGuiCond.None)
```

Requests a size for the next window under an explicit layout condition.

**Parameter `size`:** The explicit two-dimensional extent.

**Parameter `condition`:** The condition controlling when the request is applied.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Controls/ImGui.Layout.cs#L182).
