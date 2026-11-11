---
title: Own asynchronous work until it finishes
description: Admit work before it starts, propagate cancellation, and retain resources until retirement completes.
uid: manual.execution.own-async-work
kind: how-to
owners:
  - Inno.Core.Execution
contracts:
  - project.inno-core-execution#lifetime-and-retirement
exampleMode: host
exampleProjects:
  - Inno.Core.Execution
---
# Own asynchronous work until it finishes

Use a `LifetimeScope` when a host component must stop accepting work, cancel its operations and release their dependencies in a known order. It is an explicitly owned component, not a global task registry. A successful cancellation request is not proof that the work has stopped.

## Choose the correct execution boundary

This guide uses the host CLR API. It does not establish that the same types are exported to project scripts. The component that creates a lifetime must also decide where its work runs and where its resources may be released.

Use `DisposeAsync` only for thread-neutral resources and work that can finish independently of an owner-thread pump. For UI, device or runtime control-thread resources, stop admission, keep advancing the required completion queues, and call synchronous `Dispose` at the owner's safe point. An ordinary `await` does not marshal back to an engine owner.

## Admit work before starting it

`RunAsync` reserves ownership before invoking the operation, including its synchronous prefix. It combines the lifetime token with the caller's token and returns the operation's result, cancellation or failure. Stopping or exhausting capacity rejects the call before invoking the operation.

The following complete host method owns one file read. Its caller supplies an existing readable path and observes the returned task. Reading failure or cancellation propagates; asynchronous disposal waits for the admitted work before completing.

```csharp
using System.IO;
using System.Threading;
using System.Threading.Tasks;
using Inno.Core.Execution;

static async Task<string> ReadOwnedTextAsync(
    string path,
    CancellationToken cancellationToken
) {
    await using var lifetime = new LifetimeScope(maxTrackedWork: 32);
    return await lifetime.RunAsync(
        token => new ValueTask<string>(File.ReadAllTextAsync(path, token)),
        cancellationToken);
}
```

For a longer-lived component, retain the lifetime as part of that component instead of creating one per call. Observe each returned task even though the lifetime also retains failures for its retirement report.

`Track` accepts an already started task. If admission fails, the caller still owns that task and must cancel or drain it. Prefer `RunAsync` when you control startup; it avoids starting I/O before discovering that the owner has stopped.

## Register resources in dependency order

`Own(resource)` transfers disposal responsibility to the lifetime and returns the same resource for explicit wiring. Register lower-level dependencies first and dependent resources afterward. Retirement visits them in reverse registration order. Do not transfer the same release obligation twice or separately dispose an accepted resource while owned work may still use it.

The default retained-work capacity is 4,096. Successful and canceled work releases capacity; faulted work remains available for final reporting. `trackedWorkCount`, `peakTrackedWorkCount` and `rejectedWorkCount` help distinguish active work, retained failures and rejected admissions. Raising capacity does not fix an unobserved-failure loop.

## Cancel, drain and retire

1. Stop issuing new work through the component.
2. Request cancellation through `Cancel`, or begin disposal, which also requests it.
3. Allow every admitted operation and cancellation callback to finish. Keep required owner queues alive.
4. Retire resources on their permitted thread.
5. Report the original failure tree and preserve dependencies if retirement remains pending.

Cancellation callbacks execute synchronously on the calling thread and must return promptly. The lifetime does not interrupt arbitrary managed code. While a cancellation callback is executing, another thread cannot release the dependencies beneath it.

A `RetirementPendingException` means resources are still in use. Preserve the current resource and the lower-level dependencies behind it, then retry at a safe point. Ordinary cleanup failures are accumulated while eligible cleanup continues. They remain reportable across a later pending retry; already completed releases are not repeated.

If a completed task or cancellation callback reports pending retirement, that completed operation cannot be resumed by invoking it again. The lifetime retains the failure and dependencies. The enclosing host must enter its fault/recovery path rather than treating `Task.IsCompleted` as permission to release them.

## Diagnose a lifetime that cannot finish

| Symptom | Check |
| --- | --- |
| Admission fails before the operation starts | Whether retirement has started or retained-work capacity is exhausted. |
| Synchronous disposal reports pending work | Active operations, cancellation callbacks, reentrant disposal or a pending child owner. |
| Work waits forever for its continuation | Whether its owner-thread completion queue is still being advanced. |
| A completed task still blocks release | Whether its exception tree contains pending retirement or a terminal timeout. |
| Cleanup reports several errors | Preserve all ordinary failure branches; do not replace the original tree with one classified pending exception. |

Continue with [execution scopes and retirement](../../architecture/execution-and-retirement.md) for revocable bindings, owner-thread pumping and bounded retirement attempts.

For exact signatures and failure conditions, read [LifetimeScope](../../api/types/core-execution/lifetimescope.md) and [RetirementPendingException](../../api/types/core-execution/retirementpendingexception.md).
