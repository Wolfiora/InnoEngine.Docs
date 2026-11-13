---
uid: api.da55eeec03b67893917393a2d2935ee4977ef92a72c818320a8a02a0dc316f8d
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCachePublisher.EnsureImmutableRegistration(System.String,System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 51b14e1eb6e45c39438c40806f09ef0b648c667d9a2690dfef4fef0bc399e6a6
title: "BuildCachePublisher.EnsureImmutableRegistration"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Establishes an immutable artifact's ownership once, or confirms its unchanged registration without rewriting it.

**Parameter `directory`:** The completed artifact within this publisher's exact boundary.

**Parameter `leasePath`:** The persistent artifact lease held by the caller alongside this publisher's activity lease.

**Parameter `dependencies`:** The exact dependency closure, in its original publication order.

**Parameter `targetId`:** The producer's explicit target, or null for shared host work.

**Parameter `cancellationToken`:** Cancels inspection or initial registration before publication.

## Remarks

This confirms ownership, not content integrity. The producer must verify the immutable payload itself. Existing registration age is retained; use an active lease or a current generation dependency to protect consumers. This operation neither selects a current root nor records a new use time.

**Exception `T:System.InvalidOperationException`:** This publisher does not own immutable artifacts.

**Exception `T:System.IO.IOException`:** Paths cross ownership boundaries or links, or payload files are unavailable.

**Exception `T:System.IO.InvalidDataException`:** Existing ownership metadata disagrees with the immutable publication.

**Exception `T:System.OperationCanceledException`:** Inspection or registration was canceled.
