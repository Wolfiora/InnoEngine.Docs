---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7470ce69006ea12e5557ae5bcf3fef4dbba4ced6744e8b2e2e61c0b107d81e34
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheCleanupPlan.ExecuteAsync(System.Boolean,System.Threading.CancellationToken)
title: BuildCacheCleanupPlan.ExecuteAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 95a94afa191a2f5731baeb265ffe5cf0d4a8f6f2c20d8019e8c32dc8164bc1cf
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `dryRun`:** Whether to report the proposal without acquiring mutation leases or deleting files.

**Parameter `cancellationToken`:** Cancels remaining work; successful earlier retirements are not rolled back.

## Returns

Actual retirement, activity skips and IO failures; protected generations are never forced out.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** Fresh ownership metadata violates the registered boundary.

**Exception `T:System.OperationCanceledException`:** The caller canceled; no later candidate is processed.
