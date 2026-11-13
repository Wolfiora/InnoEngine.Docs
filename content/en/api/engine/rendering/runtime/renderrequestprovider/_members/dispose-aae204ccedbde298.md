---
uid: api.aae204ccedbde298a48a8b1f0a5a649b2e5dc3272097ed1a300b70d3c80069a5
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRequestProvider.Dispose(System.Boolean)"
source: xml
reviewed: 2e6d0cf27d9b9a7cfab23c4582696ac979093414ecb8160da458f42159a9d1a4
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.
