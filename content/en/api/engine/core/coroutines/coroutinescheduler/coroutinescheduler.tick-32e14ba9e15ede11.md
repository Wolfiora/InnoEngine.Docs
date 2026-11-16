---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.32e14ba9e15ede112f83ae0f7a882a99f078a29cc62637b61eaa82c2f9b76b33
symbol: engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.CoroutineScheduler.Tick(System.Single)
title: CoroutineScheduler.Tick
kind: api
owners:
- Inno.Core.Coroutines
apiSurface: source-clr
reviewed: a3020213e726d8bfe378cfe791c948383230721671fb8831ebf601ba725596b1
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `deltaTime`:** Frame delta time in seconds.

## Exceptions

**Exception `T:System.AggregateException`:** Execution, a wait predicate, or enumerator cleanup failed.

**Exception `T:System.InvalidOperationException`:** A callback recursively advances this scheduler.

**Exception `T:System.ObjectDisposedException`:** The scheduler has been disposed.
