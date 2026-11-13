---
uid: api.e922b49d58d1dfcf422fb9f0e584bc84a3a1b3532bf2ceaa2c1199fd8ecfa791
symbol: "engine:Inno.Core.Coroutines:M:Inno.Core.Coroutines.CoroutineScheduler.StopAllCoroutines(System.Object)"
source: xml
reviewed: ff2e6fe704f64768c4fe3d328f156c4d71abbe389f28926783af8f4dbb4d79fa
title: "StopAllCoroutines"
kind: api
owners: [Inno.Core.Coroutines]
apiSurface: source-clr
---

Stops owned coroutines and disposes their nested enumerators in reverse order. Reentrant calls defer cleanup of an executing callback until that callback returns.

**Parameter `owner`:** Owner key used when starting coroutines.

**Exception `T:System.AggregateException`:** One or more eligible enumerators failed during cleanup.

**Exception `T:System.ObjectDisposedException`:** The scheduler has been disposed.
