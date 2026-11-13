---
uid: api.inno.core.collections.446588c1dbf12be6
symbol: "engine:Inno.Core.Collections:T:Inno.Core.Collections.DependencyGraph\u00601"
source: xml
reviewed: 2ce5e742fbb636e504cdd2fbf6c3263092fd9a0021f6e6066955a9a5e3f87a03
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
