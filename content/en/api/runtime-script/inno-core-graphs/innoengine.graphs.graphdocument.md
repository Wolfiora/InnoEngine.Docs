---
title: "GraphDocument"
description: "Reference for GraphDocument in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.60c05eb6de9fad68
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphDocument`

This reference describes `GraphDocument` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-d5d66dcb456b4f73) | Method |
| [`AddEdge`](#api-1ab92269719e3ccf) | Method |
| [`AddNode`](#api-aff0b5e2318766c3) | Method |
| [`Clone`](#api-7dbf4c2fac288f17) | Method |
| [`FindNode`](#api-367f0848b0d9e5c7) | Method |
| [`RemoveEdge`](#api-c92b6c45767ff421) | Method |
| [`RemoveMetadata`](#api-adab8cdd0b8da4c7) | Method |
| [`RemoveNode`](#api-a5efa7234ed0547d) | Method |
| [`ReplaceContents`](#api-8b9693c04e94c891) | Method |
| [`SetMetadata`](#api-7bde25e388d758ef) | Method |
| [`edges`](#api-76a20137180e984f) | Property |
| [`metadata`](#api-bbd8dacd9292547f) | Property |
| [`nodes`](#api-ed4a195c03d33443) | Property |

## Type declaration

<a id="api-60c05eb6de9fad68"></a>
<!-- api: T:InnoEngine.Graphs.GraphDocument ac8a661b3c760c6e0616f2130d8d7e2df3b2bde4528ba6be036ed1e7b20d21b9 -->

```csharp
public sealed class InnoEngine.Graphs.GraphDocument
```

Owns neutral graph records and graph-level canvas metadata.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L187).

## `#ctor`

<a id="api-d5d66dcb456b4f73"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.#ctor 3251edc8eaf61d22c5eb77f9e5f703fd552d25e18929f5b049cb8dbeb24fd22c -->

```csharp
public InnoEngine.Graphs.GraphDocument.GraphDocument()
```

Creates an empty document with stable, read-only collection views.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L200).

## `AddEdge`

<a id="api-1ab92269719e3ccf"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.AddEdge(InnoEngine.Graphs.GraphEdgeRecord) adb72a80c26114f324a5827dd7634774cd3435cdf2d8e615d5aacd36dfd3db1f -->

```csharp
public void InnoEngine.Graphs.GraphDocument.AddEdge(InnoEngine.Graphs.GraphEdgeRecord edge)
```

Adds an edge while preserving document order.

**Parameter `edge`:** Edge record to add.

**Throws `System.ArgumentException`:** Thrown when the edge identifier already exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L356).

## `AddNode`

<a id="api-aff0b5e2318766c3"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.AddNode(InnoEngine.Graphs.GraphNodeRecord) 12bcd8499cafa51099751d88966a989380b4cb8edd945d3d37cd17d29fe230f7 -->

```csharp
public void InnoEngine.Graphs.GraphDocument.AddNode(InnoEngine.Graphs.GraphNodeRecord node)
```

Adds a node while preserving document order.

**Parameter `node`:** Node record to add.

**Throws `System.ArgumentException`:** Thrown when the node identifier already exists.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L304).

## `Clone`

<a id="api-7dbf4c2fac288f17"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.Clone a6e67121f5ce0901d5d87ce28746453e20101d29fc6d9c375928b86a60e3881c -->

```csharp
public InnoEngine.Graphs.GraphDocument InnoEngine.Graphs.GraphDocument.Clone()
```

Creates a deep neutral copy that shares no mutable node, edge, value, or metadata records.

**Returns:** An independently mutable graph document with identical stable identifiers and order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L228).

## `FindNode`

<a id="api-367f0848b0d9e5c7"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.FindNode(InnoEngine.Graphs.GraphNodeId) 08bbc12551b43e778530191205edfd4db8ad2e452966475dcc7b34d6b45cc88e -->

```csharp
public InnoEngine.Graphs.GraphNodeRecord? InnoEngine.Graphs.GraphDocument.FindNode(InnoEngine.Graphs.GraphNodeId nodeId)
```

Finds a node by stable identifier.

**Parameter `nodeId`:** Node identifier to find.

**Returns:** The node record, or `null` when absent.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L345).

