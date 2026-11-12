---
title: "TreeNodeDrawContext"
description: "Reference for TreeNodeDrawContext in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.c59374c24742b6b8
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `TreeNodeDrawContext`

This reference describes `TreeNodeDrawContext` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`rowHeight`](#api-54cbb069b75d5ec5) | Property |

## Type declaration

<a id="api-c59374c24742b6b8"></a>
<!-- api: T:InnoEditor.ImGui.TreeNodeDrawContext 8b593dcbba7e5bbdb43c57952e5058ea217a6f584e62027810b58ce71d22abd8 -->

```csharp
public readonly struct InnoEditor.ImGui.TreeNodeDrawContext
```

Provides the native geometry of a tree row while its custom content is being drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L464).

## `rowHeight`

<a id="api-54cbb069b75d5ec5"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeDrawContext.rowHeight 160fd50cbbe0e30ef6bd8f55b4bb43a3e0eaa7cd2ee7695ec4e746fb2046c538 -->

```csharp
public float InnoEditor.ImGui.TreeNodeDrawContext.rowHeight { get; }
```

Gets the actual native row height established for the current tree node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L474).
