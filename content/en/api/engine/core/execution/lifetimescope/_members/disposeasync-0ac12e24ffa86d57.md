---
uid: api.0ac12e24ffa86d572ac2b94a85728408264e8ae92c4cd8a22b6f29138a72f319
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.DisposeAsync"
source: xml
reviewed: 5e70905d3e2daedb4f0a134a6e59c07c3ef993fa1638a8f1d2ec332a6edc6697
title: "DisposeAsync"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Cancels and asynchronously drains tracked work before reverse-order release.

## Remarks

Only use asynchronous disposal for thread-neutral resources. Control-thread owners must await their work and call synchronous disposal at their own safe point; this method does not marshal to an owner thread.

**Returns:** A task that completes only after work and resource retirement finish.

**Exception `T:System.AggregateException`:** Cancellation, work or resource retirement fails.
