---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.1e31c2d46816c7535d9c0e2760e7efc72ea5b9b9ed8c0f508b4496e61f29bc42
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.Threading.CancellationToken)
title: ToolchainEnvironment.RunAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: d976567b3b04dbab1925cdb8d144e93fad0a943ca57d61e98e37c3d04f610e79
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `fileName`:** The executable to launch.

**Parameter `arguments`:** The individual arguments, passed without shell interpretation.

**Parameter `workingDirectory`:** The repository or staging directory owned by the operation.

**Parameter `environment`:** Optional process-local toolchain variables; the parent environment is unchanged. Null values remove inherited variables, while empty values remain explicitly empty.

**Parameter `cancellationToken`:** Cancels the child process and its complete process tree.

## Returns

Completion after both output streams have drained and the process succeeds.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The process fails to start or exits unsuccessfully.

**Exception `T:System.OperationCanceledException`:** The operation was canceled.

**Exception `T:System.IO.IOException`:** Redirected output cannot be read or forwarded; the process tree is terminated before failure returns.
