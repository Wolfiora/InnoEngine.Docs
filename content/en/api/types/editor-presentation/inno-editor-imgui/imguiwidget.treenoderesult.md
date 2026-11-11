---
title: "ImGuiWidget.TreeNodeResult"
description: "Reference for ImGuiWidget.TreeNodeResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.3428e09e4fd192f2
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.TreeNodeResult`

This reference describes `ImGuiWidget.TreeNodeResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`contentMin`](#api-04746bffe73deba1) | Property |
| [`isClicked`](#api-b9dd235ad6c75e1d) | Property |
| [`isDoubleClicked`](#api-cdb53c2627a4879e) | Property |
| [`isHovered`](#api-f26bbcc9646dc2cf) | Property |
| [`isOpen`](#api-555c6fc724d54226) | Property |
| [`isSubmitted`](#api-2845e93adef4923a) | Property |
| [`max`](#api-c2f34732c8ad422a) | Property |
| [`min`](#api-c594ef21e2b1bb46) | Property |

## Type declaration

<a id="api-3428e09e4fd192f2"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult df2f85dd2ae360b8d238783535ba9229f16664b5e42f159f42495d6ce9852f29 -->

```csharp
public readonly struct Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult
```

Describes interaction state produced by a tree row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L531).

## `contentMin`

<a id="api-04746bffe73deba1"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.contentMin 55849fb52ff37fc8ba06fae08abd31c08dc61ba3da2ec265956aadabda98d26a -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.contentMin { get; }
```

Gets the minimum screen coordinate of the row's interactive content, excluding tree indentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L586).

## `isClicked`

<a id="api-b9dd235ad6c75e1d"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isClicked db064b691bfa72311783053540b43be627930d2c39c1172595290d8b45e02c9e -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isClicked { get; }
```

Gets whether the content row was clicked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L565).

## `isDoubleClicked`

<a id="api-cdb53c2627a4879e"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isDoubleClicked b15e2d211d106f34d78843d12d51fc02fd047391a9ba695fc666252a47495b79 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isDoubleClicked { get; }
```

Gets whether the content row was double-clicked. Double-clicking a non-leaf content row
also toggles its retained expansion state for the next frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L570).

## `isHovered`

<a id="api-f26bbcc9646dc2cf"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isHovered dd5f4406d571ba64bfdf01772c07f65791d9d7d5165d1fe65fd2f632986a7d94 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isHovered { get; }
```

Gets whether the full row is hovered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L574).

## `isOpen`

<a id="api-555c6fc724d54226"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isOpen d8775c7433d67d9611a575933338dfc03c1536abb948ad31e40d8e86a3ef7f72 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isOpen { get; }
```

Gets whether child content should be rendered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L561).

## `isSubmitted`

<a id="api-2845e93adef4923a"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isSubmitted 4989945cd8303650205899a6e1d89cd3b12868b0ea3ab3af874d6dc68eaaf957 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.isSubmitted { get; }
```

Gets whether row controls were submitted; ordinary clipped rows are false, while preserved active edits remain true.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L556).

## `max`

<a id="api-c2f34732c8ad422a"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.max f93d7674cef7563e5edf7c483716bcdfe619eae71754345eda3a6d23baf63ee2 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.max { get; }
```

Gets the row maximum screen coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L582).

## `min`

<a id="api-c594ef21e2b1bb46"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.min 9f3d837e2b6c61e597e305e6ffedb4e96a74567d842c1abca85b139a1766c3a9 -->

```csharp
public System.Numerics.Vector2 Inno.Editor.ImGui.ImGuiWidget.TreeNodeResult.min { get; }
```

Gets the row minimum screen coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L578).
