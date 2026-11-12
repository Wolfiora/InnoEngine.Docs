---
title: "ImGui — Method: CollapsingHeader"
description: "Exact Method: CollapsingHeader contracts in ImGui."
uid: api.inno.editor.imgui.editor-script.ef7a73b7c6251013
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
  - api.inno.editor.imgui.editor-script.00baca154a6f58ab#type-declaration
---
# `ImGui`: Method: CollapsingHeader

Read these exact member contracts together with the [containing type](innoeditor.imgui.imgui.md) and its [shared ownership contract](../../projects/inno-editor-imgui.md).

**Source context:** `editor-script`, configuration `Debug`. This page does not certify execution on other platforms.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

## `CollapsingHeader`

<a id="api-1238ed42f8eac48a"></a>
<!-- api: M:InnoEditor.ImGui.ImGui.CollapsingHeader(System.String,InnoEditor.ImGui.ImGuiTreeNodeFlags) 1c42b5d0be6b14d06a954804ed70f12944af8f1725647e23b7654b95762a7257 -->

```csharp
public static bool InnoEditor.ImGui.ImGui.CollapsingHeader(string label, InnoEditor.ImGui.ImGuiTreeNodeFlags flags = InnoEditor.ImGui.ImGuiTreeNodeFlags.None)
```

Draws a collapsible section header.

**Parameter `label`:** The visible label and identity.

**Parameter `flags`:** Tree-node behavior.

**Returns:** `true` when the section is open.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/ImGui.cs#L538).
