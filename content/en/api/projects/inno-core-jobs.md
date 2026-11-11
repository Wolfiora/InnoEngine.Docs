---
title: Inno.Core.Jobs
description: Session-owned frame job scheduling with finite admission and an explicit owner-thread callback queue.
uid: project.inno-core-jobs
kind: project
owners:
  - Inno.Core.Jobs
---
# Inno.Core.Jobs

This project owns frame-scoped jobs behind `JobScheduler`, with single-thread and work-stealing worker-pool strategies. It composes Core execution retirement for pending owner-thread callbacks and exposes detached admission statistics.

## Start with a task

[Schedule bounded frame jobs](../../manual/execution/schedule-frame-jobs.md) explains frame lifetime, dependencies, limits, callback draining and shutdown. Read [execution scopes and retirement](../../architecture/execution-and-retirement.md) before writing a callback that can report pending release.

## Frame and queue contract

The host owns `BeginFrame`/`EndFrame` sequencing and prevents submissions from racing frame closure or disposal. Single-thread job mutation requires the owner thread. Worker-pool scheduling accepts concurrent producers; callback draining and scheduler disposal still require the owner. A waiting worker-pool caller may execute available jobs, so work must not assume a dedicated background thread.

Jobs retain their callback and state until completed records are reclaimed. Keep dependencies alive and synchronize shared state. Handles belong to their original scheduler and frame generation. `isValid` tests identifier shape, not liveness, successful execution or cross-scheduler identity. Do not reuse a foreign or retired-frame handle.

Dependencies are validated before admission. `ParallelFor` reserves all range batches and the combine record together. Invalid input and exhausted capacity fail without partially accepted work. Dependency ordering does not imply downstream cancellation after a failure. `Complete` reports the selected operation's failure; frame completion attempts all eligible work and aggregates ordinary failures.

Frame and queue limits apply to both strategies. Zero selects 65,536 jobs, 65,536 waiting callbacks and a 4,096-item drain budget. The current retained/executing callback is additional to waiting capacity. Worker count applies only to the worker pool and is bounded to 1–64 after default resolution.

Queue draining advances an existing pending callback before taking the next bounded waiting snapshot. New callbacks posted during that snapshot wait for a later drain. Pending cleanup retains the same callback and retirement barrier; ordinary errors survive retries. Closing cancels callbacks that have not started, but must finish a callback already in progress.

Disposal completes an active frame before stopping and joining workers. Pending retirement retains dependencies for retry. Ordinary shutdown errors remain reportable after eligible release. Jobs/callbacks must return cooperatively; there is no safe interruption of an arbitrary infinite callback. Public CLR presence does not establish script-projected availability.

## Type reference

Browse the [job types](../types/core-jobs/index.md), beginning with [JobScheduler](../types/core-jobs/jobscheduler.md), [JobSchedulerOptions](../types/core-jobs/jobscheduleroptions.md) and [JobHandle](../types/core-jobs/jobhandle.md).
