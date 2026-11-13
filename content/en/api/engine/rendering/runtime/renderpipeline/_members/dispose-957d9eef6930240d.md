---
uid: api.957d9eef6930240d48bd7faea27cc109624d8081720fb8451f67a9f5462e0a52
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderPipeline.Dispose"
source: xml
reviewed: 87b493805ea02c6b99b94035ef4cbca69d70be56cab6610fed3a9db125632c40
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Releases generation-scoped pipeline state.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Pipeline work is still active. The owner must retain this instance and retry before releasing dependencies.
