---
title: "GraphCanvasState"
description: "Reference for GraphCanvasState in Inno.Editor.Graph."
uid: api.inno.editor.graph.editor-script.d25b8bf033d70116
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: editor-script
contracts:
  - project.inno-editor-graph
  - manual.scripting.use-script-api
---
# `GraphCanvasState`

This reference describes `GraphCanvasState` in `Inno.Editor.Graph`. Read the [shared contract](../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-2b52bd2de0f06c05) | Method |
| [`BeginConnection`](#api-5309e3b41c9cec45) | Method |
| [`BeginConnection`](#api-50b4673eff7923d8) | Method |
| [`CancelConnection`](#api-f62979c5fb7e7ab5) | Method |
| [`ClearSelection`](#api-299009ac05a56ab0) | Method |
| [`PanBy`](#api-a7695a2b0ad69faf) | Method |
| [`SelectNodes`](#api-f22774169648e6c7) | Method |
| [`SetViewport`](#api-addb543b937bb05c) | Method |
| [`ToggleNode`](#api-639a7ed81e024841) | Method |
| [`ZoomAt`](#api-23dcd918f8b2e540) | Method |
| [`pan`](#api-9a3abfd4ef18084d) | Property |
| [`pendingConnection`](#api-aec765d322c88f3d) | Property |
| [`pendingConnectionDirection`](#api-e1cfd69f0d8b9f9c) | Property |
| [`selectedEdges`](#api-d65f05796d14cf6f) | Property |
| [`selectedNodes`](#api-ef0e4b37c03ab3c0) | Property |
| [`zoom`](#api-e1ac74e3c2291c13) | Property |

## Type declaration

<a id="api-d25b8bf033d70116"></a>
<!-- api: T:InnoEditor.Graph.GraphCanvasState 99a38ff276390e580bd8e4579a9c014fc1b825f57cdc36de8ca8476d3cdd56e2 -->

```csharp
public sealed class InnoEditor.Graph.GraphCanvasState
```

Stores transient pan, zoom, selection and connection interaction state without ImGui dependencies.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L12).

## `#ctor`

<a id="api-2b52bd2de0f06c05"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.#ctor 8a6c2fd6287ca82d7b659af23c7209d358a01349ed4f8806613af8986f156e4f -->

```csharp
public InnoEditor.Graph.GraphCanvasState.GraphCanvasState()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L12).

## `BeginConnection`

<a id="api-5309e3b41c9cec45"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.BeginConnection(InnoEngine.Graphs.GraphEndpoint,InnoEngine.Graphs.GraphPortDirection) d49a2032ef70ddc8cfd36d8ffeff30f849592e32a3d4b8356ca751c1c062b669 -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.BeginConnection(InnoEngine.Graphs.GraphEndpoint endpoint, InnoEngine.Graphs.GraphPortDirection direction)
```

Begins a connection drag from one endpoint.

**Parameter `endpoint`:** Stable endpoint.

**Parameter `direction`:** Direction of the endpoint within its node interface.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L164).

## `BeginConnection`

<a id="api-50b4673eff7923d8"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.BeginConnection(InnoEngine.Graphs.GraphEndpoint) ecf21cb98549743400a8aac013684bd6c93fb2923b839da98f2183c54d73177b -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.BeginConnection(InnoEngine.Graphs.GraphEndpoint output)
```

Begins a connection drag from one output endpoint.

**Parameter `output`:** Stable output endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L178).

## `CancelConnection`

<a id="api-f62979c5fb7e7ab5"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.CancelConnection 03264b2a5be9c4ab6647ce6a8e1fbf56a557fb0c57a2e5018b91afb2ff94e472 -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.CancelConnection()
```

Cancels any active connection drag.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L183).

## `ClearSelection`

<a id="api-299009ac05a56ab0"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.ClearSelection d178460c5aa019652abda078125d55eb3b284122617efe036b9d05204c944be5 -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.ClearSelection()
```

Clears all transient node and edge selection.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L147).

## `PanBy`

<a id="api-a7695a2b0ad69faf"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.PanBy(System.Single,System.Single) ec7f8b2129a85943eb20accc0423ead993e512ce3dab3f43a7393ab8419a0871 -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.PanBy(float deltaX, float deltaY)
```

Moves the canvas origin by screen-space pixels.

**Parameter `deltaX`:** Horizontal screen-space delta.

**Parameter `deltaY`:** Vertical screen-space delta.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L82).

## `SelectNodes`

<a id="api-f22774169648e6c7"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.SelectNodes(System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId}) 750512d58e7a0c2ed50a3641c313882aae69f26f7cc39378b260cd291260e8a3 -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.SelectNodes(System.Collections.Generic.IEnumerable<InnoEngine.Graphs.GraphNodeId> nodes)
```

Replaces node selection.

**Parameter `nodes`:** Complete selected-node set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L121).

## `SetViewport`

<a id="api-addb543b937bb05c"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.SetViewport(InnoEngine.Graphs.GraphPosition,System.Single) 29ae7eba6c289c9dbee575e2756f46d2a534ba609e0d16b25d3000585556fdb3 -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.SetViewport(InnoEngine.Graphs.GraphPosition pan, float zoom)
```

Restores persistent canvas navigation state with bounded zoom.

**Parameter `pan`:** Graph-space pan offset.

**Parameter `zoom`:** Requested zoom in the inclusive range 0.1 to 4.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L58).

## `ToggleNode`

<a id="api-639a7ed81e024841"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.ToggleNode(InnoEngine.Graphs.GraphNodeId) eafcbbdf9bd30f3be94c60a435683cb11ceb9374aae64eafde1deacdbd72204a -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.ToggleNode(InnoEngine.Graphs.GraphNodeId nodeId)
```

Toggles one node while preserving the remaining selection.

**Parameter `nodeId`:** Node to toggle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L135).

## `ZoomAt`

<a id="api-23dcd918f8b2e540"></a>
<!-- api: M:InnoEditor.Graph.GraphCanvasState.ZoomAt(System.Single,System.Single,System.Single) cf86ae23da134974a0ca5fbeb6b29197f22fdbc2e9b180a8a148f0dd137c8554 -->

```csharp
public void InnoEditor.Graph.GraphCanvasState.ZoomAt(float factor, float pivotX, float pivotY)
```

Changes zoom while preserving the graph point beneath a screen-space pivot.

**Parameter `factor`:** Positive multiplicative zoom factor.

**Parameter `pivotX`:** Screen-space pivot X.

**Parameter `pivotY`:** Screen-space pivot Y.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L99).

## `pan`

<a id="api-9a3abfd4ef18084d"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasState.pan b1e77a1de53555d996a3573ee8e879b7008988195b9b145f19c54879c8afd428 -->

```csharp
public InnoEngine.Graphs.GraphPosition InnoEditor.Graph.GraphCanvasState.pan { get; }
```

Gets the graph-space origin mapped to canvas screen origin.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L22).

## `pendingConnection`

<a id="api-aec765d322c88f3d"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasState.pendingConnection 6c3736906c4482e386965ce5ab63de5fe72f5816ac8a49840fccc0b83646f049 -->

```csharp
public InnoEngine.Graphs.GraphEndpoint? InnoEditor.Graph.GraphCanvasState.pendingConnection { get; }
```

Gets the endpoint currently being connected, or `null`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L42).

## `pendingConnectionDirection`

<a id="api-e1cfd69f0d8b9f9c"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasState.pendingConnectionDirection 0e9c4bc067eaa3f52eaf16dfdbc3a9ea062652f4db7a9ef4bd9ceae53a0c30b1 -->

```csharp
public InnoEngine.Graphs.GraphPortDirection? InnoEditor.Graph.GraphCanvasState.pendingConnectionDirection { get; }
```

Gets the direction of `InnoEditor.Graph.GraphCanvasState.pendingConnection`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L47).

## `selectedEdges`

<a id="api-d65f05796d14cf6f"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasState.selectedEdges 55d6b01e92d0de88faca98720cdcc442d0236c7bc1c2db4762cf15f405f6df25 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Graphs.GraphEdgeId> InnoEditor.Graph.GraphCanvasState.selectedEdges { get; }
```

Gets selected edge identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L37).

## `selectedNodes`

<a id="api-ef0e4b37c03ab3c0"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasState.selectedNodes 38919764eca704666ef86f7c0fc2e9096818aac4451aeec0535d6453c75238e3 -->

```csharp
public System.Collections.Generic.IReadOnlyCollection<InnoEngine.Graphs.GraphNodeId> InnoEditor.Graph.GraphCanvasState.selectedNodes { get; }
```

Gets selected node identities.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L32).

## `zoom`

<a id="api-e1ac74e3c2291c13"></a>
<!-- api: P:InnoEditor.Graph.GraphCanvasState.zoom b370fe7432dcd76bd001d526a75b769f67d61a16c07ca7b3f767750c5cb3c008 -->

```csharp
public float InnoEditor.Graph.GraphCanvasState.zoom { get; }
```

Gets the current graph-to-screen scale.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphCanvasState.cs#L27).
