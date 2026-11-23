---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9b25ab69e325c15500e5f5a334d8e61db4c9e05c6f308d4a98d32bf6e25b0f25
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactReadLease.AcquireAsync(System.String,System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},Inno.Build.Toolchains.NativeBuildContext,System.Threading.CancellationToken)
title: BuildArtifactReadLease.AcquireAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: f5e31b3ded74ee659ae80576cff55f9b16441099da6fda4357aa903418407a26
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The absolute artifact directory owned by its publisher; its persistent lease is stored alongside it.

**Parameter `ownerDirectory`:** The exact publisher root retaining the persistent owner.lock gate.

**Parameter `fingerprint`:** The exact input identity required by the consumer.

**Parameter `outputDirectories`:** The complete relative output roots declared by the publisher.

**Parameter `statistics`:** Optional borrowed operation receiving output-integrity read statistics; its input cache is not used.

**Parameter `cancellationToken`:** Cancels ownership acquisition without releasing another reader's protection.

## Returns

Reading ownership which the caller must retain until all artifact access completes.

## Exceptions

**Exception `T:System.ArgumentException`:** The directory is not absolute or a required identity is blank.

**Exception `T:System.IO.InvalidDataException`:** The complete artifact does not match the requested identity and output inventory.

**Exception `T:System.TimeoutException`:** Repair or retirement retains exclusive ownership for more than thirty seconds.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled before ownership could be returned.
