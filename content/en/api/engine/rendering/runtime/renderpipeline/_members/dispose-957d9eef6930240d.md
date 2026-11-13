---
uid: api.957d9eef6930240d48bd7faea27cc109624d8081720fb8451f67a9f5462e0a52
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderPipeline.Dispose"
source: xml
reviewed: d1b283fed1af1bcf53a14ef12ce97a10e7a77a369f458729696fe2cc58aeec90
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Releases generation-scoped pipeline state.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Pipeline work is still active. The owner must retain this instance and retry before releasing dependencies.
