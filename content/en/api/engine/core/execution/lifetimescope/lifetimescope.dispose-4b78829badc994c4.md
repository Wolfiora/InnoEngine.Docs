---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.4b78829badc994c4629411a33e4e3f43496c476318ad271682803013d19a2302
symbol: engine:Inno.Core.Execution:M:Inno.Core.Execution.LifetimeScope.Dispose
title: LifetimeScope.Dispose
kind: api
owners:
- Inno.Core.Execution
apiSurface: source-clr
reviewed: cc987c48a4792e52f7ed6928e03f07adecb3f52c6530cff8a89f26e877ff24c7
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
