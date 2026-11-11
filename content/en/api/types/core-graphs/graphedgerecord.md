---
title: "GraphEdgeRecord"
description: "Reference for GraphEdgeRecord in Inno.Core.Graphs."
uid: api.inno.core.graphs.e433f4764eba6315
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphEdgeRecord`

This reference describes `GraphEdgeRecord` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-7fc902456133d187) | Method |
| [`id`](#api-dd1302d0ecfdca7a) | Property |
| [`input`](#api-85765a222ce0c745) | Property |
| [`output`](#api-294700010ad79b42) | Property |

## Type declaration

<a id="api-e433f4764eba6315"></a>
<!-- api: T:Inno.Core.Graphs.GraphEdgeRecord 73bdaf840d80a6dd45110f783431c7e8016157018ff7f3068918ff7da77765b4 -->

```csharp
public sealed class Inno.Core.Graphs.GraphEdgeRecord
```

Stores one typed connection between two graph endpoints.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L144).

## `#ctor`

<a id="api-7fc902456133d187"></a>
<!-- api: M:Inno.Core.Graphs.GraphEdgeRecord.#ctor(Inno.Core.Graphs.GraphEdgeId,Inno.Core.Graphs.GraphEndpoint,Inno.Core.Graphs.GraphEndpoint) 81fa51b82b3996c7d6f0b4bc71b8c1c5cf78d2d6950cb20929ad9c84e6f14533 -->

```csharp
public Inno.Core.Graphs.GraphEdgeRecord.GraphEdgeRecord(Inno.Core.Graphs.GraphEdgeId id, Inno.Core.Graphs.GraphEndpoint output, Inno.Core.Graphs.GraphEndpoint input)
```

Creates a graph edge record.

**Parameter `id`:** Stable edge identifier within the document.

**Parameter `output`:** Source endpoint.

**Parameter `input`:** Destination endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L158).

## `id`

<a id="api-dd1302d0ecfdca7a"></a>
<!-- api: P:Inno.Core.Graphs.GraphEdgeRecord.id 1d3e04f054e54623c442b57e161edc16e14273db302e9702c27c0c9c1685e259 -->

```csharp
public Inno.Core.Graphs.GraphEdgeId Inno.Core.Graphs.GraphEdgeRecord.id { get; }
```

Gets the stable edge identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L171).

## `input`

<a id="api-85765a222ce0c745"></a>
<!-- api: P:Inno.Core.Graphs.GraphEdgeRecord.input 5ae1c0b1835d91d41af937de3be3361907c3147b18c0ed3d5b54a55d36c69c7d -->

```csharp
public Inno.Core.Graphs.GraphEndpoint Inno.Core.Graphs.GraphEdgeRecord.input { get; }
```

Gets the destination endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L181).

## `output`

<a id="api-294700010ad79b42"></a>
<!-- api: P:Inno.Core.Graphs.GraphEdgeRecord.output 0e5b074fd792b3077ed05587a20157013573803d32b4c9b56e1849e81ff63165 -->

```csharp
public Inno.Core.Graphs.GraphEndpoint Inno.Core.Graphs.GraphEdgeRecord.output { get; }
```

Gets the source endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L176).
