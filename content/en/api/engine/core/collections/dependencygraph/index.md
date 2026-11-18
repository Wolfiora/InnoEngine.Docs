---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.inno.core.collections.446588c1dbf12be6
symbol: engine:Inno.Core.Collections:T:Inno.Core.Collections.DependencyGraph`1
title: DependencyGraph<TKey>
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
sourceFingerprint: 627654d6a55f5ad48def43877674b4aa1473368783d156858b14cdb96dc4149f
contracts:
- project.inno-core-collections#graph-and-store-contract

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
aliases: []
---

## Type parameters

**Type parameter `TKey`:** The node key type.

## Remarks

An edge from `node` to `dependency` means that `node` depends on `dependency`. The graph accepts cycles; operations that require an acyclic graph, such as ``M:Inno.Core.Collections.DependencyGraph`1.TopologicalSort``, report them explicitly.
