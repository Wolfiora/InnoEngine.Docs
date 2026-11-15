---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6775b5eb9958db6bebe3284132d95670d3d626e4e1d7014f15400911b0e1f28b
symbol: engine:Inno.Rendering:M:Inno.Rendering.RenderGraphMutationScope.Dispose
title: RenderGraphMutationScope.Dispose
kind: api
owners:
- Inno.Rendering
apiSurface: source-clr
reviewed: 41d6ccee19ba8c1bb59738eea04f712e305ea7f35f665facb758a5bdc6ae5f4a

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Ends the current scope and removes all uncommitted additions, including output and name declarations.

## Exceptions

**Exception `T:System.InvalidOperationException`:** A nested mutation scope must be ended first.
