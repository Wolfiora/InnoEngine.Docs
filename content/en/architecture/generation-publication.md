---
title: Generation publication and unload verification
description: Understand shared admission, reversible publication, irreversible cleanup and weak unload evidence.
uid: architecture.generation-publication
kind: explanation
owners:
  - Inno.Extensibility.Modules
  - Inno.Extensibility.Types
  - Inno.Extensibility.Reload
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# Generation publication and unload verification

A reload changes code, type facts and domain instances together. InnoEngine uses one generation coordinator owned by the module host so that prepared candidates, read leases, publication and retirement cannot independently claim incompatible states.

Module sources acquire code. Catalog participants derive unpublished state. Domain owners capture their own changes. The coordinator orders publication and retirement; it does not implement a second loader or decide application-specific Missing recovery.

## Admission states

| State | Meaning |
| --- | --- |
| `Ready` | A new permitted operation can enter, subject to current readers. |
| `Transitioning` | One control thread owns generation publication. |
| `AwaitingCollection` | Published state exists, but retired collectible code has not passed weak unload verification. |
| `Faulted` | A terminal ownership/cleanup failure requires replacing the host. |

`AcquireRead` protects Build/Export and their asynchronous consumers. Multiple readers can coexist; a generation change cannot begin until they leave. Release the lease only after all consumers and borrowed snapshots have retired.

`AcquireOperation` protects a synchronous domain operation on published data. It may access already published state while previous code awaits collection, but does not authorize Play, Build, Export or another reload. The publication control thread can borrow this scope; other threads cannot enter its publication. Disposing a borrowed scope does not end the transaction.

`TryAcquireChange` returns false when active readers, a transition or retirement require automatic refresh to defer. A terminal failure still throws. A reservation excludes new readers; it is not a way to ignore existing ones.

## Commit and rollback

The generic coordinator copies the ordered domain changes, prepares each change, activates the code/catalog publication and applies the changes. Completion commits publication, tracks its retirement probe and completes domain cleanup.

Before commit, failure rolls back domain structure in reverse order, restores publication, then restores prior domain state. That ordering lets old state resolve against the old publication. If compensation fails, the gate faults rather than reporting a clean rollback.

After commit, cleanup failure is irreversible: preserve and report the failure, close admission, and do not pretend the candidate was rolled back. Type registries use this same distinction between reversible activation and cleanup-only completion.

## Pending retirement is an ownership signal

Core `RetirementPendingException` means work still needs its owner/dependencies. It differs from an ordinary terminal cleanup error, including when nested in aggregate or inner exceptions.

Within a domain, a retirement barrier can retry draining at the owner-thread safe point. If pending work reaches a cross-generation transaction boundary, the coordinator retains publication and domain changes, faults admission and stops further dependency destruction or ordinary compensation. Clearing references at that point would hide live ownership rather than fix it.

`EnsureRetirementSafe` preserves this distinction even if an earlier ordinary failure has already been recorded. Registries, catalogs and hosts retain the original exception/transaction; repeated disposal cannot erase it. `Fault` has no reset-to-Ready branch.

## Verify collectible unload

An `IAssemblyUnloadProbe` observes retirement without retaining its target code. `AssemblyUnloadBarrier` checks all probes around a full GC, pending-finalizer wait and another full GC. Collection/finalizer work occurs outside the admission lock.

Interactive hosts advance the barrier at safe points. Shutdown may wait with cancellation. Canceling a wait does not mark the probe complete or discard the barrier. A retention timeout produces a terminal `AssemblyUnloadException` identifying remaining generations, elapsed time and collection attempts.

This timeout concerns leaked generation ownership. It is not a deadline for legitimate compiler or third-party Native build duration. Do not raise it merely to conceal retained plugin objects, and do not apply it to unrelated CI processes.

Static linked code has a different lifetime and must not be advertised as successfully collectible. A returned probe also does not prove completion; admission remains restricted until the shared owner verifies every relevant retirement.

## Reuse discovery without retaining replaced code

Type snapshots reuse discovery slices for the same `Assembly` object when it remains in the candidate closure. A replacement in another collectible context is a different assembly object even if its bytes are unchanged, so its type discovery belongs to the new generation.

Snapshots deliberately strongly retain their selected declarations to make a consistent query possible. Replacing those references with weak ones would make the snapshot change during GC and would not remove external retention. Owners must release old snapshots, instances, delegates and metadata before unload can succeed.

See [reload troubleshooting](../manual/extensions/diagnose-reload.md), [owned registries](../extending/type-registries.md) and [Editor-specific generation behavior](editor-generations.md).
