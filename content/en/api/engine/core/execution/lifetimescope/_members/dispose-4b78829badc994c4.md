---
uid: api.4b78829badc994c4629411a33e4e3f43496c476318ad271682803013d19a2302
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Dispose"
source: xml
reviewed: bd3150be1aeff87fd7a8f004efa2680df35b5242d99712b7c6822f2a0c26e10f
title: "Dispose"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Releases a quiescent lifetime in reverse registration order, continuing after ordinary cleanup failures.

## Remarks

Pending retirement retains the current resource and all remaining dependencies for a later attempt. Concurrent or reentrant retirement reports pending work without invoking a resource twice.

**Exception `T:System.InvalidOperationException`:** Tracked work remains active; drain it before retrying.

**Exception `T:System.AggregateException`:** Cancellation, work or resource retirement fails.
