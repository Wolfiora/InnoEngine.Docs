---
title: "GraphDocument"
description: "Reference for GraphDocument in Inno.Core.Graphs."
uid: api.inno.core.graphs.4c6d74c85656ab7b
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphDocument`

This reference describes `GraphDocument` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3dbc3fd26348ef9d) | Method |
| [`AddEdge`](#api-e4681dad361f3c3b) | Method |
| [`AddNode`](#api-322d885f98d9bbb8) | Method |
| [`Clone`](#api-b431e5c8ed439929) | Method |
| [`FindNode`](#api-aa2f203e0a6f6a11) | Method |
| [`RemoveEdge`](#api-16ee677e04abc693) | Method |
| [`RemoveMetadata`](#api-4ebe9d91b950f457) | Method |
| [`RemoveNode`](#api-09bebca85d9a238a) | Method |
| [`ReplaceContents`](#api-c12900fb94ddb15f) | Method |
| [`SetMetadata`](#api-cbfecf93edcd06f1) | Method |
| [`edges`](#api-ba13933d6cb96409) | Property |
| [`metadata`](#api-c2613ce09b9d34a8) | Property |
| [`nodes`](#api-bb6e8d31fc6eb141) | Property |

## Type declaration

<a id="api-4c6d74c85656ab7b"></a>
<!-- api: T:Inno.Core.Graphs.GraphDocument c6f57f6bc6d976900e14d50cfd6cc05a43516c878dfc9e9533be2f87a94af737 -->

```csharp
public sealed class Inno.Core.Graphs.GraphDocument
```

Owns neutral graph records and graph-level canvas metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L187).

## `#ctor`

<a id="api-3dbc3fd26348ef9d"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.#ctor 9a1e9a8848f197b6e76c44390d2c9e4f2d4b09890c9c4a759e8d12b67e4dd2db -->

```csharp
public Inno.Core.Graphs.GraphDocument.GraphDocument()
```

Creates an empty document with stable, read-only collection views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L200).

## `AddEdge`

<a id="api-e4681dad361f3c3b"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.AddEdge(Inno.Core.Graphs.GraphEdgeRecord) 2c7263329abfe123170010ff1718421c7837a43e3f4515e204a8e0ae52ca98c8 -->

```csharp
public void Inno.Core.Graphs.GraphDocument.AddEdge(Inno.Core.Graphs.GraphEdgeRecord edge)
```

Adds an edge while preserving document order.

**Parameter `edge`:** Edge record to add.

**Throws `System.ArgumentException`:** Thrown when the edge identifier already exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L356).

## `AddNode`

<a id="api-322d885f98d9bbb8"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.AddNode(Inno.Core.Graphs.GraphNodeRecord) 46e2434f60319aa6e4657f080a70edeed0c887ed01df98b48da28669d24f8dd4 -->

```csharp
public void Inno.Core.Graphs.GraphDocument.AddNode(Inno.Core.Graphs.GraphNodeRecord node)
```

Adds a node while preserving document order.

**Parameter `node`:** Node record to add.

**Throws `System.ArgumentException`:** Thrown when the node identifier already exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L304).

## `Clone`

<a id="api-b431e5c8ed439929"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.Clone 298829d4ae7eb9447458605505b955177915beb15f9561a955debca4b41a08eb -->

```csharp
public Inno.Core.Graphs.GraphDocument Inno.Core.Graphs.GraphDocument.Clone()
```

Creates a deep neutral copy that shares no mutable node, edge, value, or metadata records.

**Returns:** An independently mutable graph document with identical stable identifiers and order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L228).

## `FindNode`

<a id="api-aa2f203e0a6f6a11"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.FindNode(Inno.Core.Graphs.GraphNodeId) fec5c3d026e909092f727819cb303ae0d23edbd88e81a3b0e5ccaca73dd08d68 -->

```csharp
public Inno.Core.Graphs.GraphNodeRecord? Inno.Core.Graphs.GraphDocument.FindNode(Inno.Core.Graphs.GraphNodeId nodeId)
```

Finds a node by stable identifier.

**Parameter `nodeId`:** Node identifier to find.

**Returns:** The node record, or `null` when absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L345).

