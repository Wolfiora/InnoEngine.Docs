---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.bb6ed878736da09b9bdb56970b43279c8af2b33d4ec307076416895ca0c37c89
symbol: engine:Inno.Shell:M:Inno.Shell.Shell.RunAsync(Inno.Shell.IShellFrameDriver,System.Nullable{System.Int32},System.Threading.CancellationToken)
title: Shell.RunAsync
kind: api
owners:
- Inno.Shell
apiSurface: source-clr
reviewed: af5a9636789e5f39d20fce27ce579d80b77f08960aeea765c265f49c0d1f4164
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `driver`:** The host's scheduling policy; it must execute frames on their owning thread.

**Parameter `smokeFrameLimit`:** An optional positive frame count for bounded verification.

**Parameter `cancellationToken`:** Requests termination before the next frame.

## Returns

Zero after orderly shutdown; lifecycle and scheduling failures propagate.

## Exceptions

**Exception `T:System.ArgumentNullException`:** The frame driver is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The smoke frame limit is not positive.

**Exception `T:System.InvalidOperationException`:** Adapter resources are missing or the shell has already run.

**Exception `T:System.OperationCanceledException`:** Scheduling was canceled.
