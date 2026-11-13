---
uid: api.ef5a9ce4e8f397bbbe958b0ef9181773d078f211a1fb1131c5a9b69b51e7a183
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderPipeline.Dispose"
source: xml
reviewed: d3392d7ef49d5bcbf70065ee4153cd1113dc8d572e0dddde261c64506700caec
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Releases generation-scoped pipeline state.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Pipeline work is still active. The owner must retain this instance and retry before releasing dependencies.
