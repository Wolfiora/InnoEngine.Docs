---
uid: api.11875d478dab5ab412ed1568cee431d59f993a5477318090f4252ecf9a6f5d4e
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.ReplaceDependencies(\u00600,System.Collections.Generic.IEnumerable{\u00600})"
source: xml
reviewed: ab26490218aff8f7846c7448a78f3b40e1737422ed374ac626cbe1a393d31127
title: "DependencyGraph\u003CTKey\u003E.ReplaceDependencies"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Atomically replaces every direct dependency of a node.

**Parameter `node`:** The dependent node.

**Parameter `dependencies`:** The complete replacement dependency set.

**Exception `T:System.ArgumentNullException`:** Thrown when `dependencies` is `null`.
