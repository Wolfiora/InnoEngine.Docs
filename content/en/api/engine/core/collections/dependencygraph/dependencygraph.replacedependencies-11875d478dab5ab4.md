---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.11875d478dab5ab412ed1568cee431d59f993a5477318090f4252ecf9a6f5d4e
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph`1.ReplaceDependencies(`0,System.Collections.Generic.IEnumerable{`0})
title: DependencyGraph<TKey>.ReplaceDependencies
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: ab26490218aff8f7846c7448a78f3b40e1737422ed374ac626cbe1a393d31127

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Atomically replaces every direct dependency of a node.

## Parameters

**Parameter `node`:** The dependent node.

**Parameter `dependencies`:** The complete replacement dependency set.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `dependencies` is `null`.
