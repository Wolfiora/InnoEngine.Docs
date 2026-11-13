---
uid: api.inno.core.coroutines.a46d7a711104ae23
symbol: "engine:Inno.Core.Coroutines:T:Inno.Core.Coroutines.YieldInstruction"
source: xml
reviewed: 2f05d459b0ddb08dc7dbf919b5b2446ab037631543a24c5eec0fcc80f1ce5dfb
title: "YieldInstruction"
kind: api
owners: [Inno.Core.Coroutines]
apiSurface: source-clr
contracts:
- project.inno-core-coroutines#execution-and-release-contract
aliases: []
---

Base type for the scheduler's built-in coroutine wait instructions.

## Remarks

Waiter creation is internal to this assembly. External callers use the supplied instruction types or compose supported yields in an enumerator; this is not an externally implementable extension point.
