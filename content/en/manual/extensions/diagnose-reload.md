---
title: Diagnose a blocked or failed reload
description: Distinguish candidate rejection, active readers, pending cleanup
  and retained collectible generations.
uid: manual.extensions.diagnose-reload
kind: troubleshooting
owners:
  - Inno.Extensibility.Reload
  - Inno.Extensibility.Modules
  - Inno.Extensibility.Types
contracts:
  - project.inno-extensibility-reload#shared-admission-and-retirement-contract
---
# Diagnose a blocked or failed reload

Start with the shared generation state and the first reported failure. A candidate that failed validation, a Build reader still using the current generation, and a retired assembly retained by an object are different conditions with different remedies.

Do not repeatedly rebuild or force GC until a status happens to turn green. Preserve the failure and identify which owner must release or correct its inputs.

## Candidate preparation or activation failed

Inspect loader exceptions, missing dependencies, duplicate stable/type/extension IDs, metadata validation and lifecycle callback failures. `TypeCacheBuildException.loaderExceptions` retains the underlying load failures; an incomplete assembly must not become a partially accepted type catalog.

A recoverable failure keeps the last good generation only when rollback completes. Correct the source or metadata and let a new candidate be prepared. `Rebuild` reconstructs derived catalogs; it does not magically load a new DLL from an unchanged module source.

## A read lease blocks publication

Find the Build/Export or synchronous owner operation that holds the lease. Let its actual work finish, cancel it through its owner if appropriate, and release the lease after every asynchronous consumer is done. An automatic refresh can defer via `TryAcquireChange`; it must not bypass the reader.

An apparently completed task can still retain a snapshot or child consumer. Trace that lifetime before changing admission rules. The ordinary read-operation scope is not a substitute for the strict lease required by asynchronous work.

## The state is AwaitingCollection

The published generation may already be usable for permitted synchronous reads, while old code still awaits collection. Inspect the pending probes and their descriptions. Common retaining references include old snapshots, resolved CLR `Type` objects, extension instances, captured delegates, event subscriptions, property accessors and tasks still running plugin code.

Release those references through their real owners. The shared barrier performs full collection/finalizer verification; adding another independent barrier cannot make the original owner safe. Cancellation of a wait leaves the retirement obligation intact.

## Cleanup reports pending work

A nested `RetirementPendingException` means dependencies must remain alive while their consumer drains. Follow the retained owner and its Stop/Detach/Dispose protocol. Do not catch the exception and continue unloading lower dependencies.

If pending work has already crossed into the terminal generation transaction boundary, the host remains faulted. It retains the failed transaction to preserve ownership and requires replacement; there is no supported reset flag.

## The state is Faulted

Keep the original exception and retained transaction for diagnosis. Failures after commit cannot be presented as successful rollback, and timeout after unload verification cannot be presented as completed retirement. Stop new Play, Build, Export and reload admission and restart the owning host when its failure has been corrected.

The retained data is failure ownership, not a cache to copy into a fresh host. Do not weaken assertions, drop probes or clear fields merely to make a repeated Dispose return successfully.

## Verify the remedy

For a recoverable candidate failure, confirm the last good generation still behaves correctly, then prepare a new input and verify its activation and retirement. For a terminal failure, verify a fresh host and the corrected ownership path, including the original failure scenario. A successful compile alone does not verify reload or collectible unload.

Use [generation publication](../../architecture/generation-publication.md) for the full ordering and [the Reload reference](../../architecture/projects/inno-extensibility-reload.md) for exact states, failures and lease APIs.
