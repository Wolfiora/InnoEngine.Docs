---
uid: api.c7ef2a0ef71e252a9220c103220bb45a0cba98675510410f434a57e5378b47b3
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.TopologicalSort"
source: xml
reviewed: 790be441dd6a397e78246cdd76ffd9b0dcc279e918c77c0c31109eafa6285f5f
title: "DependencyGraph\u003CTKey\u003E.TopologicalSort"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Returns an order in which every dependency precedes its dependents.

**Returns:** A deterministic topological ordering.

**Exception `T:System.InvalidOperationException`:** Thrown when the graph contains a cycle. The exception message contains a complete cycle.
