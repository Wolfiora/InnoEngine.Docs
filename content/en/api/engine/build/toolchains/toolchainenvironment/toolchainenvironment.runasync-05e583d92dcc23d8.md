---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.05e583d92dcc23d8f8059aa9c48122d7ca2655dc9e8c8f56bf6380087d02576a
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.ToolchainEnvironment.RunAsync(System.String,System.Collections.Generic.IReadOnlyList{System.String},System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlyDictionary{System.String,System.String},System.IO.TextWriter,System.IO.TextWriter)
title: ToolchainEnvironment.RunAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 76daadfe99d4b74be9657e54d9b9088ac6ec7d9b2b3560552336dbb9c5ffc62d
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

**Parameter `cancellationToken`:** Cancels the complete process tree and drains both output streams.

**Parameter `environment`:** Optional child-only toolchain variables. Null values remove inherited variables; empty values remain explicitly empty.

**Parameter `standardOutput`:** The caller-owned standard output destination; the runner does not dispose it.

**Parameter `standardError`:** The caller-owned standard error destination; the runner does not dispose it.

## Returns

Completion after successful exit and complete output delivery; failures propagate.

## Exceptions

**Exception `T:System.InvalidOperationException`:** The executable cannot start or exits unsuccessfully.

**Exception `T:System.IO.IOException`:** An output destination fails; the owned process tree is terminated before failure returns.

**Exception `T:System.OperationCanceledException`:** The operation was canceled after retiring its owned process tree.
