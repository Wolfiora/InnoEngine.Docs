---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.b46be0906afd2a49da9b2dfb97ac0b00a1ee64ce99b7d5b8a48c50cccf206160
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildArtifactWriteLease.AcquireAsync(System.String,System.String,System.Threading.CancellationToken)
title: BuildArtifactWriteLease.AcquireAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: b013695cf3afdfc38ad08fabda10a9c5ca21e12bd3c5df6222db39aa1e5abc5c
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The absolute artifact location controlled by the publisher.

**Parameter `ownerDirectory`:** The exact publisher root retaining the persistent owner.lock gate.

**Parameter `cancellationToken`:** Cancels this waiter without disturbing existing readers.

## Returns

Exclusive protection; retain it through replacement and release it before acquiring a reading lease.

## Exceptions

**Exception `T:System.ArgumentException`:** The directory is empty or relative.

**Exception `T:System.TimeoutException`:** Other owners retain the artifact for more than thirty seconds.

**Exception `T:System.OperationCanceledException`:** Waiting was canceled.
