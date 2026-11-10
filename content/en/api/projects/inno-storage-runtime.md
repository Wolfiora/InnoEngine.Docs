---
title: Inno.Storage.Runtime
description: Bounded asynchronous storage operations owned by a runtime session.
uid: project.inno-storage-runtime
kind: project
owners:
  - Inno.Storage.Runtime
---
# Inno.Storage.Runtime

This project binds application storage to a runtime session and tracks every accepted operation until completion or retirement. Its `StorageRuntime` is both the subsystem and the bounded `IApplicationStorage` service; the `storage` property returns that same wrapper, not an unprotected backend.

## Compose the service

`StorageRuntimeFactory` accepts a composition callback that creates a distinct service for each Edit, Play or Player session. A null result fails startup. Duplicate subsystem identities and dependency cycles are rejected by runtime-session composition rather than entering a partially initialized session.

`StorageRuntime` transfers ownership of a disposable backend into the operation lifetime. The default capacity is 128 simultaneous operations and 67,108,864 bytes per write. Both budgets must be positive. They control accepted work and value size, not filesystem quota or platform availability.

## Admission and lifetime contract

Exists, read, write, delete and list all pass through the same Core `LifetimeScope.RunAsync` boundary. Capacity is checked before the backend is invoked. `pendingOperations` and `rejectedOperations` expose neutral admission statistics. A caller cannot bypass this by using the `storage` property.

For an accepted write, the synchronous operation prefix checks the size limit and copies the complete value before awaiting backend work. Later caller mutation does not change that accepted write. Keep the supplied memory stable until the call has accepted or rejected it; this copy policy belongs to the runtime wrapper, not every possible raw `IApplicationStorage` implementation.

Caller cancellation is combined with runtime-lifetime cancellation. Beginning a frame installs the execution scope; ending it restores the parent scope. Stopping refuses new operations, requests retirement and retains the backend while accepted work remains active. Pending work produces `RetirementPendingException`; the owner retries cleanup on its owner thread after quiescence. It must not free the adapter beneath in-flight IO.

## Use and limits

Use the session's service or facade and await completion. Do not dispose a transferred backend directly, hide pending retirement, or spin retries until an overload appears to succeed. Application policy decides whether to queue, coalesce or reject a save request before it reaches the bounded service.

Read [saving application data](../../manual/storage/save-data.md) and [resource ownership](../../architecture/ownership.md) for the surrounding workflow. Filesystem path validation and atomic-file details remain the backend's responsibility.

## API reference

The reference retains the exact budgets, asynchronous return types and lifecycle declarations from the selected source.

[Browse storage runtime types](../types/storage-runtime/index.md).
