---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0973ff2a1261d369f53b7ea15353f09f45cf67cbd95d519f0ea52606a3a21a39
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.GetDependents(`0,System.Boolean)
title: DependencyGraph<TKey>.GetDependents
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 04ef25929dc3f312ba49c7bc0bd17113ad6838dc7b69b311dcac219bbd92e467
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependents should be included.

## Returns

A stable dependent snapshot, or an empty list when the node is absent.
