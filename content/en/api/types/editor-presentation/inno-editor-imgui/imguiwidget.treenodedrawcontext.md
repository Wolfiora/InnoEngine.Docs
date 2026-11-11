---
title: "ImGuiWidget.TreeNodeDrawContext"
description: "Reference for ImGuiWidget.TreeNodeDrawContext in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.335724d3f0be68dc
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.TreeNodeDrawContext`

This reference describes `ImGuiWidget.TreeNodeDrawContext` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`rowHeight`](#api-35186ea37da1edb6) | Property |

## Type declaration

<a id="api-335724d3f0be68dc"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext f8ba93301dd81cf30902cecbb05fa7ff3b5e032ecd046d9ca7f3886bf6e485cf -->

```csharp
public readonly struct Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext
```

Provides the native geometry of a tree row while its custom content is being drawn.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L464).

## `rowHeight`

<a id="api-35186ea37da1edb6"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext.rowHeight 57d050c73a084b859c3eac562e5951b9e3603f805077b8a644850c0f8a4bbc7e -->

```csharp
public float Inno.Editor.ImGui.ImGuiWidget.TreeNodeDrawContext.rowHeight { get; }
```

Gets the actual native row height established for the current tree node.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L474).
