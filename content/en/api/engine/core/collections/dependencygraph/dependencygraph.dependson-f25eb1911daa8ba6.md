---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.f25eb1911daa8ba64c56878658cb2a05f70f57da5bde6f46df64323c5f47ea5b
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.DependsOn(`0,`0,System.Boolean)
title: DependencyGraph<TKey>.DependsOn
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: 49a83a8b56db149257567b4ac4d58aed2130927291e171121177b21f2440a774

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Determines whether one node directly or transitively depends on another.

## Parameters

**Parameter `node`:** The dependent node.

**Parameter `dependency`:** The dependency to find.

**Parameter `recursive`:** Whether transitive edges should be searched.

## Returns

`true` when the dependency exists.
