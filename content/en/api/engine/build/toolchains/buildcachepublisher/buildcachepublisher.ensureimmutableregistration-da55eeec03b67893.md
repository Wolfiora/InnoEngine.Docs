---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.da55eeec03b67893917393a2d2935ee4977ef92a72c818320a8a02a0dc316f8d
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.EnsureImmutableRegistration(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken)
title: BuildCachePublisher.EnsureImmutableRegistration
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 8c378f758a54c96c6aa34f108fba101638bdb8c9fe72191dc90f80ed09597c97
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `directory`:** The completed artifact within this publisher's exact boundary.

**Parameter `leasePath`:** The persistent artifact lease held by the caller alongside this publisher's activity lease.

**Parameter `dependencies`:** The exact dependency closure, in its original publication order.

**Parameter `targetID`:** The producer's explicit target, or null for shared host work.

**Parameter `cancellationToken`:** Cancels inspection or initial registration before publication.

## Exceptions

**Exception `T:System.InvalidOperationException`:** This publisher does not own immutable artifacts.

**Exception `T:System.IO.IOException`:** Paths cross ownership boundaries or links, or payload files are unavailable.

**Exception `T:System.IO.InvalidDataException`:** Existing ownership metadata disagrees with the immutable publication.

**Exception `T:System.OperationCanceledException`:** Inspection or registration was canceled.

## Remarks

This confirms ownership, not content integrity. The producer must verify the immutable payload itself. Existing registration age is retained; use an active lease or a current generation dependency to protect consumers. This operation neither selects a current root nor records a new use time.
