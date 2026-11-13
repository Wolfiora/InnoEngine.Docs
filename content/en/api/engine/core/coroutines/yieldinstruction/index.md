---
uid: api.inno.core.coroutines.a46d7a711104ae23
symbol: "engine:Inno.Core.Coroutines:T:Inno.Core.Coroutines.YieldInstruction"
source: xml
reviewed: 76cafdb8517819f3e92038f313aa9087a282497abac0f37eede89e4df9884dba
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
