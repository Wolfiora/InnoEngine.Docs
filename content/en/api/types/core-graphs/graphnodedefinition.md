---
title: "GraphNodeDefinition"
description: "Reference for GraphNodeDefinition in Inno.Core.Graphs."
uid: api.inno.core.graphs.d5402885075c5c99
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: source-clr
contracts:
  - project.inno-core-graphs#document-and-definition-contract
---
# `GraphNodeDefinition`

This reference describes `GraphNodeDefinition` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-77b0d5f17676d6d0) | Method |
| [`GetPorts`](#api-3712d4aaef3e1885) | Method |
| [`category`](#api-7f0f879d64185fb2) | Property |
| [`displayName`](#api-bdf24df0db68f106) | Property |
| [`id`](#api-239bc3ce0304066f) | Property |

## Type declaration

<a id="api-d5402885075c5c99"></a>
<!-- api: T:Inno.Core.Graphs.GraphNodeDefinition 181d7f45943032796e7b32bb6db54cf44836e5aba875f1187948efbe54f3cc61 -->

```csharp
public abstract class Inno.Core.Graphs.GraphNodeDefinition
```

Describes node presentation and resolves ports without entering graph persistence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L114).

## `#ctor`

<a id="api-77b0d5f17676d6d0"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeDefinition.#ctor(System.String,System.String,System.String) 4bb628d25a3558fa9fb5b107e760de86620baaae64957b04807892580c086410 -->

```csharp
protected Inno.Core.Graphs.GraphNodeDefinition.GraphNodeDefinition(string id, string displayName, string category)
```

Creates a graph node definition.

**Parameter `id`:** Globally stable definition identifier.

**Parameter `displayName`:** Artist-facing display name.

**Parameter `category`:** Search-menu category path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L128).

## `GetPorts`

<a id="api-3712d4aaef3e1885"></a>
<!-- api: M:Inno.Core.Graphs.GraphNodeDefinition.GetPorts(Inno.Core.Graphs.GraphNodeRecord) 7a307ec66d930381b623e5c42d1e5c99d41ebf9fba5e33dbc8a610827e33c070 -->

```csharp
public abstract System.Collections.Generic.IReadOnlyList<Inno.Core.Graphs.GraphPortDefinition> Inno.Core.Graphs.GraphNodeDefinition.GetPorts(Inno.Core.Graphs.GraphNodeRecord node)
```

Resolves ports for one node record, including any data-driven dynamic ports.

**Parameter `node`:** Neutral node record to inspect.

**Returns:** The complete port definitions for the current node state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L165).

## `category`

<a id="api-7f0f879d64185fb2"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeDefinition.category 67b14837aa306c55874ff4e0ac60e59991edb9c501ec4badd9d3cdac0b450bf9 -->

```csharp
public string Inno.Core.Graphs.GraphNodeDefinition.category { get; }
```

Gets the search-menu category path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L154).

## `displayName`

<a id="api-bdf24df0db68f106"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeDefinition.displayName ed3a00c45ac8dadfa6e13fc88bd830b4d40cf1c63b30ff060f57733f95d42519 -->

```csharp
public string Inno.Core.Graphs.GraphNodeDefinition.displayName { get; }
```

Gets the artist-facing display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L149).

## `id`

<a id="api-239bc3ce0304066f"></a>
<!-- api: P:Inno.Core.Graphs.GraphNodeDefinition.id b92e92a9b4a178a133ca04a76a3770ee50af4ed0dd8e9f64d5e459a2b3cffddb -->

```csharp
public string Inno.Core.Graphs.GraphNodeDefinition.id { get; }
```

Gets the globally stable definition identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L144).
