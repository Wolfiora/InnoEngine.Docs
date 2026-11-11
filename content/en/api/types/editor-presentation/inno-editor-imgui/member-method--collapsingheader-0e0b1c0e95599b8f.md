---
title: "ImGui — Method: CollapsingHeader"
description: "Exact Method: CollapsingHeader contracts in ImGui."
uid: api.inno.editor.imgui.0e0b1c0e95599b8f
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: CollapsingHeader

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `CollapsingHeader`

<a id="api-0658cce3de50e69e"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.CollapsingHeader(System.String,Inno.Editor.ImGui.ImGuiTreeNodeFlags) dcc0b8bf55b9a0c43da05703f8d7a17def046354f15110d039510cfaa2db363b -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.CollapsingHeader(string label, Inno.Editor.ImGui.ImGuiTreeNodeFlags flags = Inno.Editor.ImGui.ImGuiTreeNodeFlags.None)
```

Draws a collapsible section header.

**Parameter `label`:** The visible label and identity.

**Parameter `flags`:** Tree-node behavior.

**Returns:** `true` when the section is open.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L538).
