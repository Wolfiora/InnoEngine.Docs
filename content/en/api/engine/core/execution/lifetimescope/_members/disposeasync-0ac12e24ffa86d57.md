---
uid: api.0ac12e24ffa86d572ac2b94a85728408264e8ae92c4cd8a22b6f29138a72f319
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.DisposeAsync"
source: xml
reviewed: da107e393ab7dc04c8ec9654d850972b852e788494315482e8cbdf4f6dd45a43
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
