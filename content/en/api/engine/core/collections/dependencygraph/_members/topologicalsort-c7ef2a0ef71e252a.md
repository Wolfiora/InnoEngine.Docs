---
uid: api.c7ef2a0ef71e252a9220c103220bb45a0cba98675510410f434a57e5378b47b3
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.TopologicalSort"
source: xml
reviewed: 137c1b7c9b7cc222a8c9957e05c1dd761ce556d80647bae0dc239d7ee3114cb2
title: "TopologicalSort"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Returns an order in which every dependency precedes its dependents.

**Returns:** A deterministic topological ordering.

**Exception `T:System.InvalidOperationException`:** Thrown when the graph contains a cycle. The exception message contains a complete cycle.
