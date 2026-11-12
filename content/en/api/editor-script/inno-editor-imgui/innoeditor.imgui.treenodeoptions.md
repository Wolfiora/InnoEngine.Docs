---
title: "TreeNodeOptions"
description: "Reference for TreeNodeOptions in Inno.Editor.ImGui."
uid: api.inno.editor.imgui.editor-script.3711c9c968b33e23
kind: api
owners:
  - Inno.Editor.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-imgui
  - manual.scripting.use-script-api
---
# `TreeNodeOptions`

This reference describes `TreeNodeOptions` in `Inno.Editor.ImGui`. Read the [shared contract](../../projects/inno-editor-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`backgroundColor`](#api-79b3972aa61e08be) | Property |
| [`depth`](#api-555819e75dff01fa) | Property |
| [`drawViewportOverlay`](#api-5fffc83e31b029fd) | Property |
| [`hideGuideLines`](#api-51cf8b61b808f36a) | Property |
| [`isLeaf`](#api-0fd1103aa051574b) | Property |
| [`keepContentActive`](#api-6937376947284a9d) | Property |
| [`requestFocus`](#api-62dcf76ff856ae4a) | Property |
| [`selected`](#api-ab47ffd395671e88) | Property |
| [`showBackground`](#api-758a4c723b91e9b3) | Property |
| [`suppressHoverHighlight`](#api-0c1145257ebb4c86) | Property |

## Type declaration

<a id="api-3711c9c968b33e23"></a>
<!-- api: T:InnoEditor.ImGui.TreeNodeOptions a69ea513e2ec6f835d7264f5eab073ffb0594467e9c660af584a4bd2607f7c5f -->

```csharp
public readonly struct InnoEditor.ImGui.TreeNodeOptions
```

Configures an interactive tree row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L480).

## `backgroundColor`

<a id="api-79b3972aa61e08be"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.backgroundColor cf8e66baaa3bca832576a6cf0d79988c364c4109761ecaa12445bdbe1098621f -->

```csharp
public System.Numerics.Vector4 InnoEditor.ImGui.TreeNodeOptions.backgroundColor { get; set; }
```

Gets the custom background color used when `InnoEditor.ImGui.TreeNodeOptions.showBackground` is enabled.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L512).

## `depth`

<a id="api-555819e75dff01fa"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.depth c5875bf8fbd14e5632c85dc102750d24835eda9774bac5eb1e360f63571d33c9 -->

```csharp
public int? InnoEditor.ImGui.TreeNodeOptions.depth { get; set; }
```

Gets explicit indentation for a flattened row, or null for a nested native tree.
Explicit-depth rows never push a native tree scope; callers must not call TreePop for them.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L486).

## `drawViewportOverlay`

<a id="api-5fffc83e31b029fd"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.drawViewportOverlay a5bfc075a13d411935083b630ed924ebb365ff2416fd9a3801242b768a7822ec -->

```csharp
public System.Action? InnoEditor.ImGui.TreeNodeOptions.drawViewportOverlay { get; set; }
```

Gets the callback that draws controls fixed to the current viewport without extending the
tree's horizontal content boundary.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L525).

## `hideGuideLines`

<a id="api-51cf8b61b808f36a"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.hideGuideLines fd6bf565c5fe0623d051b15a54ae64ffb948ea34f7393208d7109e9981f28a98 -->

```csharp
public bool InnoEditor.ImGui.TreeNodeOptions.hideGuideLines { get; set; }
```

Gets whether ancestor and branch guide lines are omitted for this row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L520).

## `isLeaf`

<a id="api-0fd1103aa051574b"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.isLeaf 721711ffc8d89a14a0a3026d152ccb76c489963f921099769115aa043ee1eda0 -->

```csharp
public bool InnoEditor.ImGui.TreeNodeOptions.isLeaf { get; set; }
```

Gets whether the row has no expandable children.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L504).

## `keepContentActive`

<a id="api-6937376947284a9d"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.keepContentActive 147c0d38c5ee5897dae1cbe29b2a9f58378802e179f0a5037837e78624f214cb -->

```csharp
public bool InnoEditor.ImGui.TreeNodeOptions.keepContentActive { get; set; }
```

Gets whether an active edit requires content submission even while its row is clipped.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L495).

## `requestFocus`

<a id="api-62dcf76ff856ae4a"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.requestFocus a586a39fb87637fea0a0f5dc7de2fa01f79fe62b2efe515c105c846ff015c7aa -->

```csharp
public bool InnoEditor.ImGui.TreeNodeOptions.requestFocus { get; set; }
```

Gets whether this row should receive keyboard focus during this submission when its tree window is focused.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L490).

## `selected`

<a id="api-ab47ffd395671e88"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.selected a272c5df47813c9c05121129ea789b272d48cc26881687cba92c5d85336b190f -->

```csharp
public bool InnoEditor.ImGui.TreeNodeOptions.selected { get; set; }
```

Gets whether the row is selected.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L500).

## `showBackground`

<a id="api-758a4c723b91e9b3"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.showBackground 9923bd9d6e31c1ae56628f2202ff9d0195a8d320b5006186747a021339a2e4b0 -->

```csharp
public bool InnoEditor.ImGui.TreeNodeOptions.showBackground { get; set; }
```

Gets whether a custom background is drawn behind an unselected row.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L508).

## `suppressHoverHighlight`

<a id="api-0c1145257ebb4c86"></a>
<!-- api: P:InnoEditor.ImGui.TreeNodeOptions.suppressHoverHighlight 6d374e3d73ae35e384fc39b5b508b010ab2def28a1096509dacab1a5f7637d1f -->

```csharp
public bool InnoEditor.ImGui.TreeNodeOptions.suppressHoverHighlight { get; set; }
```

Gets whether the row keeps its configured background while hovered.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.ImGui/Widgets/ImGuiWidget.Tree.cs#L516).
