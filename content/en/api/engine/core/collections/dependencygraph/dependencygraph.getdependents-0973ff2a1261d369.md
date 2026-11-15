---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0973ff2a1261d369f53b7ea15353f09f45cf67cbd95d519f0ea52606a3a21a39
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.GetDependents(`0,System.Boolean)
title: DependencyGraph<TKey>.GetDependents
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 743e10547db945a651e9fb2ae89a780e2dbe13af88ae8e57220adf3280520f00

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Gets direct or transitive dependents of a node.

## Parameters

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependents should be included.

## Returns

A stable dependent snapshot, or an empty list when the node is absent.
