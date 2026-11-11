---
title: Schedule bounded frame jobs
description: Choose a scheduler strategy, express dependencies, complete a frame and drain owner-thread callbacks.
uid: manual.execution.schedule-frame-jobs
kind: how-to
owners:
  - Inno.Core.Jobs
contracts:
  - project.inno-core-jobs#frame-and-queue-contract
exampleMode: host
exampleProjects:
  - Inno.Core.Jobs
---
# Schedule bounded frame jobs

Use a session-owned `JobScheduler` for a finite set of jobs whose results belong to a frame. Choose deterministic single-thread execution or a worker pool, and keep frame ownership separate from individual job submission.

## Complete a frame explicitly

This host example transforms disjoint portions of an array and completes all work before reading the result. It uses no backend or Native preparation.

```csharp
using System;
using Inno.Core.Jobs;

static int[] BuildSquares(int count)
{
    ArgumentOutOfRangeException.ThrowIfNegative(count);
    int[] values = new int[count];
    using var scheduler = new JobScheduler(JobExecutionMode.SingleThread);
    scheduler.BeginFrame();
    try
    {
        JobHandle completed = scheduler.ParallelFor(count, 64, (start, end) =>
        {
            for (int index = start; index < end; index++)
                values[index] = checked(index * index);
        });
        scheduler.Complete(completed);
    }
    finally
    {
        scheduler.EndFrame();
    }
    return values;
}
```

For a persistent session, retain one scheduler and open/close a frame at the session boundary. A second `BeginFrame` before `EndFrame`, scheduling outside an active frame, invalid handles and job failures are explicit errors.

`Complete` blocks until the selected job finishes and reports its failure. In worker-pool mode, the waiting caller can execute available jobs while waiting; a job must not assume it always runs on a dedicated worker. `EndFrame` attempts completion of the frame's jobs, reclaims completed records and reports ordinary failures together. Pending retirement retains the unfinished frame.

## Express dependencies and protect state

Use the stateful `Schedule` overload to supply dependency handles, or `CombineDependencies` to obtain one completion point. `ParallelFor` divides the half-open range into contiguous batches and returns a combined handle.

Handle validity is local to its originating scheduler and frame generation. `JobHandle.isValid` only checks that it contains a nondefault identifier; it does not prove current liveness, success or ownership. Never pass a handle to another scheduler or retain it across frame retirement. A stale same-scheduler generation is rejected by resolution.

Dependencies order work; they do not transfer ownership of captured state or guarantee that downstream jobs are canceled when an earlier job fails. Inspect failures at the completion boundary. Keep captured resources alive until all jobs that use them finish, and synchronize shared mutable state yourself. Independent output ranges, as above, avoid conflicting writes.

## Choose limits before admission

| Option | Default when zero | Applies to |
| --- | ---: | --- |
| `maxFrameJobs` | 65,536 | Both strategies. |
| `mainThreadCapacity` | 65,536 waiting callbacks | Both strategies. |
| `mainThreadDrainBudget` | 4,096 queued callbacks per drain snapshot | Both strategies. |
| `workerCount` | Processor count minus one, at least one and at most 64 | Worker-pool strategy only. |

Negative admission/queue limits are rejected. Worker-pool worker counts reject negatives and cap positive values at 64. Single-thread mode does not consume `workerCount`.

Admission checks all dependency handles before allocating a new job. `ParallelFor` reserves capacity for its batches and combine record together, so capacity failure cannot leave a partially admitted range. Queue or frame capacity failure is not accepted work; the caller remains responsible for its state and response.

## Drain callbacks on the owner thread

`EnqueueMainThread` schedules a callback for the scheduler's owner. Only that thread may drain the queue. Single-thread scheduling operations also require the owner thread; worker-pool scheduling permits concurrent producers within a host-controlled frame. The host must prevent scheduling from racing with frame closure or scheduler disposal.

A drain first advances a previously pending callback. It then snapshots the waiting count up to the configured budget. Callbacks posted while processing that snapshot wait for a later drain. The retained/executing callback is counted separately from waiting capacity, so pending and peak statistics can reach `capacity + 1`.

If a callback reports pending retirement, the queue retains that same callback and its `RetirementBarrier` for a later safe point. Ordinary failures remain reportable across these retries. Do not enqueue a replacement callback to hide a still-pending operation.

## Shut down without abandoning work

Dispose on the scheduler's owner thread. Shutdown completes the active frame, closes admission to the main-thread queue, cancels callbacks that have not started and finishes retirement of a callback already in progress. It then stops and joins worker threads and releases retained scheduling state. Pending retirement preserves the dependencies and permits retry; completed ordinary failures remain visible.

Jobs and callbacks must return in finite time. Shutdown cannot safely preempt an infinite loop, and an owner retirement deadline is not a thread-abort mechanism. A failed worker-pool constructor stops and joins already-started workers before releasing synchronization objects.

Use `statistics` to inspect frame job counts, rejected work, queue pressure and canceled callbacks. These measurements describe the scheduler's admitted work, not a general CPU profiler.

See [JobScheduler](../../api/types/core-jobs/jobscheduler.md) for exact scheduling signatures and [JobSchedulerOptions](../../api/types/core-jobs/jobscheduleroptions.md) for the selected policy inputs.
