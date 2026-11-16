---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.dfe2cc0e24969fbb5d87fb6443f6d1f829fb5d7c9d8941729976de530190a21f
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildMaintenanceApplication.CleanAsync(System.String,Inno.Build.Toolchains.BuildCachePolicy,System.Boolean,System.Boolean,System.String,System.Threading.CancellationToken)
title: BuildMaintenanceApplication.CleanAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 31b279c3b7f892d90941e4c1a13871033758ab7d9920bcfb857dfceaf5100429
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

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