## `RemoveEdge`

<a id="api-16ee677e04abc693"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.RemoveEdge(Inno.Core.Graphs.GraphEdgeId) 80c6894c9b27d324f68d76184b4a07a18fc1fda2173e8290ade96b5c1b377a61 -->

```csharp
public bool Inno.Core.Graphs.GraphDocument.RemoveEdge(Inno.Core.Graphs.GraphEdgeId edgeId)
```

Removes an edge by stable identifier.

**Parameter `edgeId`:** Edge identifier to remove.

**Returns:** `true` when the edge existed; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L376).

## `RemoveMetadata`

<a id="api-4ebe9d91b950f457"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.RemoveMetadata(System.String) 9e2b19fae9d7506f50ce9d603000019387bce53cf55ec0b35e553252c0492cfd -->

```csharp
public bool Inno.Core.Graphs.GraphDocument.RemoveMetadata(string key)
```

Removes graph-level metadata by stable key.

**Parameter `key`:** Stable metadata key.

**Returns:** `true` when metadata existed and was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L415).

## `RemoveNode`

<a id="api-09bebca85d9a238a"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.RemoveNode(Inno.Core.Graphs.GraphNodeId) 420985016683f7dc3840f23ba1c6f70671cdf03636cbc2b55579fef6c15f5500 -->

```csharp
public bool Inno.Core.Graphs.GraphDocument.RemoveNode(Inno.Core.Graphs.GraphNodeId nodeId)
```

Removes a node and every edge connected to it.

**Parameter `nodeId`:** Node identifier to remove.

**Returns:** `true` when the node existed; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L324).

## `ReplaceContents`

<a id="api-c12900fb94ddb15f"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.ReplaceContents(Inno.Core.Graphs.GraphDocument) 221a4b09cbf3af087a4b9d010f42b370e700d43baaa19526d91ff35d99489d1b -->

```csharp
public void Inno.Core.Graphs.GraphDocument.ReplaceContents(Inno.Core.Graphs.GraphDocument source)
```

Atomically replaces all records with deep copies from another neutral document.

**Parameter `source`:** Complete source state.

**Throws `System.ArgumentException`:** Thrown when `source` is this document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L244).

## `SetMetadata`

<a id="api-cbfecf93edcd06f1"></a>
<!-- api: M:Inno.Core.Graphs.GraphDocument.SetMetadata(System.String,Inno.Core.Graphs.GraphSerializedValue) 15b7292eb657a3c482fc2256825b8a30569b406d27162b43aac1a75db204eb42 -->

```csharp
public void Inno.Core.Graphs.GraphDocument.SetMetadata(string key, Inno.Core.Graphs.GraphSerializedValue value)
```

Creates or replaces graph-level neutral metadata.

**Parameter `key`:** Stable metadata key.

**Parameter `value`:** Serialized metadata value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L397).

## `edges`

<a id="api-ba13933d6cb96409"></a>
<!-- api: P:Inno.Core.Graphs.GraphDocument.edges dce80d1fea3d1f0a8a2f322ed3f6cc5320ee6e8d659561152744c7ba3de147ae -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphEdgeRecord> Inno.Core.Graphs.GraphDocument.edges { get; }
```

Gets all edge records in stable document order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L215).

## `metadata`

<a id="api-c2613ce09b9d34a8"></a>
<!-- api: P:Inno.Core.Graphs.GraphDocument.metadata 6c47ee25864f4da9d391192bdc1a6682329b0ceff2b1410daa5ac55d5de4f52e -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, Inno.Core.Graphs.GraphSerializedValue> Inno.Core.Graphs.GraphDocument.metadata { get; }
```

Gets graph-level neutral metadata such as groups or comments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L220).

## `nodes`

<a id="api-bb6e8d31fc6eb141"></a>
<!-- api: P:Inno.Core.Graphs.GraphDocument.nodes 062b1d2649557fc1307d4e251f5476a0b809e2eb2b9bc52a59c8a68a93c8a757 -->

```csharp
public System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphNodeRecord> Inno.Core.Graphs.GraphDocument.nodes { get; }
```

Gets all node records in stable document order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L210).
