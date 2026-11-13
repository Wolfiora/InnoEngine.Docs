---
uid: api.7470ce69006ea12e5557ae5bcf3fef4dbba4ced6744e8b2e2e61c0b107d81e34
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.BuildCacheCleanupPlan.ExecuteAsync(System.Boolean,System.Threading.CancellationToken)"
source: xml
reviewed: 704b51fc8209d02b61d0de91dc9938ae1d9743e7b1aed0c14b201749b6f1847a
title: "ExecuteAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Executes the original proposal under fresh owner and artifact leases without waiting for active readers.

**Parameter `dryRun`:** Whether to report the proposal without acquiring mutation leases or deleting files.

**Parameter `cancellationToken`:** Cancels remaining work; successful earlier retirements are not rolled back.

**Returns:** Actual retirement, activity skips and IO failures; protected generations are never forced out.

**Exception `T:System.IO.InvalidDataException`:** Fresh ownership metadata violates the registered boundary.

**Exception `T:System.OperationCanceledException`:** The caller canceled; no later candidate is processed.
