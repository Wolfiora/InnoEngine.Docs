---
uid: api.8d5b07dd9bf6813e005e2506db009a54803ba48a3a79f4a8253b810dbe02b501
symbol: "scripting:Inno.Rendering.Runtime:M:InnoEngine.Rendering.RenderRequestProvider.Dispose(System.Boolean)"
source: xml
reviewed: 9c23e93a0971e70d48968733075322dd04ae492b551f6dafbf9715346fe25b34
title: "RenderRequestProvider.Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: editor-script
apiScope: Runtime
---

Releases managed generation-scoped state.

## Parameters

**Parameter `disposing`:** Always true for explicit disposal.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.
