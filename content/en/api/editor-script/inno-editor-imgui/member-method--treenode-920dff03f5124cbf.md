---
title: "ImGui — Method: TreeNode"
description: "Exact Method: TreeNode contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.920dff03f5124cbf
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: TreeNode

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `TreeNode`

<a id="api-a988a4786e713284"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.TreeNode(System.String,InnoEditor.ImGui.ImGuiTreeNodeFlags) cf17356704fa5c6130da509e701f3b68822679c851cb26e8a34f74d846c0d1e2 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.TreeNode(string label, InnoEditor.ImGui.ImGuiTreeNodeFlags flags = InnoEditor.ImGui.ImGuiTreeNodeFlags.None)
```

Draws a tree node and pushes its tree scope when it is open.

**Parameter `label`:** The visible label and identity.

**Parameter `flags`:** Tree-node behavior.

**Returns:** `true` when child contents should be submitted.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L558).
