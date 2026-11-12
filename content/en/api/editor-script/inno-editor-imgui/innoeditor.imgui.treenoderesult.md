---
title: "TreeNodeResult"
description: "Reference for TreeNodeResult in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.e57f995c0326bc52
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `TreeNodeResult`

This reference describes `TreeNodeResult` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`contentMin`](#api-13a9058a9215116e) | Property |
| [`isClicked`](#api-73b7338e7d50053f) | Property |
| [`isDoubleClicked`](#api-4cf4235496bd3ad6) | Property |
| [`isHovered`](#api-672835900fde976b) | Property |
| [`isOpen`](#api-9212816cb5b29561) | Property |
| [`isSubmitted`](#api-53a96635cd32965e) | Property |
| [`max`](#api-031f873419dff148) | Property |
| [`min`](#api-86589d12f0bd8c1b) | Property |

## Type declaration

<a id="api-e57f995c0326bc52"></a>
<!-- api: T:InnoEditor.ImGui.TreeNodeResult 4d247e205c5e1886d3450e395e4d8b464fdebe8b1cd4999ae25e7f01b41ac747 -->

```csharp
public readonly struct InnoEditor.ImGui.TreeNodeResult
```

Describes interaction state produced by a tree row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L531).

## `contentMin`

<a id="api-13a9058a9215116e"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.contentMin 79a55746066f66d9ef0f6d5eda44a6b2537acac16eac7e6a29e51d8c70ad1b75 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.TreeNodeResult.contentMin { get; }
```

Gets the minimum screen coordinate of the row's interactive content, excluding tree indentation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L586).

## `isClicked`

<a id="api-73b7338e7d50053f"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.isClicked 7a3edf853663d4eff2808bacea6a1a0d667a0fae79369dc1f5462471e329905d -->

```csharp
public bool InnoEditor.ImGui.TreeNodeResult.isClicked { get; }
```

Gets whether the content row was clicked.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L565).

## `isDoubleClicked`

<a id="api-4cf4235496bd3ad6"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.isDoubleClicked 8e49fe442102bd9a8c440f3d7223a052ab4744fbe38105d23c8e0769d7a5c3a1 -->

```csharp
public bool InnoEditor.ImGui.TreeNodeResult.isDoubleClicked { get; }
```

Gets whether the content row was double-clicked. Double-clicking a non-leaf content row
also toggles its retained expansion state for the next frame.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L570).

## `isHovered`

<a id="api-672835900fde976b"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.isHovered d1afb94916f6d9e0f3ec126562670221799d578f6491e6bfab937750bf27bccd -->

```csharp
public bool InnoEditor.ImGui.TreeNodeResult.isHovered { get; }
```

Gets whether the full row is hovered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L574).

## `isOpen`

<a id="api-9212816cb5b29561"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.isOpen 6db207b4242cd71cc48cb28d20b1363d18d24a159dc020b712eec0d49ff217a5 -->

```csharp
public bool InnoEditor.ImGui.TreeNodeResult.isOpen { get; }
```

Gets whether child content should be rendered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L561).

## `isSubmitted`

<a id="api-53a96635cd32965e"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.isSubmitted 13cb2b9adaf47c72fa24781c2499d57f753c53ff51bcaa668829421565e4bf4f -->

```csharp
public bool InnoEditor.ImGui.TreeNodeResult.isSubmitted { get; }
```

Gets whether row controls were submitted; ordinary clipped rows are false, while preserved active edits remain true.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L556).

## `max`

<a id="api-031f873419dff148"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.max b39328e9371551fa8a03f10febff6573668a2b5cc14b23c7dd2d5734ccec1176 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.TreeNodeResult.max { get; }
```

Gets the row maximum screen coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L582).

## `min`

<a id="api-86589d12f0bd8c1b"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeResult.min 2296033278a437cb979af96cc685dc8ae1e4e216da4c4071920243e187c77803 -->

```csharp
public System.Numerics.Vector2 InnoEditor.ImGui.TreeNodeResult.min { get; }
```

Gets the row minimum screen coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L578).
