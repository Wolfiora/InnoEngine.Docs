---
uid: api.directory.engine.core.execution
title: "Execution"
kind: landing
owners: []
---

# Execution

Find types in this project category. Each type links to its exact declarations and member contracts.

## Types

| Type | Purpose |
| --- | --- |
| [ExecutionSlot&lt;TValue&gt;](executionslot/index.md) | Provides an isolated, revocable execution binding whose values never survive scope retirement. |
| [LifetimeScope](lifetimescope/index.md) | Owns cancellation, tracked work and reverse-order resource retirement for one lifecycle. |
| [OwnerThreadExecution](ownerthreadexecution/index.md) | Runs asynchronous application work while returning its continuations to the calling thread. |
| [RetirementBarrier](retirementbarrier/index.md) | Bounds owner-thread retirement attempts without taking resource ownership or releasing pending dependencies. |
| [RetirementPendingException](retirementpendingexception/index.md) | Reports that cancellation has begun but the owner must retain its dependencies until work drains. |
| [RetirementTimeoutException](retirementtimeoutexception/index.md) | Reports an expired retirement deadline without granting permission to release dependent resources. |

