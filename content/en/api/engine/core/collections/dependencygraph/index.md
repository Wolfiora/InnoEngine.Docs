---
uid: api.inno.core.collections.446588c1dbf12be6
symbol: "engine:Inno.Core.Collections:T:Inno.Core.Collections.DependencyGraph\u00601"
source: xml
reviewed: 5d5c1576bbd46f34699b62c184d248d741a7482343b509e1230571c7fa6764aa
title: "DependencyGraph"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
contracts:
- project.inno-core-collections#graph-and-store-contract
aliases: []
---

Stores a directed dependency graph and provides deterministic dependency queries.

**Type parameter `TKey`:** The node key type.

## Remarks

An edge from `node` to `dependency` means that `node` depends on `dependency`. The graph accepts cycles; operations that require an acyclic graph, such as ``M:Inno.Core.Collections.DependencyGraph`1.TopologicalSort``, report them explicitly.
