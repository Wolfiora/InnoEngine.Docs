---
title: Inno.Core.Execution
description: Revocable execution bindings, admitted asynchronous work and dependency-safe retirement for host owners.
uid: project.inno-core-execution
kind: project
owners:
  - Inno.Core.Execution
---
# Inno.Core.Execution

This BCL-only foundation provides isolated execution bindings, lifetime-owned work and owner-thread retirement primitives. It does not depend on Scene, Runtime, Assets or a backend, and does not choose a session or global service for callers.

## Tasks and model

Start with [owning asynchronous work](../../manual/execution/own-async-work.md), then read [execution scopes and retirement](../execution-and-retirement.md) for the distinction between access, ownership, thread execution and release.

`ExecutionSlot<TValue>` lends a revocable value through a strict scope. `LifetimeScope` admits tasks and owns disposable resources. `OwnerThreadExecution` supplies a blocking host pump. `RetirementBarrier` advances a retryable owner operation without taking resource ownership. These are composed explicitly; none substitutes for the others.

## Lifetime and retirement

Scope access and disposal follow last-in-first-out order, and thread-affine scopes require the entering thread. Revocation prevents future slot reads, but cannot revoke raw references already copied by callers. Scope retirement does not dispose the bound service.

A lifetime rejects new work/resources after stopping. `RunAsync` admits work before invoking it; rejected `Track` leaves ownership of its already-started task with the caller. Caller work and cancellation callbacks must return cooperatively. Faulted work remains reportable; a completed task with pending-retirement failure still blocks dependent release.

Resources release in reverse registration order. Ordinary errors aggregate; pending work retains the current and remaining dependencies for retry. Concurrent/reentrant retirement cannot invoke the same release twice. `DisposeAsync` is for thread-neutral resources and does not marshal back to a control thread.

Classify wrapped pending/timeout signals with `RetirementPendingException.Find`, but preserve the complete original failure tree. A terminal timeout retains dependencies and faults admission. A barrier's deadline begins on its first attempt and cannot preempt arbitrary user code. It is separate from proving collectible-assembly unload.

The public types are host CLR contracts. Their presence here does not certify a script projection or a product integration.

## Type reference

Browse the [execution types](../../api/engine/core/execution/index.md) for exact declarations, overloads and member-level contracts. Start with [LifetimeScope](../../api/engine/core/execution/lifetimescope/index.md) for admitted work and [RetirementBarrier](../../api/engine/core/execution/retirementbarrier/index.md) for owner-thread retry.
