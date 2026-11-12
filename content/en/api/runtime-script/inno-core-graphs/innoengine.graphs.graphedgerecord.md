---
title: "GraphEdgeRecord"
description: "Reference for GraphEdgeRecord in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.6d2281476a84928a
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphEdgeRecord`

This reference describes `GraphEdgeRecord` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-c3a43730854b1bd4) | Method |
| [`id`](#api-fb3b282334a8acd9) | Property |
| [`input`](#api-f3ea297d513a1164) | Property |
| [`output`](#api-4b6a45b28a44d26d) | Property |

## Type declaration

<a id="api-6d2281476a84928a"></a>
<!-- api: T:InnoEngine.Graphs.GraphEdgeRecord d656682eb51a4d7c9871a38d6025db02eb424ab5687af282517d9d5e3aa38bff -->

```csharp
public sealed class InnoEngine.Graphs.GraphEdgeRecord
```

Stores one typed connection between two graph endpoints.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L144).

## `#ctor`

<a id="api-c3a43730854b1bd4"></a>
<!-- api: M:InnoEngine.Graphs.GraphEdgeRecord.#ctor(InnoEngine.Graphs.GraphEdgeId,InnoEngine.Graphs.GraphEndpoint,InnoEngine.Graphs.GraphEndpoint) e60fdc7d441ba32cd0e8b1ddc51aa0fbe11e75889fe1cf248a2cc95f43717562 -->

```csharp
public InnoEngine.Graphs.GraphEdgeRecord.GraphEdgeRecord(InnoEngine.Graphs.GraphEdgeId id, InnoEngine.Graphs.GraphEndpoint output, InnoEngine.Graphs.GraphEndpoint input)
```

Creates a graph edge record.

**Parameter `id`:** Stable edge identifier within the document.

**Parameter `output`:** Source endpoint.

**Parameter `input`:** Destination endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L158).

## `id`

<a id="api-fb3b282334a8acd9"></a>
<!-- api: P:InnoEngine.Graphs.GraphEdgeRecord.id 88925e1dace731cadc8c6d02d5af4d7e32253c84546b0579fe3da8205caf5f9e -->

```csharp
public InnoEngine.Graphs.GraphEdgeId InnoEngine.Graphs.GraphEdgeRecord.id { get; }
```

Gets the stable edge identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L171).

## `input`

<a id="api-f3ea297d513a1164"></a>
<!-- api: P:InnoEngine.Graphs.GraphEdgeRecord.input 6ab52af8c4333bbb16ba0ca36e68f6df80161e2a6f052f73fadfeecb4436c18c -->

```csharp
public InnoEngine.Graphs.GraphEndpoint InnoEngine.Graphs.GraphEdgeRecord.input { get; }
```

Gets the destination endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L181).

## `output`

<a id="api-4b6a45b28a44d26d"></a>
<!-- api: P:InnoEngine.Graphs.GraphEdgeRecord.output 4fa673485f46a2425a160850db47704c2436dae56b160ed5c640ecada4dc8ed1 -->

```csharp
public InnoEngine.Graphs.GraphEndpoint InnoEngine.Graphs.GraphEdgeRecord.output { get; }
```

Gets the source endpoint.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDocument.cs#L176).
