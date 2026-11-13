---
title: Inno.Extensibility.Reload
description: Shared generation admission, ordered domain publication and weak collectible-unload verification.
uid: project.inno-extensibility-reload
kind: project
owners:
  - Inno.Extensibility.Reload
---
# Inno.Extensibility.Reload

This Foundation layer coordinates generation admission and verifies collectible retirement. It does not load assemblies, discover types or decide which application candidate is correct. Product owners use the ModuleHost's shared coordinator instead of creating independent gates.

Read [generation publication](../generation-publication.md) for the protocol and [reload troubleshooting](../../manual/extensions/diagnose-reload.md) for failure diagnosis.

## Shared admission and retirement contract

Strict read leases protect asynchronous Build/Export consumers and exclude publication. Synchronous operation scopes protect published data and may remain available while old code awaits collection, but do not authorize another reload or Play/Build/Export. Only the publication control thread may borrow a scope inside its own transition.

Prepare and apply domain changes in deterministic order. Before commit, compensate structure, publication and state in the defined reverse sequence. After commit, cleanup failure is terminal; do not report rollback of already published state.

Pending retirement, including wrapped signals, retains transaction and dependency ownership. The shared gate faults rather than unloading underneath live work. Ordinary errors do not erase a later pending signal. Faulted admission has no reset path; replace the host after correcting the failure.

Unload probes must not strongly retain their targets. The barrier copies its policy, performs full GC/finalizer/full GC verification outside admission locking, and completes only when every probe passes. Canceling Wait leaves the barrier intact. Retention timeout records a terminal failure with remaining generations and collection attempts; it is not a limit on legitimate build duration.

Returned probes and live snapshots remain obligations to resolve. Static linked code follows its actual process lifetime and is never certified as collectible merely to satisfy this protocol.

## API reference

Browse the [exact type and member contracts](../../api/engine/extensibility/reload/index.md) in the selected CLR surface. Declaration coverage does not certify runtime or collectible-unload behavior.
