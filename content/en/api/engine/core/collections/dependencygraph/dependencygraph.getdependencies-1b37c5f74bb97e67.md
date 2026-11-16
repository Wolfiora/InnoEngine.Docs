---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.1b37c5f74bb97e670219d890d8bf248cfba055597783feb916fdafdf668b94d6
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.GetDependencies(`0,System.Boolean)
title: DependencyGraph<TKey>.GetDependencies
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 16b540d3cdbef9aa725f356f43998ec70587ef5e181412e247e4dc0899cc4b2a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `node`:** The node to query.

**Parameter `recursive`:** Whether transitive dependencies should be included.

## Returns

A stable dependency snapshot, or an empty list when the node is absent.
