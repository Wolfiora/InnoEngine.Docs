---
uid: api.869a7a1ca29466ebcd7df1b73290bf210e34581356665b01ce0655e492918722
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRequestProvider.Dispose"
source: xml
reviewed: e2be6ff5f50fbce1f2d0801050caf5efe8b2e6fc59c8ec225f45fb3b623c45dd
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Releases generation-scoped provider state.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Provider work is still active. The owner must retain this instance and retry before releasing dependencies.
