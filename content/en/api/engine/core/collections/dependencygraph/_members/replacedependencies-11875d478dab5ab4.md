---
uid: api.11875d478dab5ab412ed1568cee431d59f993a5477318090f4252ecf9a6f5d4e
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.ReplaceDependencies(\u00600,System.Collections.Generic.IEnumerable{\u00600})"
source: xml
reviewed: 35f19f402fb53f03c92a3283601ed0cd41c0c8ad6f5f7fabdc5c60b674034239
title: "ReplaceDependencies"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Atomically replaces every direct dependency of a node.

**Parameter `node`:** The dependent node.

**Parameter `dependencies`:** The complete replacement dependency set.

**Exception `T:System.ArgumentNullException`:** Thrown when `dependencies` is `null`.
