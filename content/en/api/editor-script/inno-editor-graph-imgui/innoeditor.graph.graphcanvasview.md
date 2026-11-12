---
title: "GraphCanvasView"
description: "Reference for GraphCanvasView in Inno.Editor.Graph.ImGui."
uid: api.inno.editor.graph.imgui.editor-script.982034e455b8d1f1
kind: api
owners:
  - Inno.Editor.Graph.ImGui
apiSurface: editor-script
contracts:
  - project.inno-editor-graph-imgui
  - manual.scripting.use-script-api
---
# `GraphCanvasView`

This reference describes `GraphCanvasView` in `Inno.Editor.Graph.ImGui`. Read the [shared contract](../../projects/inno-editor-graph-imgui.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3d6ed0150dd4b52e) | Method |
| [`BoxNodes`](#api-5366fc2f1f236b99) | Method |
| [`DrawConnection`](#api-d61d3e3f197ee311) | Method |
| [`DrawGrid`](#api-c75ef02f9c24a493) | Method |
| [`DrawNode`](#api-28ed65b7b86bddb3) | Method |
| [`HitConnection`](#api-2f537a61ae508d6b) | Method |
| [`HitNode`](#api-81f2d3d7036e9c66) | Method |
| [`HitPort`](#api-29769f4cff590d01) | Method |
| [`NodeBounds`](#api-e3529a53fcf263ab) | Method |
| [`ToGraph`](#api-04c58a196f76d000) | Method |
| [`ToScreen`](#api-9f7adc0c34570c47) | Method |
| [`zoom`](#api-3aa2a84e52b93567) | Property |

## Type declaration

<a id="api-982034e455b8d1f1"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasView 0bed65e51b4ed185388343fd762790c40c061ab6f98b4f460d0a316f4c10b57f -->

```csharp
public readonly struct InnoEditor.Graph.GraphCanvasView
```

Projects and presents an arbitrary graph viewport without owning document mutations or domain semantics.

Draws and hit-tests neutral graph nodes using the frame's frozen viewport projection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L12).

## `#ctor`

<a id="api-3d6ed0150dd4b52e"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.#ctor(InnoEditor.Graph.GraphCanvasState,System.Numerics.Vector2,System.Numerics.Vector2) 4fea2c3c98e868c2caa156cfe102d44e2b6c3aa402a65858b23d7ec763d732ac -->

```csharp
public InnoEditor.Graph.GraphCanvasView.GraphCanvasView(InnoEditor.Graph.GraphCanvasState state, System.Numerics.Vector2 origin, System.Numerics.Vector2 size)
```

Creates a frame-local graph presenter over navigation owned by its document.

**Parameter `state`:** The existing neutral navigation and selection state.

**Parameter `origin`:** The screen-space canvas origin.

**Parameter `size`:** The finite nonnegative canvas extent.

**Throws `System.ArgumentNullException`:** The document-owned navigation state is null.

**Throws `System.ArgumentOutOfRangeException`:** The canvas geometry is invalid.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L37).

## `BoxNodes`

<a id="api-5366fc2f1f236b99"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.BoxNodes(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2,System.Numerics.Vector2) e74bddc3d268334b71c21302c41fd1c5669253b45ae020407c5968299a427131 -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphNodeId> InnoEditor.Graph.GraphCanvasView.BoxNodes(InnoEditor.Graph.GraphCanvasLayout layout, System.Numerics.Vector2 first, System.Numerics.Vector2 second)
```

Finds nodes intersecting a screen-space selection rectangle in document draw order.

**Parameter `layout`:** The current neutral display snapshot.

**Parameter `first`:** One corner of the selection box.

**Parameter `second`:** The opposite corner, in any drag direction.

**Returns:** Stable graph node IDs; no live domain objects are returned.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L124).

## `DrawConnection`

<a id="api-d61d3e3f197ee311"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.DrawConnection(InnoEditor.ImGui.EditorDrawList,System.Numerics.Vector2,System.Numerics.Vector2,System.UInt32,System.Single) 0e689510f221ef6ab58578353bdfbbd67e7e9a180c2afb0cb7f822cdd874478a -->

```csharp
public void InnoEditor.Graph.GraphCanvasView.DrawConnection(InnoEditor.ImGui.EditorDrawList draw, System.Numerics.Vector2 output, System.Numerics.Vector2 input, uint color, float thickness = 2)
```

Draws a horizontal-tangent connection using the same curve used for hit testing.

**Parameter `draw`:** The current window's frame-local drawing borrow; it is neither retained nor released by this call.

**Parameter `output`:** The output endpoint in screen space.

**Parameter `input`:** The input endpoint in screen space.

**Parameter `color`:** The packed connection color.

**Parameter `thickness`:** The positive screen-space stroke width.

**Throws `System.ArgumentOutOfRangeException`:** An endpoint or derived control point is nonfinite, or the stroke width is not positive and finite.

**Throws `System.InvalidOperationException`:** The canvas is uninitialized or a visible connection uses an expired or mismatched drawing borrow.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L130).

## `DrawGrid`

<a id="api-c75ef02f9c24a493"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.DrawGrid(System.UInt32,System.Single) 5792da075eee318b22dbb987cb685c90287dc04f78761859c89b5ca08191da0d -->

```csharp
public void InnoEditor.Graph.GraphCanvasView.DrawGrid(uint color, float spacing = 32)
```

Draws a bounded graph-space grid through the current UI drawing context.

**Parameter `color`:** The packed presentation color.

**Parameter `spacing`:** Positive graph-space grid spacing.

**Throws `System.ArgumentOutOfRangeException`:** Spacing is nonpositive or nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L93).

## `DrawNode`

<a id="api-28ed65b7b86bddb3"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.DrawNode(InnoEditor.ImGui.EditorDrawList,InnoEditor.Graph.GraphCanvasNode,System.UInt32,System.Boolean,System.Action,System.Nullable{InnoEngine.Graphs.GraphPosition}) 9b9a2d7609c82af8726870f4d3121e7cc1621cea39471048573ebb0bd45d168b -->

```csharp
public bool InnoEditor.Graph.GraphCanvasView.DrawNode(InnoEditor.ImGui.EditorDrawList draw, InnoEditor.Graph.GraphCanvasNode node, uint headerColor, bool selected, System.Action? drawContent = null, InnoEngine.Graphs.GraphPosition? previewPosition = null)
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


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L173).

## `HitConnection`

<a id="api-2f537a61ae508d6b"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.HitConnection(System.Numerics.Vector2,System.Numerics.Vector2,System.Numerics.Vector2,System.Single) 427aec0e40f0cf893f6f8928333bb4663374aab8bb7714daf14995f870405947 -->

```csharp
public static bool InnoEditor.Graph.GraphCanvasView.HitConnection(System.Numerics.Vector2 point, System.Numerics.Vector2 output, System.Numerics.Vector2 input, float radius = 6)
```

Checks pointer distance against the displayed cubic connection without any UI or document access.

**Parameter `point`:** The screen-space pointer location.

**Parameter `output`:** The displayed output endpoint.

**Parameter `input`:** The displayed input endpoint.

**Parameter `radius`:** Nonnegative screen-space acceptance radius.

**Returns:** True when the pointer is within the curve's hit area, including its endpoints.

**Throws `System.ArgumentOutOfRangeException`:** Radius is negative or nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L187).

## `HitNode`

<a id="api-81f2d3d7036e9c66"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.HitNode(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2) dd09873d73758c61b80984a6d7b858641997f6d961f1ea6ee89fb17afc222655 -->

```csharp
public InnoEditor.Graph.GraphCanvasNode? InnoEditor.Graph.GraphCanvasView.HitNode(InnoEditor.Graph.GraphCanvasLayout layout, System.Numerics.Vector2 point)
```

Finds the frontmost node beneath a pointer using the same geometry as drawing.

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Returns:** The frontmost neutral node, or null over empty canvas.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L48).

## `HitPort`

<a id="api-29769f4cff590d01"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.HitPort(InnoEditor.Graph.GraphCanvasLayout,System.Numerics.Vector2,System.Single) 65739f807d9265845ab24effdde9b96ba87564358f07d66bcf3ecb2ed9f6bfbb -->

```csharp
public InnoEditor.Graph.GraphCanvasPort? InnoEditor.Graph.GraphCanvasView.HitPort(InnoEditor.Graph.GraphCanvasLayout layout, System.Numerics.Vector2 point, float radius = 8)
```

Finds a port by its displayed socket or label row, without interpreting its domain type.

**Parameter `layout`:** The current document presentation snapshot.

**Parameter `point`:** The screen-space pointer.

**Parameter `radius`:** The nonnegative minimum socket hit radius in screen pixels.

**Returns:** The hit neutral port, including Missing state, or null over non-port content.

**Throws `System.ArgumentOutOfRangeException`:** The radius is negative or nonfinite.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L81).

## `NodeBounds`

<a id="api-e3529a53fcf263ab"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.NodeBounds(InnoEditor.Graph.GraphCanvasNode,System.Nullable{InnoEngine.Graphs.GraphPosition}) 84d60dd98050ecd3a221b93f6bb301ea8b496bc72739594c217c4df2849ce0b7 -->

```csharp
public (System.Numerics.Vector2, System.Numerics.Vector2) InnoEditor.Graph.GraphCanvasView.NodeBounds(InnoEditor.Graph.GraphCanvasNode node, InnoEngine.Graphs.GraphPosition? previewPosition = null)
```

Projects neutral node geometry, optionally substituting a transient drag position.

**Parameter `node`:** The immutable display node.

**Parameter `previewPosition`:** An uncommitted gesture position, or null to use the document position.

**Returns:** The screen-space node bounds.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.Nodes.cs#L27).

## `ToGraph`

<a id="api-04c58a196f76d000"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.ToGraph(System.Numerics.Vector2) ea29aa0750f044b4ea48bf8a48e5387d2878786bf1b312497ae9baa08e27bf6c -->

```csharp
public InnoEngine.Graphs.GraphPosition InnoEditor.Graph.GraphCanvasView.ToGraph(System.Numerics.Vector2 point)
```

Converts a screen location back into graph coordinates.

**Parameter `point`:** The screen coordinate to project.

**Returns:** The graph coordinate under the pointer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L80).

## `ToScreen`

<a id="api-9f7adc0c34570c47"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasView.ToScreen(InnoEngine.Graphs.GraphPosition) 031ed7ce2bc2bdaa2564f99cbbb0e6c14c7f74f147e5c86c74543efcf0297e8e -->

```csharp
public System.Numerics.Vector2 InnoEditor.Graph.GraphCanvasView.ToScreen(InnoEngine.Graphs.GraphPosition point)
```

Projects a graph-space location into the current screen rectangle.

**Parameter `point`:** The domain-independent graph coordinate.

**Returns:** The corresponding screen coordinate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L70).

## `zoom`

<a id="api-3aa2a84e52b93567"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasView.zoom 8559987cce710e985cfa2ffc5d246feb3770703aaa5b9d1cd308d6ff42ae337f -->

```csharp
public float InnoEditor.Graph.GraphCanvasView.zoom { get; }
```

Gets the graph-to-screen zoom captured for this frame, independently of later navigation changes.

**Throws `System.InvalidOperationException`:** The view was not initialized through its constructor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/presentation/Inno.Editor.Graph.ImGui/Canvas/GraphCanvasView.cs#L59).
