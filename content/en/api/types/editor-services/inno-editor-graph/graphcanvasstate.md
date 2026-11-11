---
title: "GraphCanvasState"
description: "Reference for GraphCanvasState in Inno.Editor.Graph."
uid: api.inno.editor.graph.75bb02d84ea26de0
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: source-clr
contracts:
  - project.inno-editor-graph
---
# `GraphCanvasState`

This reference describes `GraphCanvasState` in `Inno.Editor.Graph`. Read the [shared contract](../../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-79e999ad38b6ec13) | Method |
| [`BeginConnection`](#api-663b44de75a79a7d) | Method |
| [`BeginConnection`](#api-42c0d5d6a886b977) | Method |
| [`CancelConnection`](#api-14d6c962a1643b2a) | Method |
| [`ClearSelection`](#api-45c25474a6e257b8) | Method |
| [`PanBy`](#api-12175988079819db) | Method |
| [`SelectNodes`](#api-7621f4f2485563e0) | Method |
| [`SetViewport`](#api-3277c91b484a9e2c) | Method |
| [`ToggleNode`](#api-83553f9eb9600577) | Method |
| [`ZoomAt`](#api-0263dd5736ecda92) | Method |
| [`pan`](#api-16de2eab9ea84502) | Property |
| [`pendingConnection`](#api-8b29d68934bd5917) | Property |
| [`pendingConnectionDirection`](#api-719858168087e1e5) | Property |
| [`selectedEdges`](#api-e9a6c04d1ab5124d) | Property |
| [`selectedNodes`](#api-04ed3a6771096ee4) | Property |
| [`zoom`](#api-a57e62e374295ec8) | Property |

## Type declaration

<a id="api-75bb02d84ea26de0"></a>
<!-- api: T:Inno.Editor.Graph.GraphCanvasState 7001b776849f9c108afe699d70b136fb3c65ae3d90d436a571240789f474a257 -->

```csharp
public sealed class Inno.Editor.Graph.GraphCanvasState
```

Stores transient pan, zoom, selection and connection interaction state without ImGui dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L12).

## `#ctor`

<a id="api-79e999ad38b6ec13"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.#ctor 29bdfd7a0fe7b7ebb3cbbd30a1a6bb903b819812d282aa4cb078ec3cc54264b7 -->

```csharp
public Inno.Editor.Graph.GraphCanvasState.GraphCanvasState()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L12).

## `BeginConnection`

<a id="api-663b44de75a79a7d"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.BeginConnection(Inno.Core.Graphs.GraphEndpoint,Inno.Core.Graphs.GraphPortDirection) f45f7482f3fc2f94a4dccfa3a473334d42a5ca2b03f9b9657151bfc74ef7540d -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.BeginConnection(Inno.Core.Graphs.GraphEndpoint endpoint, Inno.Core.Graphs.GraphPortDirection direction)
```

Begins a connection drag from one endpoint.

**Parameter `endpoint`:** Stable endpoint.

**Parameter `direction`:** Direction of the endpoint within its node interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L164).

## `BeginConnection`

<a id="api-42c0d5d6a886b977"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.BeginConnection(Inno.Core.Graphs.GraphEndpoint) c339d9676f8fa83406e5b849d5b0159e294c8d4a98ca9539556bcc3b1ef41d7b -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.BeginConnection(Inno.Core.Graphs.GraphEndpoint output)
```

Begins a connection drag from one output endpoint.

**Parameter `output`:** Stable output endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L178).

## `CancelConnection`

<a id="api-14d6c962a1643b2a"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.CancelConnection a416cd573f97e2a9ff9307f057dc88976ba9530a6aab8c1522908895dc70a774 -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.CancelConnection()
```

Cancels any active connection drag.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L183).

## `ClearSelection`

<a id="api-45c25474a6e257b8"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.ClearSelection 705efe9cb19af8bd69da48fa7e220ded25177db8652b778213db90fbea7f7dbb -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.ClearSelection()
```

Clears all transient node and edge selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L147).

## `PanBy`

<a id="api-12175988079819db"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.PanBy(System.Single,System.Single) 7efde6930acf642538314c131ef04a0228a89a530798ee6197c82481a38100cd -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.PanBy(float deltaX, float deltaY)
```

Moves the canvas origin by screen-space pixels.

**Parameter `deltaX`:** Horizontal screen-space delta.

**Parameter `deltaY`:** Vertical screen-space delta.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L82).

## `SelectNodes`

<a id="api-7621f4f2485563e0"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.SelectNodes(System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId}) 56028b698e39ce5a91729bdf4acd3648b7d8f998caae486f3bed40ef65a6ec62 -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.SelectNodes(System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> nodes)
```

Replaces node selection.

**Parameter `nodes`:** Complete selected-node set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L121).

## `SetViewport`

<a id="api-3277c91b484a9e2c"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.SetViewport(Inno.Core.Graphs.GraphPosition,System.Single) 3379326ed4b4815aef99977ea526a54cdd30ecec8cc35aa148de2cb9866b6bb8 -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.SetViewport(Inno.Core.Graphs.GraphPosition pan, float zoom)
```

Restores persistent canvas navigation state with bounded zoom.

**Parameter `pan`:** Graph-space pan offset.

**Parameter `zoom`:** Requested zoom in the inclusive range 0.1 to 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L58).

## `ToggleNode`

<a id="api-83553f9eb9600577"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.ToggleNode(Inno.Core.Graphs.GraphNodeId) ca8f32b4c89a366305f14ecd11d1c5434ec3acc43708bf0ac8fb76dd66321219 -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.ToggleNode(Inno.Core.Graphs.GraphNodeId nodeId)
```

Toggles one node while preserving the remaining selection.

**Parameter `nodeId`:** Node to toggle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L135).

## `ZoomAt`

<a id="api-0263dd5736ecda92"></a>
<!-- api: M:Inno.Editor.Graph.GraphCanvasState.ZoomAt(System.Single,System.Single,System.Single) 766971bf2e645bcb7c9af576b4764efd8b2d97501074ebdbabb723bb09b9c8fb -->

```csharp
public void Inno.Editor.Graph.GraphCanvasState.ZoomAt(float factor, float pivotX, float pivotY)
```

Changes zoom while preserving the graph point beneath a screen-space pivot.

**Parameter `factor`:** Positive multiplicative zoom factor.

**Parameter `pivotX`:** Screen-space pivot X.

**Parameter `pivotY`:** Screen-space pivot Y.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L99).

## `pan`

<a id="api-16de2eab9ea84502"></a>
<!-- api: P:Inno.Editor.Graph.GraphCanvasState.pan 98019c10914193873d4f07dffa6203f8ef34bceb8660c5fcaf7194e2e054f8f9 -->

```csharp
public Inno.Core.Graphs.GraphPosition Inno.Editor.Graph.GraphCanvasState.pan { get; private set; }
```

Gets the graph-space origin mapped to canvas screen origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L22).

## `pendingConnection`

<a id="api-8b29d68934bd5917"></a>
<!-- api: P:Inno.Editor.Graph.GraphCanvasState.pendingConnection 0cb41c3d3d489c25036c86e43858dd86cb1b3b0d5c71330f3730398c33530b4c -->

```csharp
public Inno.Core.Graphs.GraphEndpoint? Inno.Editor.Graph.GraphCanvasState.pendingConnection { get; private set; }
```

Gets the endpoint currently being connected, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L42).

## `pendingConnectionDirection`

<a id="api-719858168087e1e5"></a>
<!-- api: P:Inno.Editor.Graph.GraphCanvasState.pendingConnectionDirection cb80a0a15350dec6b50a5563b2d735ed106794c9301f22555bd2d28a3b513c2a -->

```csharp
public Inno.Core.Graphs.GraphPortDirection? Inno.Editor.Graph.GraphCanvasState.pendingConnectionDirection { get; private set; }
```

Gets the direction of `Inno.Editor.Graph.GraphCanvasState.pendingConnection`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L47).

## `selectedEdges`

<a id="api-e9a6c04d1ab5124d"></a>
<!-- api: P:Inno.Editor.Graph.GraphCanvasState.selectedEdges 00c2b2ef6b1e50bef4f82bd7679d813a57a38bd54219aa6a92fad08973ae5f52 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Graphs.GraphEdgeId> Inno.Editor.Graph.GraphCanvasState.selectedEdges { get; }
```

Gets selected edge identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L37).

## `selectedNodes`

<a id="api-04ed3a6771096ee4"></a>
<!-- api: P:Inno.Editor.Graph.GraphCanvasState.selectedNodes 1c1118d8f12c0d4e0a4b65eef8b74d7e2aabc066cc4f54b2f258bb65f0aedf6f -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<Inno.Core.Graphs.GraphNodeId> Inno.Editor.Graph.GraphCanvasState.selectedNodes { get; }
```

Gets selected node identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L32).

## `zoom`

<a id="api-a57e62e374295ec8"></a>
<!-- api: P:Inno.Editor.Graph.GraphCanvasState.zoom 6d8e32814c426d986eb3bbdb6f2fee7dfe4651aba58aa3e598e030c97f684c38 -->

```csharp
public float Inno.Editor.Graph.GraphCanvasState.zoom { get; private set; }
```

Gets the current graph-to-screen scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L27).
