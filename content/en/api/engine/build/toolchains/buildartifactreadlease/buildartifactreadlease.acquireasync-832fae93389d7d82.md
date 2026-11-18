---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.832fae93389d7d826b215479418154ccdf725c08df3730704cc732b8fd77a5c9
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactReadLease.AcquireAsync(System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.Threading.CancellationToken,Inno.Build.Toolchains.NativeBuildContext)
title: BuildArtifactReadLease.AcquireAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: ca60358aaaa32d8b035514e8adbd508c4f92b14cb39ebaa05d70d988f51a1497
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `ownerDirectory`:** The exact publisher root retaining the persistent owner.lock gate.

**Parameter `directory`:** The absolute artifact directory owned by its publisher; its persistent lease is stored alongside it.

**Parameter `fingerprint`:** The exact input identity required by the consumer.

**Parameter `outputDirectories`:** The complete relative output roots declared by the publisher.

**Parameter `cancellationToken`:** Cancels ownership acquisition without releasing another reader's protection.

**Parameter `statistics`:** Optional borrowed operation receiving output-integrity read statistics; its input cache is not used.

## Returns

Reading ownership which the caller must retain until all artifact access completes.

## Exceptions

**Exception `T:System.ArgumentException`:** The directory is not absolute or a required identity is blank.

**Exception `T:System.IO.InvalidDataException`:** The complete artifact does not match the requested identity and output inventory.

**Exception `T:System.TimeoutException`:** Repair or retirement retains exclusive ownership for more than thirty seconds.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled before ownership could be returned.
