---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.c7ef2a0ef71e252a9220c103220bb45a0cba98675510410f434a57e5378b47b3
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.TopologicalSort
title: DependencyGraph<TKey>.TopologicalSort
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 60e4fd40a9157de07508a14359b0d37da4fa6e2dde7d5f38d10b930308e0e532
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Returns

A deterministic topological ordering.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Thrown when the graph contains a cycle. The exception message contains a complete cycle.
