---
title: "GraphDocumentController"
description: "Reference for GraphDocumentController in Inno.Editor.Graph."
uid: api.inno.editor.graph.c7294bbc2f124f61
kind: api
owners:
  - Inno.Editor.Graph
apiSurface: source-clr
contracts:
  - project.inno-editor-graph
---
# `GraphDocumentController`

This reference describes `GraphDocumentController` in `Inno.Editor.Graph`. Read the [shared contract](../../../projects/inno-editor-graph.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`AddNode`](#api-44a94e590fd0df86) | Method |
| [`Connect`](#api-c1deeb1ec3bd97f4) | Method |
| [`Copy`](#api-4ffc9095acbf2e86) | Method |
| [`Disconnect`](#api-f4bcfe49b96799d1) | Method |
| [`MarkSaved`](#api-2b2010fdac4abc4a) | Method |
| [`MoveNodes`](#api-6e575c88f881530c) | Method |
| [`Paste`](#api-eb735e849c099b8a) | Method |
| [`RemoveNodes`](#api-dfaf31e04479f40d) | Method |
| [`RemoveNodeValue`](#api-27681a5074031c0b) | Method |
| [`ReplaceDocument`](#api-e54a40900f887bbc) | Method |
| [`SetNodeValue`](#api-f0ca26f2e956259e) | Method |
| [`document`](#api-db37fb8ad560fd3b) | Property |
| [`documentId`](#api-8f6d5c1ddd11c809) | Property |
| [`isAvailable`](#api-3130ffe4dd90f4de) | Property |
| [`isDirty`](#api-a355fd30c0761d5b) | Property |
| [`revision`](#api-7f8676837d3b6374) | Property |

## Type declaration

<a id="api-c7294bbc2f124f61"></a>
<!-- api: T:Inno.Editor.Graph.GraphDocumentController 0a7506be449540e3d5734f5758a5e8b7304b4088f57ea75db9f0b094934d6c83 -->

```csharp
public sealed class Inno.Editor.Graph.GraphDocumentController
```

Applies neutral graph edits atomically and records every data mutation in reload-safe Editor History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L36).

## `AddNode`

<a id="api-44a94e590fd0df86"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.AddNode(System.String,Inno.Core.Graphs.GraphPosition,System.Collections.Generic.IReadOnlyDictionary{System.String,Inno.Core.Graphs.GraphSerializedValue}) e25c86d5d0ff2d98809a8b3592ebb4c8943f238ba6d22f4097ff64d3bcaf4748 -->

```csharp
public Inno.Core.Graphs.GraphNodeId Inno.Editor.Graph.GraphDocumentController.AddNode(string definitionId, Inno.Core.Graphs.GraphPosition position, System.Collections.Generic.IReadOnlyDictionary<string, Inno.Core.Graphs.GraphSerializedValue>? values = null)
```

Adds a node with a generated stable identity.

**Parameter `definitionId`:** Stable node definition ID.

**Parameter `position`:** Initial graph-space position.

**Parameter `values`:** Optional neutral property values.

**Returns:** The new stable node identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L122).

## `Connect`

<a id="api-c1deeb1ec3bd97f4"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.Connect(Inno.Core.Graphs.GraphEndpoint,Inno.Core.Graphs.GraphEndpoint) b94483e03fc8bd866f3787b4a6fbdb58047f7a01b6079d30e288194f8575435e -->

```csharp
public Inno.Core.Graphs.GraphEdgeId Inno.Editor.Graph.GraphDocumentController.Connect(Inno.Core.Graphs.GraphEndpoint output, Inno.Core.Graphs.GraphEndpoint input)
```

Creates or reconnects one input endpoint to an output endpoint.

**Parameter `output`:** Source endpoint.

**Parameter `input`:** Destination endpoint.

**Returns:** The generated connection identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L217).

## `Copy`

<a id="api-4ffc9095acbf2e86"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.Copy(System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId}) d1489905a44e93706e6a209acc75b8fb41d36461847efa2a73e3cab061ac17b6 -->

```csharp
public Inno.Editor.Graph.GraphClipboardData Inno.Editor.Graph.GraphDocumentController.Copy(System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> nodeIds)
```

Copies selected nodes and only their internal connections.

**Parameter `nodeIds`:** Nodes to copy.

**Returns:** A detached neutral clipboard fragment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L331).

## `Disconnect`

<a id="api-f4bcfe49b96799d1"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.Disconnect(Inno.Core.Graphs.GraphEdgeId) 69906acaf7485fa57b9db3ec09073bff386312c5108c3ca86b83770f20675cf0 -->

```csharp
public bool Inno.Editor.Graph.GraphDocumentController.Disconnect(Inno.Core.Graphs.GraphEdgeId edgeId)
```

Removes one stable connection.

**Parameter `edgeId`:** Connection to remove.

**Returns:** `true` after a connection was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L254).

## `MarkSaved`

<a id="api-2b2010fdac4abc4a"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.MarkSaved 3836d8c73b8cadb708ae2668ec33247c167a26986b9ee5bee2c87cd9d50872a5 -->

```csharp
public void Inno.Editor.Graph.GraphDocumentController.MarkSaved()
```

Marks the current revision as saved without creating a data History entry.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L82).

## `MoveNodes`

<a id="api-6e575c88f881530c"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.MoveNodes(System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphPosition}) 264ab47e7749d605321424610b90131a3f4be9efeb8b510f75a297231dbb45fd -->

```csharp
public void Inno.Editor.Graph.GraphDocumentController.MoveNodes(System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Core.Graphs.GraphPosition> positions)
```

Moves one or more nodes as one completed gesture, independently undoable from earlier drags.

**Parameter `positions`:** Complete destination positions keyed by node identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L180).

## `Paste`

<a id="api-eb735e849c099b8a"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.Paste(Inno.Editor.Graph.GraphClipboardData,Inno.Core.Graphs.GraphPosition,System.Action{Inno.Core.Graphs.GraphNodeRecord,System.Collections.Generic.IReadOnlyDictionary{Inno.Core.Graphs.GraphNodeId,Inno.Core.Graphs.GraphNodeId}}) 9ccc9cbc621114943a8fc4c508d7880a4a4178eff392ee3c913d5ee1463c6633 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphNodeId> Inno.Editor.Graph.GraphDocumentController.Paste(Inno.Editor.Graph.GraphClipboardData clipboard, Inno.Core.Graphs.GraphPosition offset, System.Action<Inno.Core.Graphs.GraphNodeRecord, System.Collections.Generic.IReadOnlyDictionary<Inno.Core.Graphs.GraphNodeId, Inno.Core.Graphs.GraphNodeId>>? remapNode = null)
```

Pastes a clipboard fragment with new stable identities and a graph-space offset.

**Parameter `clipboard`:** Detached neutral fragment.

**Parameter `offset`:** Offset added to every copied node position.

**Returns:** New node identities in clipboard document order.

**Parameter `remapNode`:** Optional synchronous domain remapping of neutral node values after identity allocation. The callback is never stored in History.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L365).

## `RemoveNodes`

<a id="api-dfaf31e04479f40d"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.RemoveNodes(System.Collections.Generic.IEnumerable{Inno.Core.Graphs.GraphNodeId}) 9df2c37c4d0e14a41dc0e79278efdb5ba4ad88088ee39efda5ccbc429eb5f115 -->

```csharp
public void Inno.Editor.Graph.GraphDocumentController.RemoveNodes(System.Collections.Generic.IEnumerable<Inno.Core.Graphs.GraphNodeId> nodeIds)
```

Removes nodes and all incident connections as one structural edit.

**Parameter `nodeIds`:** Nodes to remove.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L151).

## `RemoveNodeValue`

<a id="api-27681a5074031c0b"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.RemoveNodeValue(Inno.Core.Graphs.GraphNodeId,System.String) d83344782edf7b0b2e1b5015d3a8d470e83d0c9b3a65204d12d6fd2ecb9d0746 -->

```csharp
public bool Inno.Editor.Graph.GraphDocumentController.RemoveNodeValue(Inno.Core.Graphs.GraphNodeId nodeId, string propertyId)
```

Removes one neutral node property as a structural edit.

**Parameter `nodeId`:** Owning node.

**Parameter `propertyId`:** Stable property ID.

**Returns:** `true` when the property existed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L307).

## `ReplaceDocument`

<a id="api-e54a40900f887bbc"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.ReplaceDocument(Inno.Core.Graphs.GraphDocument,System.String,System.String) 01032a5469f3d58bb01f8dcf43423f949030c99ea2e95708530be6c1483ee6bc -->

```csharp
public void Inno.Editor.Graph.GraphDocumentController.ReplaceDocument(Inno.Core.Graphs.GraphDocument replacement, string historyName, string? gestureId = null)
```

Replaces the complete neutral document as one atomic, undoable authoring operation.

**Parameter `replacement`:** Complete replacement document copied by the operation.

**Parameter `historyName`:** Concise artist-facing history entry name.

**Parameter `gestureId`:** Unique active gesture identity for continuous samples, or null for an independent edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L96).

## `SetNodeValue`

<a id="api-f0ca26f2e956259e"></a>
<!-- api: M:Inno.Editor.Graph.GraphDocumentController.SetNodeValue(Inno.Core.Graphs.GraphNodeId,System.String,Inno.Core.Graphs.GraphSerializedValue,System.String) a1197e369fcd898dd23ae77a4a43040c66d9121bf609862affb35a62e6c3a4ec -->

```csharp
public void Inno.Editor.Graph.GraphDocumentController.SetNodeValue(Inno.Core.Graphs.GraphNodeId nodeId, string propertyId, Inno.Core.Graphs.GraphSerializedValue value, string? gestureId = null)
```

Creates or replaces one neutral node property; only samples carrying the same explicit gesture identity merge.

**Parameter `nodeId`:** Owning node.

**Parameter `propertyId`:** Stable property ID.

**Parameter `value`:** New neutral value.

**Parameter `gestureId`:** Unique current text/numeric gesture identity, or null for an independent edit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L280).

## `document`

<a id="api-db37fb8ad560fd3b"></a>
<!-- api: P:Inno.Editor.Graph.GraphDocumentController.document 81410251dc6efeb261ac72ffd403aeee244c392edb5e39d0af7be687d77f84f4 -->

```csharp
public Inno.Core.Graphs.GraphDocument Inno.Editor.Graph.GraphDocumentController.document { get; }
```

Gets the mutable neutral document used by the current asset generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L67).

## `documentId`

<a id="api-8f6d5c1ddd11c809"></a>
<!-- api: P:Inno.Editor.Graph.GraphDocumentController.documentId 6560c80d736276febac789e8c149c97f4dbce15ca124d8d2d7c57765d0044de3 -->

```csharp
public System.Guid Inno.Editor.Graph.GraphDocumentController.documentId { get; }
```

Gets the stable project-relative document identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L57).

## `isAvailable`

<a id="api-3130ffe4dd90f4de"></a>
<!-- api: P:Inno.Editor.Graph.GraphDocumentController.isAvailable 6232ebd2ec00773d37746520b04d848b15b526357b778c16329cc66a265dd1e6 -->

```csharp
public bool Inno.Editor.Graph.GraphDocumentController.isAvailable { get; }
```

Gets whether the current document identity and source are both available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L62).

## `isDirty`

<a id="api-a355fd30c0761d5b"></a>
<!-- api: P:Inno.Editor.Graph.GraphDocumentController.isDirty ba05da72298ecce14a130755e28c9b56103c3f35cb5cb7c8c092dbeecbbd417a -->

```csharp
public bool Inno.Editor.Graph.GraphDocumentController.isDirty { get; }
```

Gets whether content changed after its last explicit saved marker.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L77).

## `revision`

<a id="api-7f8676837d3b6374"></a>
<!-- api: P:Inno.Editor.Graph.GraphDocumentController.revision b315637bb36057c25723add38d58f790a94190a58ef1b7cd58438fd4125162c5 -->

```csharp
public ulong Inno.Editor.Graph.GraphDocumentController.revision { get; }
```

Gets the monotonic in-session content revision.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/composition/editor/framework/Inno.Editor.Graph/GraphDocumentController.cs#L72).
