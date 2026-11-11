---
title: "GraphCanvasView"
description: "Reference for GraphCanvasView in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.0a05c4ee5b94a76e
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: source-clr
contracts:
  - project.inno-editor-graph-imgui
---
# `GraphCanvasView`

This reference describes `GraphCanvasView` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6c3db7b4cd80a1fd) | Method |
| [`BoxNodes`](#api-df1260f3691ffe6f) | Method |
| [`DrawConnection`](#api-faa653f9e441ec7f) | Method |
| [`DrawGrid`](#api-3d76ebaab6e16eca) | Method |
| [`DrawNode`](#api-6032e3ece7e11378) | Method |
| [`HitConnection`](#api-80b9ddf9d925d3f0) | Method |
| [`HitNode`](#api-738749c96fc58357) | Method |
| [`HitPort`](#api-e003c3a4666deb1b) | Method |
| [`NodeBounds`](#api-45814f0eeb036d7a) | Method |
| [`ToGraph`](#api-4f59cd260d6560d9) | Method |
| [`ToScreen`](#api-be8793c43f2dca40) | Method |
| [`zoom`](#api-3594dade9ce75028) | Property |

## Type declaration

<a id="api-0a05c4ee5b94a76e"></a>
<!-- api: T:Inno.Editor.Graph.ImGui.GraphCanvasView ebd0487b4f3149c633c09a885e4c07c254ee35be9c1f2a4a137058ba94bc4c13 -->

```csharp
public readonly struct Inno.Editor.Graph.ImGui.GraphCanvasView
```

Projects and presents an arbitrary graph viewport without owning document mutations or domain semantics.

Draws and hit-tests neutral graph nodes using the frame's frozen viewport projection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L12).

## `#ctor`

<a id="api-6c3db7b4cd80a1fd"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.#ctor(Inno.Editor.Graph.GraphCanvasState,System.Numerics.Vector2,System.Numerics.Vector2) 4bf23f4c09bf6254ecacfde839c17fb3c99513644bc7debe372647724046ff20 -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasView.GraphCanvasView(Inno.Editor.Graph.GraphCanvasState state, System.Numerics.Vector2 origin, System.Numerics.Vector2 size)
```

Creates a frame-local graph presenter over navigation owned by its document.

**Parameter `state`:** The existing neutral navigation and selection state.

**Parameter `origin`:** The screen-space canvas origin.

**Parameter `size`:** The finite nonnegative canvas extent.

**Throws `System.ArgumentNullException`:** The document-owned navigation state is null.

**Throws `System.ArgumentOutOfRangeException`:** The canvas geometry is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L37).

## `BoxNodes`

<a id="api-df1260f3691ffe6f"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.BoxNodes(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Numerics.Vector2,System.Numerics.Vector2) d1f4a54f386bb28a626ad4d8432a2f5e12a93b6940838861dfabdae5e300a2ae -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphNodeId> Inno.Editor.Graph.ImGui.GraphCanvasView.BoxNodes(Inno.Editor.Graph.ImGui.GraphCanvasLayout layout, System.Numerics.Vector2 first, System.Numerics.Vector2 second)
```

Finds nodes intersecting a screen-space selection rectangle in document draw order.

**Parameter `layout`:** The current neutral display snapshot.

**Parameter `first`:** One corner of the selection box.

**Parameter `second`:** The opposite corner, in any drag direction.

**Returns:** Stable graph node IDs; no live domain objects are returned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L124).

## `DrawConnection`

<a id="api-faa653f9e441ec7f"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.DrawConnection(Inno.Editor.ImGui.EditorDrawList,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) e894c9193b96b0ebd9faab346bdf35e2d525986768e9a3d1751d09c4ef2f1d3c -->

```csharp
public void Inno.Editor.Graph.ImGui.GraphCanvasView.DrawConnection(Inno.Editor.ImGui.EditorDrawList draw, System.Numerics.Vector2 output, System.Numerics.Vector2 input, uint color, float thickness = 2)
```

Draws a horizontal-tangent connection using the same curve used for hit testing.

**Parameter `draw`:** The current window's frame-local drawing borrow; it is neither retained nor released by this call.

**Parameter `output`:** The output endpoint in screen space.

**Parameter `input`:** The input endpoint in screen space.

**Parameter `color`:** The packed connection color.

**Parameter `thickness`:** The positive screen-space stroke width.

**Throws `System.ArgumentOutOfRangeException`:** An endpoint or derived control point is nonfinite, or the stroke width is not positive and finite.

**Throws `System.InvalidOperationException`:** The canvas is uninitialized or a visible connection uses an expired or mismatched drawing borrow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L130).

## `DrawGrid`

<a id="api-3d76ebaab6e16eca"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.DrawGrid(System.UInt32,System.Single) cde8a13f414b287dbaea6b0976ec586638cd1a9ca114ba81604f35d1606094c0 -->

```csharp
public void Inno.Editor.Graph.ImGui.GraphCanvasView.DrawGrid(uint color, float spacing = 32)
```

Draws a bounded graph-space grid through the current UI drawing context.

**Parameter `color`:** The packed presentation color.

**Parameter `spacing`:** Positive graph-space grid spacing.

**Throws `System.ArgumentOutOfRangeException`:** Spacing is nonpositive or nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L93).

## `DrawNode`

<a id="api-6032e3ece7e11378"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.DrawNode(Inno.Editor.ImGui.EditorDrawList,Inno.Editor.Graph.ImGui.GraphCanvasNode,System.UInt32,System.Boolean,System.Action,System.Nullable{Inno.Core.Graphs.GraphPosition}) b53539ef554739c027e297dd38c90eca51617f9e47f13864771eb4e694c6fc54 -->

```csharp
public bool Inno.Editor.Graph.ImGui.GraphCanvasView.DrawNode(Inno.Editor.ImGui.EditorDrawList draw, Inno.Editor.Graph.ImGui.GraphCanvasNode node, uint headerColor, bool selected, System.Action? drawContent = null, Inno.Core.Graphs.GraphPosition? previewPosition = null)
```

Draws a visible neutral node and its ports, borrowing optional content only for this call.

**Parameter `draw`:** The current window's frame-local drawing borrow; it is neither retained nor released by this call.

**Parameter `node`:** The immutable geometric and textual node input.

**Parameter `headerColor`:** The domain-selected packed header color; the presenter does not classify node types.

**Parameter `selected`:** Whether to display the current selection outline.

**Parameter `drawContent`:** Optional frame-local custom drawing. Exceptions propagate after restoring the node clip.

**Parameter `previewPosition`:** An uncommitted movement position, or null to draw the document position.

**Returns:** True when the node intersects the canvas and effective window clip and was submitted; false when culled.

**Throws `System.ArgumentNullException`:** The node is null.

**Throws `System.InvalidOperationException`:** The canvas is uninitialized or a visible node uses an expired or mismatched drawing borrow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L173).

## `HitConnection`

<a id="api-80b9ddf9d925d3f0"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.HitConnection(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Single) 98f966a03ad3b5e451d282ed66aa1252e776595b9e538ca562740adf0ad2a222 -->

```csharp
public static bool Inno.Editor.Graph.ImGui.GraphCanvasView.HitConnection(System.Numerics.Vector2 point, System.Numerics.Vector2 output, System.Numerics.Vector2 input, float radius = 6)
```

Checks pointer distance against the displayed cubic connection without any UI or document access.

**Parameter `point`:** The screen-space pointer location.

**Parameter `output`:** The displayed output endpoint.

**Parameter `input`:** The displayed input endpoint.

**Parameter `radius`:** Nonnegative screen-space acceptance radius.

**Returns:** True when the pointer is within the curve's hit area, including its endpoints.

**Throws `System.ArgumentOutOfRangeException`:** Radius is negative or nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L187).

## `HitNode`

<a id="api-738749c96fc58357"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.HitNode(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Numerics.Vector2) d8e26e5c5142ca4367d800924b3eebc255392cb182c0ccf6fe1e626ee00f5b6b -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasNode? Inno.Editor.Graph.ImGui.GraphCanvasView.HitNode(Inno.Editor.Graph.ImGui.GraphCanvasLayout layout, System.Numerics.Vector2 point)
```

Finds the frontmost node beneath a pointer using the same geometry as drawing.

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Returns:** The frontmost neutral node, or null over empty canvas.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L48).

## `HitPort`

<a id="api-e003c3a4666deb1b"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.HitPort(Inno.Editor.Graph.ImGui.GraphCanvasLayout,System.Numerics.Vector2,System.Single) 2d719e35d4119f1e564bdfdc57c7804457102a8a07eaaf6ad9acbbc72ab2ae09 -->

```csharp
public Inno.Editor.Graph.ImGui.GraphCanvasPort? Inno.Editor.Graph.ImGui.GraphCanvasView.HitPort(Inno.Editor.Graph.ImGui.GraphCanvasLayout layout, System.Numerics.Vector2 point, float radius = 8)
```

Finds a port by its displayed socket or label row, without interpreting its domain type.

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Parameter `radius`:** The nonnegative minimum socket hit radius in screen pixels.

**Returns:** The hit neutral port, including Missing state, or null over non-port content.

**Throws `System.ArgumentOutOfRangeException`:** The radius is negative or nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L81).

## `NodeBounds`

<a id="api-45814f0eeb036d7a"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.NodeBounds(Inno.Editor.Graph.ImGui.GraphCanvasNode,System.Nullable{Inno.Core.Graphs.GraphPosition}) 36cbd92c33ee9c934a16760c871cd47d140de22714b26a7a14dfe18bb737e832 -->

```csharp
public (System.Numerics.Vector2 minimum, System.Numerics.Vector2 maximum) Inno.Editor.Graph.ImGui.GraphCanvasView.NodeBounds(Inno.Editor.Graph.ImGui.GraphCanvasNode node, Inno.Core.Graphs.GraphPosition? previewPosition = null)
```

Projects neutral node geometry, optionally substituting a transient drag position.

**Parameter `node`:** The immutable display node.

**Parameter `previewPosition`:** An uncommitted gesture position, or null to use the document position.

**Returns:** The screen-space node bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L27).

## `ToGraph`

<a id="api-4f59cd260d6560d9"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.ToGraph(System.Numerics.Vector2) 0d5f2469effa58b7edcc3ff25fdf0d3723790bbed814b04bac1218e7a1acf5a1 -->

```csharp
public Inno.Core.Graphs.GraphPosition Inno.Editor.Graph.ImGui.GraphCanvasView.ToGraph(System.Numerics.Vector2 point)
```

Converts a screen location back into graph coordinates.

**Parameter `point`:** The screen coordinate to project.

**Returns:** The graph coordinate under the pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L80).

## `ToScreen`

<a id="api-be8793c43f2dca40"></a>
<!-- api: M:Inno.Editor.Graph.ImGui.GraphCanvasView.ToScreen(Inno.Core.Graphs.GraphPosition) 121f46987030c64cc310f3e755685f39cceebfebf136afeff3e9e4d4591e885c -->

```csharp
public System.Numerics.Vector2 Inno.Editor.Graph.ImGui.GraphCanvasView.ToScreen(Inno.Core.Graphs.GraphPosition point)
```

Projects a graph-space location into the current screen rectangle.

**Parameter `point`:** The domain-independent graph coordinate.

**Returns:** The corresponding screen coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L70).

## `zoom`

<a id="api-3594dade9ce75028"></a>
<!-- api: P:Inno.Editor.Graph.ImGui.GraphCanvasView.zoom 844aed9ca6282883c4db025e3cf111d2b4ed318b0edec80b74735080be86a4cb -->

```csharp
public float Inno.Editor.Graph.ImGui.GraphCanvasView.zoom { get; }
```

Gets the graph-to-screen zoom captured for this frame, independently of later navigation changes.

**Throws `System.InvalidOperationException`:** The view was not initialized through its constructor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L59).
