---
uid: api.9bf8d5cc6f100b6151645d727f2d14f55b18a97678b04d61d611647d9a244b07
symbol: "engine:Inno.Extensibility.Reload:M:Inno.Extensibility.Reload.AssemblyUnloadBarrier.Advance"
source: xml
reviewed: 9e9ef4f920f93db3af1b5ae1c7c15da2d08e85cab733051e58fd42ab7e055758
title: "AssemblyUnloadBarrier.Advance"
kind: api
owners: [Inno.Extensibility.Reload]
apiSurface: source-clr
---

Performs a due full collection cycle and reevaluates every retired generation.

**Returns:** `true` only when every probe has completed; otherwise, `false`.

**Exception `T:Inno.Extensibility.Reload.AssemblyUnloadException`:** Thrown on every call after the retention threshold is reached while a generation remains reachable.
