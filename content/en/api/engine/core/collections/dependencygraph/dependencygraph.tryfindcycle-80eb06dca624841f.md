---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.80eb06dca624841fc335b4775d2b545024bbed4414efea17ec8c1e11c9c01e34
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.TryFindCycle(System.Collections.Generic.IReadOnlyList{`0}@)
title: DependencyGraph<TKey>.TryFindCycle
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 368ad6887041e93e7f66f1a1f8fdb002aaf07380f64eb3fa6edfeb681af21a20

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Tries to find one complete cycle in the graph.

## Parameters

**Parameter `cycle`:** A closed cycle whose first and last nodes are equal, or an empty list when acyclic.

## Returns

`true` when a cycle was found.
