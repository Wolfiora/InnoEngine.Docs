---
uid: api.9bf8d5cc6f100b6151645d727f2d14f55b18a97678b04d61d611647d9a244b07
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Advance"
source: xml
reviewed: fd335fc98d5ae364ffab33cedcd4fc4fe417fddc1f9984c12564df0dc9c4b8df
title: "Advance"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Performs a due full collection cycle and reevaluates every retired generation.

**Returns:** `true` only when every probe has completed; otherwise, `false`.

**Exception `T:Inno.Extensibility.Reload.AssemblyUnloadException`:** Thrown on every call after the retention threshold is reached while a generation remains reachable.
