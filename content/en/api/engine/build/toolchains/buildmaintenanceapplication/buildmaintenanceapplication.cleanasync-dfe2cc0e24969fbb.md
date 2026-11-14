---
uid: api.dfe2cc0e24969fbb5d87fb6443f6d1f829fb5d7c9d8941729976de530190a21f
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildMaintenanceApplication.CleanAsync(System.String,Inno.Build.Toolchains.BuildCachePolicy,System.Boolean,System.Boolean,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 019459b01996420a89ecca4bf0a9588d4c50cec46082a23da2434abf38587dee
title: "BuildMaintenanceApplication.CleanAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Uses the same owner inventory, dependency protection and retirement plan for automatic and explicit cleanup.

## Parameters

**Parameter `engineRoot`:** The absolute checkout containing registered publishers.

**Parameter `policy`:** The bounded size and duration policy.

**Parameter `retireAll`:** Whether to select every unreferenced generation instead of pressure candidates.

**Parameter `dryRun`:** Whether to report the plan without retiring it.

**Parameter `targetId`:** An optional exact producer target filter; shared dependencies remain protected.

**Parameter `cancellationToken`:** Cancels inventory and retirement.

## Returns

A completed, bounded cleanup operation with protected owners retained.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Explicit retirement encountered failures.

**Exception `T:System.TimeoutException`:** Owner discovery or planning exhausts the operation budget before retirement can begin.

**Exception `T:System.IO.IOException`:** Ownership metadata or protected input cannot be validated.

**Exception `T:System.OperationCanceledException`:** The caller canceled before completion.