## `RemoveEdge`

<a id="api-c92b6c45767ff421"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.RemoveEdge(InnoEngine.Graphs.GraphEdgeId) f6b740eb8d12a4e8bd1b1408df6122689b4810e1d85d70fb8cd44ee72f924eaf -->

```csharp
public bool InnoEngine.Graphs.GraphDocument.RemoveEdge(InnoEngine.Graphs.GraphEdgeId edgeId)
```

Removes an edge by stable identifier.

**Parameter `edgeId`:** Edge identifier to remove.

**Returns:** `true` when the edge existed; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L376).

## `RemoveMetadata`

<a id="api-adab8cdd0b8da4c7"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.RemoveMetadata(System.String) a73cf48afef42996b0ac8eb514d44c48215178c9f22365b2d0872c1e581ca314 -->

```csharp
public bool InnoEngine.Graphs.GraphDocument.RemoveMetadata(string key)
```

Removes graph-level metadata by stable key.

**Parameter `key`:** Stable metadata key.

**Returns:** `true` when metadata existed and was removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L415).

## `RemoveNode`

<a id="api-a5efa7234ed0547d"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.RemoveNode(InnoEngine.Graphs.GraphNodeId) 1d02d8517caafb428cd06a174a7f46f4fa438cfc5d9981687e019da3b7a46f90 -->

```csharp
public bool InnoEngine.Graphs.GraphDocument.RemoveNode(InnoEngine.Graphs.GraphNodeId nodeId)
```

Removes a node and every edge connected to it.

**Parameter `nodeId`:** Node identifier to remove.

**Returns:** `true` when the node existed; otherwise `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L324).

## `ReplaceContents`

<a id="api-8b9693c04e94c891"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.ReplaceContents(InnoEngine.Graphs.GraphDocument) 9042e8aabcabcda2c7becb15ac72c6fb8af748d42058dff306fc9051ce8e831d -->

```csharp
public void InnoEngine.Graphs.GraphDocument.ReplaceContents(InnoEngine.Graphs.GraphDocument source)
```

Atomically replaces all records with deep copies from another neutral document.

**Parameter `source`:** Complete source state.

**Throws `System.ArgumentException`:** Thrown when `source` is this document.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L244).

## `SetMetadata`

<a id="api-7bde25e388d758ef"></a>
<!-- api: M:InnoEngine.Graphs.GraphDocument.SetMetadata(System.String,InnoEngine.Graphs.GraphSerializedValue) f3665ea6076d1b65e64ba516f520627eea80e28f404df2bca1bd85ec7029bd69 -->

```csharp
public void InnoEngine.Graphs.GraphDocument.SetMetadata(string key, InnoEngine.Graphs.GraphSerializedValue value)
```

Creates or replaces graph-level neutral metadata.

**Parameter `key`:** Stable metadata key.

**Parameter `value`:** Serialized metadata value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L397).

## `edges`

<a id="api-76a20137180e984f"></a>
<!-- api: P:InnoEngine.Graphs.GraphDocument.edges 045c8417aef79ac20d8c0e267555f17411d3179d351cc429f7afedc2ac2bd64e -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphEdgeRecord> InnoEngine.Graphs.GraphDocument.edges { get; }
```

Gets all edge records in stable document order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L215).

## `metadata`

<a id="api-bbd8dacd9292547f"></a>
<!-- api: P:InnoEngine.Graphs.GraphDocument.metadata ad85f2255c94ccd64b968f902ea177dbdfa2a4c211f0d1dae4a9700fb06ba3f1 -->

```csharp
public System.Collections.Generic.IReadOnlyDictionary<string, InnoEngine.Graphs.GraphSerializedValue> InnoEngine.Graphs.GraphDocument.metadata { get; }
```

Gets graph-level neutral metadata such as groups or comments.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L220).

## `nodes`

<a id="api-ed4a195c03d33443"></a>
<!-- api: P:InnoEngine.Graphs.GraphDocument.nodes 796313b9a0993d102506888603fa779d1cd00a818841df3b095d18e2dd6cbbcc -->

```csharp
public System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphNodeRecord> InnoEngine.Graphs.GraphDocument.nodes { get; }
```

Gets all node records in stable document order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L210).
