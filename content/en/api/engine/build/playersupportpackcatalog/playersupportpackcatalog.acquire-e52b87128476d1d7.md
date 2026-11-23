---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e52b87128476d1d765a5077b5613bdc02c1ccc6237d4c769dfbad730baa45e0e
symbol: engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.Acquire(Inno.Build.BuildTargetID,Inno.Build.IPlayerSupportPackValidator,System.Threading.CancellationToken)
title: PlayerSupportPackCatalog.Acquire
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: efb262e7af0b95bedc2f1086224ac4040cb2822613b1b2500632054dd2a8e573
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The platform and architecture identity of the required Support Pack.

**Parameter `validator`:** The target-owned validator for runtime or linker inputs.

**Parameter `cancellationToken`:** Cancels ownership acquisition or complete content validation before returning a lease.

## Returns

Reading ownership of the complete pack; dispose it after its final consumer finishes.

## Exceptions

**Exception `T:System.IO.DirectoryNotFoundException`:** Thrown when no Support Pack is installed for `target`.

**Exception `T:System.IO.InvalidDataException`:** Thrown when the pack is empty, contains build-time payload, or lacks its Player executable or native runtimes.

**Exception `T:System.OperationCanceledException`:** Acquisition or validation was canceled; no reading ownership is transferred.

**Exception `T:System.TimeoutException`:** Exclusive repair or retirement retains the artifact for more than thirty seconds.
