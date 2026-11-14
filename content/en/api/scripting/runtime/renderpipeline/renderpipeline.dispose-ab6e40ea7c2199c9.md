---
uid: api.ab6e40ea7c2199c959bcb2de6d1a34dd6ee6d06b55f4150a9f970d3211c8cff6
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderPipeline.Dispose(System.Boolean)"
source: xml
reviewed: 1f270918aedc7ca4b4e2c6845bc6765a09b35e7bab4e5b6fa1daad1d762e1fbe
title: "RenderPipeline.Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.
