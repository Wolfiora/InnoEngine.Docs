---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5235f88a4073c6dc099a8c2976d294cbc33ab2e772f59f2d0418d882f6fb2458
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.CaptureOutputAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken)
title: ToolchainEnvironment.CaptureOutputAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 5987d6b131ba820702685cae81f162b5057274fba3eb3054551dd253ddaa0b5d
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `fileName`:** The executable to launch.

**Parameter `arguments`:** Structured arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The directory used for project and SDK resolution.

**Parameter `environment`:** Optional child-only environment variables. Null values remove inherited variables; empty values remain explicitly empty.

**Parameter `cancellationToken`:** Cancels the child process tree and waits for its complete exit.

## Returns

The complete standard output after successful exit. Unsuccessful exits retain captured output in the exception.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The tool fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.

**Exception `T:System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.
