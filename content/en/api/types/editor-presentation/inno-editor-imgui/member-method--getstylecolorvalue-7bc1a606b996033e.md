---
title: "ImGui — Method: GetStyleColorValue"
description: "Exact Method: GetStyleColorValue contracts in ImGui."
uid: api.inno.editor.imgui.7bc1a606b996033e
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: GetStyleColorValue

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `GetStyleColorValue`

<a id="api-5fd510e134f6ac65"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.GetStyleColorValue(Inno.Editor.ImGui.ImGuiCol) 07322f774eb8df6745a7618efad9980347b2f725bfea4421616a81791250a8af -->

```csharp
public static System.Numerics.Vector4 Inno.Editor.ImGui.ImGui.GetStyleColorValue(Inno.Editor.ImGui.ImGuiCol color)
```

Copies an unmodulated style color for compound presentation.

**Parameter `color`:** The semantic style color slot.

**Returns:** The copied linear vector of UI color components.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Drawing/ImGui.Drawing.cs#L43).
