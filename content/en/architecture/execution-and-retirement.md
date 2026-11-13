---
title: Execution scopes and retirement
description: Separate revocable service access, task ownership, owner-thread
  pumping and dependency-safe retirement.
uid: architecture.execution-and-retirement
kind: explanation
owners:
  - Inno.Core.Execution
contracts:
  - project.inno-core-execution#lifetime-and-retirement
---
# Execution scopes and retirement

A host needs separate answers for service access, work ownership, execution thread and resource release. InnoEngine's Core execution primitives keep those responsibilities distinct so a convenient facade cannot become a hidden global owner.

## Revocable access is not resource ownership

`ExecutionSlot<TValue>` stores a binding in an isolated `AsyncLocal` slot. The host explicitly provides the service or value through `Enter`; the returned scope must retire in last-in-first-out order. `threadAffine: true` also requires access and retirement on the entering thread.

Async descendants inherit the binding node. Retirement marks that shared node inactive and clears its strong value and parent references, preventing descendants from retrieving the retired service through the slot. `TryGet` returns false when unavailable; `current` throws. An expired or suspended child does not silently fall through to an enclosing value.

`Suspend` temporarily masks access and restores the enclosing binding when its scope retires. Neither an access scope nor suspension disposes the service. A separate lifetime owner controls that resource.

Revocation cannot invalidate a raw reference that a caller already retrieved and stored. Borrowers must respect the binding's lifetime and must not keep generation-owned services, delegates or types beyond it.

## Ownership precedes asynchronous execution

`LifetimeScope.RunAsync` registers a completion record under the owner's admission lock, then invokes caller work outside the lock. This closes the gap between starting I/O and discovering that retirement already began, while allowing caller code to reenter cancellation without running under the ownership lock.

Successful and canceled owned work is removed on completion without a separate cleanup continuation. External `Track` tasks have a completion observer that does not capture an execution context. Faults are retained for retirement reporting. Linked cancellation registrations are released before the owned completion is published.

These mechanisms avoid keeping a completed result or copied execution-scope root alive through unnecessary callbacks. They do not make arbitrary caller state thread safe or cancel a task that ignores its token.

## A host pump owns its blocking boundary

`OwnerThreadExecution.Run` installs a synchronization context on the calling thread, starts an owned asynchronous operation and pumps posted continuations until completion has been consumed on that queue. It drains already queued work, including callbacks posted by drained callbacks, and restores the previous context even after failure or cancellation.

Use this at a blocking host entry boundary. A callback-driven window host uses its platform synchronization context instead. The operation must own and retire every task it starts before returning; `async void` work is unsupported. Code that suppresses context capture must explicitly return to the owner before touching thread-affine resources.

## Pending work retains dependencies

Retirement stops admission, requests cancellation and waits for quiescence before reverse-order release. Ordinary release failures permit other eligible cleanup and are reported together. A pending child is different: the child and all dependencies behind it must remain alive.

`RetirementPendingException.Find` classifies an entire exception tree, including aggregate and ordinary inner wrappers. A nested `RetirementTimeoutException` takes precedence over retryable pending work. Keep and propagate the **original tree**; the classified exception alone loses context and sibling failures.

`CollectCompletedFailures` retains ordinary error branches across retries, deduplicating by exception instance. It does not turn a temporary pending signal into a completed cleanup failure. A lifetime that already completed a resource does not dispose that resource again when a later child becomes pending.

## A deadline bounds retry, not execution

`RetirementBarrier` advances one owner's retryable cleanup on the thread that created the barrier. The default deadline is thirty seconds from the first attempt; an explicit timeout must be positive. Repeated attempts do not reset it. `TryComplete` makes one attempt and returns false while retirement is pending within the deadline. `Wait` repeatedly attempts cleanup for failed startup or final shutdown, and the callback must include any required owner-queue draining.

The barrier owns no resource and retains no cleanup delegate. If a pending result exceeds the deadline, or an inner operation reports a terminal timeout, the barrier remains faulted and does not call later cleanup delegates. Dependencies remain protected; the host must fault admission instead of starting a replacement over live old resources.

The deadline is checked when an attempt returns or throws. It cannot interrupt an indefinitely blocking callback. This runtime ownership deadline is also distinct from build-duration monitoring: a legitimate long compiler invocation is not declared stuck merely because a short wall-clock target elapsed.

Successful work retirement and collectible assembly unload are separate proofs. A drained operation can still leave external roots alive; an unload check cannot replace orderly cancellation and resource retirement.

## Apply the model

- [Own asynchronous work](../manual/execution/own-async-work.md) before it starts and retain its dependencies.
- [Stop frame coroutines](../manual/execution/run-coroutines.md) before their owner's generation exits.
- [Complete frame jobs](../manual/execution/schedule-frame-jobs.md) and drain owner-thread callbacks.
- Read [ownership and lifetime](ownership.md) before extending a borrowed resource's lifetime.
