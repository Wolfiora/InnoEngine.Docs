---
title: Inno.Core.Coroutines
description: Frame-driven enumerators with explicit scheduler ownership, supported waits and reverse-order cleanup.
uid: project.inno-core-coroutines
kind: project
owners:
  - Inno.Core.Coroutines
---
# Inno.Core.Coroutines

This project executes host-owned coroutine enumerators when a caller advances a `CoroutineScheduler`. It supports nested routines and built-in frame, time, predicate, task and handle waits without creating an update thread.

## Start with a task

[Run and stop frame-driven coroutines](../../manual/execution/run-coroutines.md) shows admission, ticking, wait selection and owner retirement. [Execution scopes and retirement](../../architecture/execution-and-retirement.md) explains why finishing a callback and proving a generation unloaded are separate obligations.

## Execution and release contract

Successful start transfers exclusive advancement and disposal of the enumerator to the scheduler. Owners are matched by reference identity. Individual stop and parameterless stop-all enqueue commands; owner-specific stopping obtains the tick gate and retires eligible matching work before a nonreentrant call returns. Reentrant self-stop invalidates the handle but defers executing-stack cleanup until the callback returns.

The host supplies ticks and elapsed seconds. Negative deltas become zero. Waiting for a task observes completion only; its owner must observe the result or failure. Unsupported yielded objects terminate the routine. `YieldInstruction` exposes built-in instruction identity but its internal waiter factory is not an external extension point.

Tick execution is serialized. Recursive ticks and yielding an enumerator already on the current stack are rejected. Stop/disposal cleanup runs on the calling operation's thread, so a host with thread-affine routines must choose that thread explicitly.

Nested disposable enumerators release child-first on completion, stop, failure and disposal. Entries are removed before cleanup to prevent duplicate release after reentrancy or errors. Eligible cleanup continues and the outer operation reports an aggregate failure. A never-started C# iterator has no entered `finally` body to run.

Owners, enumerators and waiters can retain a collectible generation. Stop the original owner at a safe point and wait for its executing callback to return before checking unload. A handle is weakly associated with its scheduler; `isValid` reports current liveness without owning the scheduler.

After disposal, start/tick/owner-stop fail, handle-stop returns false, parameterless stop-all returns, and repeated disposal does nothing. No callback preemption or automatic script-surface availability is promised.

## Type reference

Browse the [coroutine types](../types/core-coroutines/index.md), including [CoroutineScheduler](../types/core-coroutines/coroutinescheduler.md), [CoroutineHandle](../types/core-coroutines/coroutinehandle.md) and the supported wait instructions.
