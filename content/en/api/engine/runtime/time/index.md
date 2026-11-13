---
uid: api.inno.runtime.b97859746caf3165
symbol: "engine:Inno.Runtime:T:Inno.Runtime.Time"
source: xml
reviewed: a13076509b6072cfea888babfe2098b7fef86e62761437f1dc4fed4c23e8f72f
title: "Time"
kind: api
owners: [Inno.Runtime]
apiSurface: source-clr
contracts:
- project.inno-runtime
aliases: []
---

Provides Unity-style timing values for the runtime session bound to the current execution context.

## Remarks

This façade owns no process-global timing state. Engine systems update an instance clock and scripts resolve that clock through the active `T:Inno.Runtime.RuntimeSession` scope.
