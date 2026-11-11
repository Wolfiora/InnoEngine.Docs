---
title: Run and stop frame-driven coroutines
description: Advance enumerators from a host loop and release their stacks before an owner or generation retires.
uid: manual.execution.run-coroutines
kind: how-to
owners:
  - Inno.Core.Coroutines
contracts:
  - project.inno-core-coroutines#execution-and-release-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Coroutines
---
# Run and stop frame-driven coroutines

A `CoroutineScheduler` advances `IEnumerator` routines when its host calls `Tick`. It does not create an update thread or turn synchronous code into background work. Use it for explicit frame, time and condition waits within an owned loop.

## Start a routine and advance the loop

The following host example records one message on the first tick and another on the next tick. Successful admission transfers exclusive advancement and disposal of the enumerator to the scheduler. Do not reuse or dispose that enumerator yourself.

```csharp
using System;
using System.Collections;
using Inno.Core.Coroutines;

static IEnumerator ReportTwoFrames(Action<string> report)
{
    report("First frame");
    yield return new WaitForFrames(1);
    report("Next frame");
}

static void RunTwoFrames()
{
    using var scheduler = new CoroutineScheduler();
    object owner = new();
    CoroutineHandle handle = scheduler.StartCoroutine(owner, ReportTwoFrames(Console.WriteLine));
    scheduler.Tick(1.0f / 60.0f);
    scheduler.Tick(1.0f / 60.0f);
    Console.WriteLine(handle.isValid); // False after normal completion.
}
```

In a real host, call `Tick` once per intended update and provide the elapsed seconds for that update. Negative deltas are treated as zero. Time waits use the scheduler's accumulated deltas; no separate wall-clock or automatic engine time-scale service is implied.

## Choose a supported wait

| Yielded value | Resume condition |
| --- | --- |
| `null` | The next tick. |
| `WaitForFrames(n)` | The requested number of subsequent frames; nonpositive values still wait until the next tick. |
| `WaitForSeconds(seconds)` | Accumulated scheduler time reaches the target; nonpositive values wait until the next tick. |
| `WaitUntil(predicate)` | The predicate returns true. |
| `WaitWhile(predicate)` | The predicate returns false. |
| `WaitForTask(task)` or a `Task` | The task becomes completed, including faulted or canceled completion. |
| Another `IEnumerator` | Its nested routine finishes, then the parent resumes. |
| `CoroutineHandle` | The referenced coroutine is no longer live. Its own scheduler must still be advanced. |

Task waiting does not observe or rethrow the task's result. The task owner must inspect its completion and handle failure. A coroutine waiting on a handle does not acquire ownership of the other scheduler.

An unsupported yielded object ends that routine and releases its stack. Do not use an arbitrary object as a custom wait token. Although `YieldInstruction` is public, its waiter factory is internal; external implementations are not supported. Compose the built-in waits and enumerators instead.

## Stop an owner before reload

Use the same owner **instance** passed to `StartCoroutine`; owner matching uses reference identity, not value equality.

`StopCoroutine(handle)` and parameterless `StopAllCoroutines()` enqueue requests. Actual retirement occurs when commands are applied. In contrast, `StopAllCoroutines(owner)` obtains the tick gate and applies owner retirement before a nonreentrant call returns; it does not require another frame to release eligible matching routines.

When a running callback stops its own owner, its handle becomes invalid immediately, but its executing enumerator is released only after the callback returns. Do not declare a collectible assembly retired while that callback is still on the stack.

Enumerators, owners, wait predicates and tasks can retain generation objects. Stop the old owner's routines at its safe point before checking that a generation can unload. A copied handle is only a weak scheduler reference and live identifier; it does not keep the scheduler alive.

## Cleanup and failure

Nested enumerators are released child-first through `IDisposable` when they complete, stop, fail or the scheduler is disposed. Entries are popped before invoking cleanup so reentrancy or an exception cannot dispose the same entry twice. An unstarted iterator is disposed too, but a C# `try/finally` whose body was never entered does not thereby execute.

`MoveNext`, `Current`, predicate and cleanup failures are reported in an `AggregateException` after the outer tick, owner stop or disposal has attempted eligible cleanup. The failing coroutine retires; other eligible coroutines can still advance. The scheduler does not retain the reported exception list indefinitely.

Start/stop requests can come from other threads, but tick execution is serialized. Cleanup occurs on the thread performing the owning operation; callers with thread-affine routines must keep ticking, owner stops and disposal on the appropriate host thread. Reentrant `Tick` is rejected, as is yielding an enumerator already on the current stack. Synchronous callbacks must return or yield; no preemption or instruction budget is provided.

After disposal, starting, ticking and owner-specific stopping throw `ObjectDisposedException`. Stopping an individual invalid handle returns false, and parameterless stop-all safely returns. Repeated disposal does nothing.

See [CoroutineScheduler](../../api/types/core-coroutines/coroutinescheduler.md) for the precise start/stop overloads and [CoroutineHandle](../../api/types/core-coroutines/coroutinehandle.md) for live-handle semantics.
