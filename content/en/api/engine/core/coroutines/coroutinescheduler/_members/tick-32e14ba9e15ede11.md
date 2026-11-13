---
uid: api.32e14ba9e15ede112f83ae0f7a882a99f078a29cc62637b61eaa82c2f9b76b33
symbol: "engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.CoroutineScheduler.Tick(System.Single)"
source: xml
reviewed: e289fb19f65fd1ac41b11998b53350e6814d649000d59eec98514a0d271e359a
title: "Tick"
kind: api
owners: [Inno.Core.Coroutines]
apiSurface: source-clr
---

Advances coroutine execution by one frame.

**Parameter `deltaTime`:** Frame delta time in seconds.

**Exception `T:System.AggregateException`:** Execution, a wait predicate, or enumerator cleanup failed.

**Exception `T:System.InvalidOperationException`:** A callback recursively advances this scheduler.

**Exception `T:System.ObjectDisposedException`:** The scheduler has been disposed.
