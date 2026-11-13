---
uid: api.80eb06dca624841fc335b4775d2b545024bbed4414efea17ec8c1e11c9c01e34
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.DependencyGraph\u00601.TryFindCycle(System.Collections.Generic.IReadOnlyList{\u00600}@)"
source: xml
reviewed: ddb5b7bbca85f4167b82858a460613cf67091a62048912a7f84c60f563c58fe9
title: "TryFindCycle"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Tries to find one complete cycle in the graph.

**Parameter `cycle`:** A closed cycle whose first and last nodes are equal, or an empty list when acyclic.

**Returns:** `true` when a cycle was found.
