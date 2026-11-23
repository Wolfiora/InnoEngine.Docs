---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.f3228e2004e30194daa991f566dc7fbc967e052f7f628dc8c4f55c083550e243
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.IO.TextWriter,System.IO.TextWriter,System.Threading.CancellationToken)
title: ToolchainEnvironment.RunAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: bd4a30bc9a9023b8d1a8b38c7030ba6c4311cfaef1b6ef71508c3d2d44705cb3
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `fileName`:** The executable selected by the build composition.

**Parameter `arguments`:** Structured arguments passed without shell interpretation.

**Parameter `workingDirectory`:** The project directory controlling SDK and workload resolution.

**Parameter `environment`:** Optional child-only toolchain variables. Null values remove inherited variables; empty values remain explicitly empty.

**Parameter `standardOutput`:** The caller-owned standard output destination; the runner does not dispose it.

**Parameter `standardError`:** The caller-owned standard error destination; the runner does not dispose it.

**Parameter `cancellationToken`:** Cancels the complete process tree and drains both output streams.

## Returns

Completion after successful exit and complete output delivery; failures propagate.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The executable cannot start or exits unsuccessfully.

**Exception `T:System.IO.IOException`:** An output destination fails; the owned process tree is terminated before failure returns.

**Exception `T:System.OperationCanceledException`:** The operation was canceled after retiring its owned process tree.
