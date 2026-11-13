---
uid: api.8d5b07dd9bf6813e005e2506db009a54803ba48a3a79f4a8253b810dbe02b501
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequestProvider.Dispose(System.Boolean)"
source: xml
reviewed: f19d8b9078bf44d1da85f2b888c9048009a9ba0d289e4a494ca3c23d62b21fee
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.
