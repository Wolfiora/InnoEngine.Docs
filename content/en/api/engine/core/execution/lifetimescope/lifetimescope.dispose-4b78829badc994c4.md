---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.4b78829badc994c4629411a33e4e3f43496c476318ad271682803013d19a2302
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Dispose
title: LifetimeScope.Dispose
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
sourceFingerprint: 304ec682b4b6f57f15c66dd93e376cbfcc56b53ce93964f90e36299e8a8100d8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Pending retirement retains the current resource and all remaining dependencies for a later attempt. Concurrent or reentrant retirement reports pending work without invoking a resource twice.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Tracked work remains active; drain it before retrying.

**Exception `T:System.AggregateException`:** Cancellation, work or resource retirement fails.
