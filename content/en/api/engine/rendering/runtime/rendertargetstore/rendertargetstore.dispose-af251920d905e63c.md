---
uid: api.af251920d905e63ca9042fd2753c6f57df590423fa323f7fc20dd0e56b66f967
symbol: "engine:Inno.Rendering.Runtime:M:Inno.Rendering.Runtime.RenderTargetStore.Dispose"
source: xml
reviewed: 608d5153e0951ec7f785d8d7295e29f1393d295ed779aabbb510e0c0d26c2b72
title: "RenderTargetStore.Dispose"
kind: api
owners: [Inno.Rendering.Runtime]
apiSurface: source-clr
---

Queues all owned resources for device-safe destruction.

## Exceptions

**Exception `T:Inno.Core.Execution.RetirementPendingException`:** A backend resource is still active. Remaining resources stay owned until disposal is retried.

**Exception `T:System.AggregateException`:** Quiescent resources were all attempted, but one or more backend releases failed.
