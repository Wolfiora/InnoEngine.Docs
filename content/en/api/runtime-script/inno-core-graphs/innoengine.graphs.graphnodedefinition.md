---
title: "GraphNodeDefinition"
description: "Reference for GraphNodeDefinition in Inno.Core.Graphs."
uid: api.inno.core.graphs.runtime-script.b385f299f157aff5
kind: api
owners:
  - Inno.Core.Graphs
apiSurface: runtime-script
contracts:
  - project.inno-core-graphs#document-and-definition-contract
  - manual.scripting.use-script-api
---
# `GraphNodeDefinition`

This reference describes `GraphNodeDefinition` in `Inno.Core.Graphs`. Read the [shared contract](../../projects/inno-core-graphs.md#document-and-definition-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-8487a3c8e195fe63) | Method |
| [`GetPorts`](#api-1ca5df253537e0d4) | Method |
| [`category`](#api-7c3ad1133f56d106) | Property |
| [`displayName`](#api-cac8fa98a0ea1387) | Property |
| [`id`](#api-1b29a7199c9f03ac) | Property |

## Type declaration

<a id="api-b385f299f157aff5"></a>
<!-- api: T:InnoEngine.Graphs.GraphNodeDefinition 8b7863b2f7bbd498b5081b629109c81005d693100ffc379dd1c434a2afeadc35 -->

```csharp
public abstract class InnoEngine.Graphs.GraphNodeDefinition
```

Describes node presentation and resolves ports without entering graph persistence.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L114).

## `#ctor`

<a id="api-8487a3c8e195fe63"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeDefinition.#ctor(System.String,System.String,System.String) 6f67a3bea3291cf65e870be29b422d61e6bf5296a7c2f4ab0aae2391758359cb -->

```csharp
protected InnoEngine.Graphs.GraphNodeDefinition.GraphNodeDefinition(string id, string displayName, string category)
```

Creates a graph node definition.

**Parameter `id`:** Globally stable definition identifier.

**Parameter `displayName`:** Artist-facing display name.

**Parameter `category`:** Search-menu category path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L128).

## `GetPorts`

<a id="api-1ca5df253537e0d4"></a>
<!-- api: M:InnoEngine.Graphs.GraphNodeDefinition.GetPorts(InnoEngine.Graphs.GraphNodeRecord) 14c31d4eb8a9646d6fd890e684363b1a97a0811ca1b7618599020f977b502595 -->

```csharp
public abstract System.Collections.Generic.IReadOnlyList<InnoEngine.Graphs.GraphPortDefinition> InnoEngine.Graphs.GraphNodeDefinition.GetPorts(InnoEngine.Graphs.GraphNodeRecord node)
```

Resolves ports for one node record, including any data-driven dynamic ports.

**Parameter `node`:** Neutral node record to inspect.

**Returns:** The complete port definitions for the current node state.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L165).

## `category`

<a id="api-7c3ad1133f56d106"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeDefinition.category 820e0e5dfc5bb260f493a85e8be4ce7991ee8b723d0bbefd6893394eaba6bfd5 -->

```csharp
public string InnoEngine.Graphs.GraphNodeDefinition.category { get; }
```

Gets the search-menu category path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L154).

## `displayName`

<a id="api-cac8fa98a0ea1387"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeDefinition.displayName bd3edd7a0f853e1c575f5825d4f5d65d5b6d4c1515a25101c9fe03f0d3d680d7 -->

```csharp
public string InnoEngine.Graphs.GraphNodeDefinition.displayName { get; }
```

Gets the artist-facing display name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L149).

## `id`

<a id="api-1b29a7199c9f03ac"></a>
<!-- api: P:InnoEngine.Graphs.GraphNodeDefinition.id b6fecebc323428ae2b5624aa9facaad1704403e3a30c009cdf3164dc4829da0d -->

```csharp
public string InnoEngine.Graphs.GraphNodeDefinition.id { get; }
```

Gets the globally stable definition identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/foundation/core/Inno.Core.Graphs/GraphDefinitions.cs#L144).
