---
title: "ImGuiWidget.TreeNodeOptions"
description: "Reference for ImGuiWidget.TreeNodeOptions in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.331cdc9c644283e3
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-imgui
---
# `ImGuiWidget.TreeNodeOptions`

This reference describes `ImGuiWidget.TreeNodeOptions` in `Inno.Editor.ImGui`. Read the [shared contract](../../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`backgroundColor`](#api-addf6136de2d52d0) | Property |
| [`depth`](#api-1fe60123d2594805) | Property |
| [`drawViewportOverlay`](#api-0c3269409fefa241) | Property |
| [`hideGuideLines`](#api-bbf34bb7a6fb4f1e) | Property |
| [`isLeaf`](#api-1e9c92fb6f64cc61) | Property |
| [`keepContentActive`](#api-dd7155d2a5afd321) | Property |
| [`requestFocus`](#api-9e763c14e04ea4b9) | Property |
| [`selected`](#api-705be34aa17a3712) | Property |
| [`showBackground`](#api-5122bce04dd48218) | Property |
| [`suppressHoverHighlight`](#api-b43ad31f53145a6a) | Property |

## Type declaration

<a id="api-331cdc9c644283e3"></a>
<!-- api: T:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions 4abd6010878fd5bdb76df7434efaed8ea43093f1b00448395f6418847024dea7 -->

```csharp
public readonly struct Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions
```

Configures an interactive tree row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L480).

## `backgroundColor`

<a id="api-addf6136de2d52d0"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.backgroundColor 2ef654d13af567368c44aa62ee37182e8da361341ed09e76eb50c494e5d4a7e6 -->

```csharp
public System.Numerics.Vector4 Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.backgroundColor { get; init; }
```

Gets the custom background color used when `Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.showBackground` is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L512).

## `depth`

<a id="api-1fe60123d2594805"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.depth d5ac642a56808e6a0d51ff495a7003259b7a72eaedd47d366624327a72816c33 -->

```csharp
public int? Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.depth { get; init; }
```

Gets explicit indentation for a flattened row, or null for a nested native tree.
Explicit-depth rows never push a native tree scope; callers must not call TreePop for them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L486).

## `drawViewportOverlay`

<a id="api-0c3269409fefa241"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.drawViewportOverlay ef8a1744598002d190cd3b925dc716a688f300a48ad585fedbcbbb9881018485 -->

```csharp
public System.Action? Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.drawViewportOverlay { get; init; }
```

Gets the callback that draws controls fixed to the current viewport without extending the
tree's horizontal content boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L525).

## `hideGuideLines`

<a id="api-bbf34bb7a6fb4f1e"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.hideGuideLines ebd6058b5fffcb7f5ac3861dc923ef1d63a7ec9cbad737dfa6960caea06b8c95 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.hideGuideLines { get; init; }
```

Gets whether ancestor and branch guide lines are omitted for this row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L520).

## `isLeaf`

<a id="api-1e9c92fb6f64cc61"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.isLeaf 1e2ae567ce0990580867b4f09360ac5215a04821e8bd2d380b4ea362f343523b -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.isLeaf { get; init; }
```

Gets whether the row has no expandable children.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L504).

## `keepContentActive`

<a id="api-dd7155d2a5afd321"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.keepContentActive 5a6368142c33ea0b2438b69b1c0ade67aafd7523f99acba7407fe2f67185716a -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.keepContentActive { get; init; }
```

Gets whether an active edit requires content submission even while its row is clipped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L495).

## `requestFocus`

<a id="api-9e763c14e04ea4b9"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.requestFocus 8b9d30b3c65dca2bb3cd38475dd38d370cdb0eae0ff9646eda9dc429b3540977 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.requestFocus { get; init; }
```

Gets whether this row should receive keyboard focus during this submission when its tree window is focused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L490).

## `selected`

<a id="api-705be34aa17a3712"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.selected 8711d12d22e8830128104f3a3682ffc7298d4b16fad03b33928d2bb7c0e4998e -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.selected { get; init; }
```

Gets whether the row is selected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L500).

## `showBackground`

<a id="api-5122bce04dd48218"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.showBackground d3457b831de7c5bb44f3fb1d02ebfcb728671d5d0f695efad51971d13ce40cee -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.showBackground { get; init; }
```

Gets whether a custom background is drawn behind an unselected row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L508).

## `suppressHoverHighlight`

<a id="api-b43ad31f53145a6a"></a>
<!-- api: P:Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.suppressHoverHighlight 1c4774907985f73d651fb5e81c2d8a1af174dd282540b18fc9a800128f11f437 -->

```csharp
public bool Inno.Editor.ImGui.ImGuiWidget.TreeNodeOptions.suppressHoverHighlight { get; init; }
```

Gets whether the row keeps its configured background while hovered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L516).
