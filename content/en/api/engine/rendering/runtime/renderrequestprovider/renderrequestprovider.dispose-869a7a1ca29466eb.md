---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.869a7a1ca29466ebcd7df1b73290bf210e34581356665b01ce0655e492918722
symbol: engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRequestProvider.Dispose
title: RenderRequestProvider.Dispose
kind: api
owners:
- Inno.Rendering.Runtime
apiSurface: source-clr
reviewed: e2be6ff5f50fbce1f2d0801050caf5efe8b2e6fc59c8ec225f45fb3b623c45dd

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Releases generation-scoped provider state.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider work is still active. The owner must retain this instance and retry before releasing dependencies.
