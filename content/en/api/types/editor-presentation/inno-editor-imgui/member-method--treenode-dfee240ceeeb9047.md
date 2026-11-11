---
title: "ImGui — Method: TreeNode"
description: "Exact Method: TreeNode contracts in ImGui."
uid: api.inno.editor.imgui.dfee240ceeeb9047
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
  - api.inno.editor.imgui.e0d3ffa7c449fd75#type-declaration
---
# `ImGui`: Method: TreeNode

Read these exact member contracts together with the [containing type](imgui.md) and its [shared ownership contract](../../../projects/inno-editor-imgui.md).

**Source context:** `source-clr`, configuration `Debug`. This page does not certify execution on other platforms.

## `TreeNode`

<a id="api-6947d1c52eb53e31"></a>
<!-- api: M:Inno.Editor.ImGui.ImGui.TreeNode(System.String,Inno.Editor.ImGui.ImGuiTreeNodeFlags) 72530080ee9c279499390ed08035c15f977edaf3256aa605efa5debb99a7592f -->

```csharp
public static bool Inno.Editor.ImGui.ImGui.TreeNode(string label, Inno.Editor.ImGui.ImGuiTreeNodeFlags flags = Inno.Editor.ImGui.ImGuiTreeNodeFlags.None)
```

Draws a tree node and pushes its tree scope when it is open.

**Parameter `label`:** The visible label and identity.

**Parameter `flags`:** Tree-node behavior.

**Returns:** `true` when child contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L558).
