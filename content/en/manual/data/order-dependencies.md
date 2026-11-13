---
title: Order dependencies and inspect cycles
description: Model explicit dependency direction, find affected consumers and
  produce deterministic dependency-first order.
uid: manual.data.order-dependencies
kind: how-to
owners:
  - Inno.Core.Collections
contracts:
  - project.inno-core-collections#graph-and-store-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Collections
---
# Order dependencies and inspect cycles

Use `DependencyGraph<TKey>` when a host feature needs a persistent, keyed dependency model: an import graph, plugin requirement set or reload dependency closure. An edge from **node to dependency** means that the node depends on the other endpoint.

## Define the direction once

This complete host example declares two consumers of a texture and returns a dependency-first order. `AddDependency` creates absent endpoints. Ordinal equality and ordering make string identity and ordering explicit.

```csharp
using System;
using System.Collections.Generic;
using Inno.Core.Collections;

static IReadOnlyList<string> OrderAssets()
{
    var graph = new DependencyGraph<string>(StringComparer.Ordinal, StringComparer.Ordinal);
    graph.AddDependency("Scene", "Texture");
    graph.AddDependency("Material", "Texture");
    return graph.TopologicalSort();
}
```

The texture appears before both consumers. An ordering comparer chooses between otherwise eligible nodes; without one, insertion order provides the tie-breaker. Keep keys and comparer behavior stable while the graph contains them.

## Find the affected closure

| Question | Operation |
| --- | --- |
| What does this node directly require? | `GetDependencies(node)` |
| What does it require transitively? | `GetDependencies(node, recursive: true)` |
| Who directly depends on a changed node? | `GetDependents(node)` |
| Who can be affected transitively? | `GetDependents(node, recursive: true)` |
| Does one node require another? | `DependsOn`, with the desired recursive mode. |

The graph supplies topology. It does not decide which consumers need recompilation, behavior tests or resource retirement. That obligation belongs to the domain using the graph; a dependency edge alone is not a universal test selector.

## Handle cycles explicitly

Adding an edge does not require a DAG. Inspect `TryFindCycle` for one deterministic cycle path, or `GetStronglyConnectedComponents` to group mutually reachable nodes. `TopologicalSort` rejects a cycle because no dependency-first ordering exists for the whole graph.

Use `ReplaceDependencies` to replace one node's direct dependency set as a single graph operation. Removing a node removes both incoming and outgoing edges. `version` changes after successful structural mutations, not after a no-op lookup.

Operations synchronize the graph's internal state. A sequence of calls is not one transaction, and the graph does not own, dispose or synchronize objects referred to by its keys. Apply a separate host boundary when a decision must use one stable multi-operation view.

## Choose the appropriate model

This graph is for explicit persistent relationships. It is not the editable node/port document described in [preserving an editable graph](preserve-graph.md). It also does not replace compact frame-local job slots or a render compiler's resource-hazard model. Those owners may need different storage while preserving clear dependency direction.

See the [Collections reference](../../architecture/projects/inno-core-collections.md) for exact mutation, query and failure contracts.
