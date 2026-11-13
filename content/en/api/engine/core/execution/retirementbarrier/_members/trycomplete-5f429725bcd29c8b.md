---
uid: api.5f429725bcd29c8b3c53b7e024e1d3b35d83b7059bcee8bf0c790174dcc3fa4a
symbol: "engine:Inno.Core.Execution:M:Inno.Core.Execution.RetirementBarrier.TryComplete(System.Action)"
source: xml
reviewed: b3273806c149fe544c69ae4d748562b4bb50679e2e089d02a24b64b43384020c
title: "TryComplete"
kind: api
owners: [Inno.Core.Execution]
apiSurface: source-clr
---

Attempts retirement once at an owner-thread safe point.

**Parameter `retire`:** The owner's retryable retirement operation; the barrier never retains this delegate.

**Returns:** True after retirement completes, or false while work remains within its deadline.

## Remarks

Wrapped pending failures retain their ownership semantics. A nested timeout is rethrown in its original exception tree. Ordinary sibling failures survive retries and are reported once retirement completes.

**Exception `T:System.AggregateException`:** Retirement completed after earlier ordinary failures, or the owner reported a wrapped terminal timeout.

**Exception `T:Inno.Core.Execution.RetirementTimeoutException`:** Work exceeded its deadline. The barrier remains terminally faulted and dependencies must be retained.

**Exception `T:System.InvalidOperationException`:** The caller is not the thread that created this barrier.
