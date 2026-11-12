---
title: "GraphDocumentController"
description: "Reference for GraphDocumentController in Inno.Editor.Graph."
uid: api.inno.editor.graph.editor-script.e103e5f9f9572664
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: editor-script
contracts:
  - project.inno-editor-graph
  - manual.scripting.use-script-api
---
# `GraphDocumentController`

This reference describes `GraphDocumentController` in `Inno.Editor.Graph`. Read the [shared contract](../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-55d66a3497e7e85a) | Method |
| [`AddNode`](#api-70e0ac5aa323fd88) | Method |
| [`Connect`](#api-11ab956896cd65d3) | Method |
| [`Copy`](#api-0313d55c1a208a7c) | Method |
| [`Disconnect`](#api-cf9d028642f0a415) | Method |
| [`MarkSaved`](#api-c2b8e873a7428881) | Method |
| [`MoveNodes`](#api-59c0937989a512c9) | Method |
| [`Paste`](#api-68c418241d24b82f) | Method |
| [`RemoveNodes`](#api-842a284c74ce7e4c) | Method |
| [`RemoveNodeValue`](#api-1140338dcde429ce) | Method |
| [`ReplaceDocument`](#api-f0d520334afb6dd9) | Method |
| [`SetNodeValue`](#api-c8c159268e9dbb05) | Method |
| [`document`](#api-221d0a7697e518b6) | Property |
| [`documentId`](#api-40dbeae99d5ab54b) | Property |
| [`isAvailable`](#api-0b383d5294b70bf7) | Property |
| [`isDirty`](#api-50683b02e5e48121) | Property |
| [`revision`](#api-bc56ae4b00f15f53) | Property |

## Type declaration

<a id="api-e103e5f9f9572664"></a>
<!-- api: T:InnoEditor.Graph.GraphDocumentController ccec16bed73ef52bdff3d178629767a3abe0579d12ca9006163cc249002f0101 -->

```csharp
public sealed class InnoEditor.Graph.GraphDocumentController
```

Applies neutral graph edits atomically and records every data mutation in reload-safe Editor History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L36).

## `#ctor`

<a id="api-55d66a3497e7e85a"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.#ctor ac24e902eeb63dff57e778c2ffb4bba77d06dfae1c51f8637c6aa718ceab5284 -->

```csharp
public InnoEditor.Graph.GraphDocumentController.GraphDocumentController()
```

Appears in the generated script reference without a matching public or protected engine constructor.

**Constraints:** This is an IDE projection artifact, not a supported construction path. Do not call this constructor from scripts; obtain the instance through the containing type's documented owner or factory.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L36).

## `AddNode`

<a id="api-70e0ac5aa323fd88"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.AddNode(System.String,InnoEngine.Graphs.GraphPosition,System.Collections.Generic.IReadOnlyDictionary{System.String,InnoEngine.Graphs.GraphSerializedValue}) 74dfe46c35315c20def67f6971d27cbcde0f9c44c517e7b812364d1156e4fa84 -->

```csharp
public InnoEngine.Graphs.GraphNodeId InnoEditor.Graph.GraphDocumentController.AddNode(string definitionId, InnoEngine.Graphs.GraphPosition position, System.Collections.Generic.IReadOnlyDictionary<string, InnoEngine.Graphs.GraphSerializedValue>? values = null)
```

Adds a node with a generated stable identity.

**Parameter `definitionId`:** Stable node definition ID.

**Parameter `position`:** Initial graph-space position.

**Parameter `values`:** Optional neutral property values.

**Returns:** The new stable node identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L122).

## `Connect`

<a id="api-11ab956896cd65d3"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.Connect(InnoEngine.Graphs.GraphEndpoint,InnoEngine.Graphs.GraphEndpoint) db4d1fe1ead2a58778786bf21f64abf6e44cef261414d4f76cf455d11f8bc6c1 -->

```csharp
public InnoEngine.Graphs.GraphEdgeId InnoEditor.Graph.GraphDocumentController.Connect(InnoEngine.Graphs.GraphEndpoint output, InnoEngine.Graphs.GraphEndpoint input)
```

Creates or reconnects one input endpoint to an output endpoint.

**Parameter `output`:** Source endpoint.

**Parameter `input`:** Destination endpoint.

**Returns:** The generated connection identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L217).

## `Copy`

<a id="api-0313d55c1a208a7c"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.Copy(System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId}) 0d986c161435039340f310b8986940c7531634b765486420c83d99de542c5886 -->

```csharp
public InnoEditor.Graph.GraphClipboardData InnoEditor.Graph.GraphDocumentController.Copy(System.Collections.Generic.IEnumerable<InnoEngine.Graphs.GraphNodeId> nodeIds)
```

Copies selected nodes and only their internal connections.

**Parameter `nodeIds`:** Nodes to copy.

**Returns:** A detached neutral clipboard fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L331).

## `Disconnect`

<a id="api-cf9d028642f0a415"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.Disconnect(InnoEngine.Graphs.GraphEdgeId) 747e39223e5d09b249a1dc11b8d8e4c107c6fb8856341d67d956ecb18a65047c -->

```csharp
public bool InnoEditor.Graph.GraphDocumentController.Disconnect(InnoEngine.Graphs.GraphEdgeId edgeId)
```

Removes one stable connection.

**Parameter `edgeId`:** Connection to remove.

**Returns:** `true` after a connection was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L254).

## `MarkSaved`

<a id="api-c2b8e873a7428881"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.MarkSaved 8b492ed1e9badf4b8f8f0ce7f6d2d23ba69a6694b4d3680e105542a7705c6e01 -->

```csharp
public void InnoEditor.Graph.GraphDocumentController.MarkSaved()
```

Marks the current revision as saved without creating a data History entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L82).

## `MoveNodes`

<a id="api-59c0937989a512c9"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.MoveNodes(System.Collections.Generic.IReadOnlyDictionary{InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphPosition}) 4629bf54aee8e12d8f5c2a738111b3a52939af8c4ddf9836d5b7c2c961c1fd8c -->

```csharp
public void InnoEditor.Graph.GraphDocumentController.MoveNodes(System.Collections.Generic.IReadOnlyDictionary<InnoEngine.Graphs.GraphNodeId, InnoEngine.Graphs.GraphPosition> positions)
```

Moves one or more nodes as one completed gesture, independently undoable from earlier drags.

**Parameter `positions`:** Complete destination positions keyed by node identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L180).

## `Paste`

<a id="api-68c418241d24b82f"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.Paste(InnoEditor.Graph.GraphClipboardData,InnoEngine.Graphs.GraphPosition,System.Action{InnoEngine.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{InnoEngine.Graphs.GraphNodeId,InnoEngine.Graphs.GraphNodeId}}) d0c2e41547f37bbc5e87530baa3a4af54248eb3d8691832dbca9e4b9032fef4f -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphNodeId> InnoEditor.Graph.GraphDocumentController.Paste(InnoEditor.Graph.GraphClipboardData clipboard, InnoEngine.Graphs.GraphPosition offset, System.Action<InnoEngine.Graphs.GraphNodeRecord, System.Collections.Generic.IReadOnlyDictionary<InnoEngine.Graphs.GraphNodeId, InnoEngine.Graphs.GraphNodeId>>? remapNode = null)
```

Pastes a clipboard fragment with new stable identities and a graph-space offset.

**Parameter `clipboard`:** Detached neutral fragment.

**Parameter `offset`:** Offset added to every copied node position.

**Returns:** New node identities in clipboard document order.

**Parameter `remapNode`:** Optional synchronous domain remapping of neutral node values after identity allocation. The callback is never stored in History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L365).

## `RemoveNodes`

<a id="api-842a284c74ce7e4c"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.RemoveNodes(System.Collections.Generic.IEnumerable{InnoEngine.Graphs.GraphNodeId}) 65ab2cd5910cd363a911bda6988e42c3b571c25fe49cf7a2b6a1cd8592ec9ea0 -->

```csharp
public void InnoEditor.Graph.GraphDocumentController.RemoveNodes(System.Collections.Generic.IEnumerable<InnoEngine.Graphs.GraphNodeId> nodeIds)
```

Removes nodes and all incident connections as one structural edit.

**Parameter `nodeIds`:** Nodes to remove.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L151).

## `RemoveNodeValue`

<a id="api-1140338dcde429ce"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.RemoveNodeValue(InnoEngine.Graphs.GraphNodeId,System.String) 1564b7387bdf0c14908a58d06267c525a6fa57b66fc6379e6b06b5bda4e66b12 -->

```csharp
public bool InnoEditor.Graph.GraphDocumentController.RemoveNodeValue(InnoEngine.Graphs.GraphNodeId nodeId, string propertyId)
```

Removes one neutral node property as a structural edit.

**Parameter `nodeId`:** Owning node.

**Parameter `propertyId`:** Stable property ID.

**Returns:** `true` when the property existed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L307).

## `ReplaceDocument`

<a id="api-f0d520334afb6dd9"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.ReplaceDocument(InnoEngine.Graphs.GraphDocument,System.String,System.String) 7a212e6ac25d62afe69d6477efb7ea6ac512338df5a6fd658449c78ce9579af9 -->

```csharp
public void InnoEditor.Graph.GraphDocumentController.ReplaceDocument(InnoEngine.Graphs.GraphDocument replacement, string historyName, string? gestureId = null)
```

Replaces the complete neutral document as one atomic, undoable authoring operation.

**Parameter `replacement`:** Complete replacement document copied by the operation.

**Parameter `historyName`:** Concise artist-facing history entry name.

**Parameter `gestureId`:** Unique active gesture identity for continuous samples, or null for an independent edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L96).

## `SetNodeValue`

<a id="api-c8c159268e9dbb05"></a>
<!-- api: M:InnoEditor.Graph.GraphDocumentController.SetNodeValue(InnoEngine.Graphs.GraphNodeId,System.String,InnoEngine.Graphs.GraphSerializedValue,System.String) 318c4a01fd776d9b01c17992b5f7a7d3803abbbfad9683eb9a62dda9f85e596c -->

```csharp
public void InnoEditor.Graph.GraphDocumentController.SetNodeValue(InnoEngine.Graphs.GraphNodeId nodeId, string propertyId, InnoEngine.Graphs.GraphSerializedValue value, string? gestureId = null)
```

Creates or replaces one neutral node property; only samples carrying the same explicit gesture identity merge.

**Parameter `nodeId`:** Owning node.

**Parameter `propertyId`:** Stable property ID.

**Parameter `value`:** New neutral value.

**Parameter `gestureId`:** Unique current text/numeric gesture identity, or null for an independent edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L280).

## `document`

<a id="api-221d0a7697e518b6"></a>
<!-- api: P:InnoEditor.Graph.GraphDocumentController.document 899029a632468f55568f64fc62ceeb04d55633b16c98e65bf0f70b7f23cd5198 -->

```csharp
public InnoEngine.Graphs.GraphDocument InnoEditor.Graph.GraphDocumentController.document { get; }
```

Gets the mutable neutral document used by the current asset generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L67).

## `documentId`

<a id="api-40dbeae99d5ab54b"></a>
<!-- api: P:InnoEditor.Graph.GraphDocumentController.documentId 965ae9470434e470d029c2a9ecbc46fe74522e2b92faad700d690280c566875b -->

```csharp
public System.Guid InnoEditor.Graph.GraphDocumentController.documentId { get; }
```

Gets the stable project-relative document identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L57).

## `isAvailable`

<a id="api-0b383d5294b70bf7"></a>
<!-- api: P:InnoEditor.Graph.GraphDocumentController.isAvailable 95d6d30c7df0d4fc3ff606eb346c854dd36bfb058bb521872f8659180ef4d6c3 -->

```csharp
public bool InnoEditor.Graph.GraphDocumentController.isAvailable { get; }
```

Gets whether the current document identity and source are both available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L62).

## `isDirty`

<a id="api-50683b02e5e48121"></a>
<!-- api: P:InnoEditor.Graph.GraphDocumentController.isDirty f3a522a22fdd7b9b35e135e7f8432520ec7273853619a9f037eac9d918422a08 -->

```csharp
public bool InnoEditor.Graph.GraphDocumentController.isDirty { get; }
```

Gets whether content changed after its last explicit saved marker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L77).

## `revision`

<a id="api-bc56ae4b00f15f53"></a>
<!-- api: P:InnoEditor.Graph.GraphDocumentController.revision fc3450631f033cee57480131a5e32064c9be96ed5da6bef40cb4a25719d00a75 -->

```csharp
public ulong InnoEditor.Graph.GraphDocumentController.revision { get; }
```

Gets the monotonic in-session content revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L72).
