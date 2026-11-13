---
uid: api.aae204ccedbde298a48a8b1f0a5a649b2e5dc3272097ed1a300b70d3c80069a5
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderRequestProvider.Dispose(System.Boolean)"
source: xml
reviewed: 95d54e7f322c8f8f08a04ca3418adfdcca1bf7ef07a5daaf0a9e23e533567360
title: "Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Releases managed generation-scoped state.

**Parameter `disposing`:** Always true for explicit disposal.

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** Retirement cannot complete yet; subsequent calls resume this hook with its remaining owned resources.
