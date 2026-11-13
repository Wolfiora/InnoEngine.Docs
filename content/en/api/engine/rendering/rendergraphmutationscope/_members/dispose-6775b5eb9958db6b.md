---
uid: api.6775b5eb9958db6bebe3284132d95670d3d626e4e1d7014f15400911b0e1f28b
symbol: "engine:Inno.Rendering:M:Inno.Rendering.RenderGraphMutationScope.Dispose"
source: xml
reviewed: 39dd17b3749f0bd041251d50840d3a5d93479ea871a156b34a597ad8d10bd5d0
title: "Dispose"
kind: api
owners: [Inno.Rendering]
apiSurface: source-clr
---

Ends the current scope and removes all uncommitted additions, including output and name declarations.

**Exception `T:System.InvalidOperationException`:** A nested mutation scope must be ended first.
