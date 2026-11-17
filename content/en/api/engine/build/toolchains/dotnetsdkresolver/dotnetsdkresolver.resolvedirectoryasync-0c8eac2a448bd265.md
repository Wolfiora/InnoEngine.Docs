---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0c8eac2a448bd265fbdbe02e31c926bfd7829d69c5cdc65f9f26ad450753cf1f
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.DotNetSdkResolver.ResolveDirectoryAsync(System.String,System.String,System.Threading.CancellationToken)
title: DotNetSdkResolver.ResolveDirectoryAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 363421395cf740e1effd32bd1772661726b2c2fd2a5cff5af5ee654d11f5988a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `hostPath`:** The managed host explicitly selected by the composition root.

**Parameter `ownerDirectory`:** The existing source owner whose ancestor global.json rules govern the operation.

**Parameter `cancellationToken`:** Cancels discovery and drains the SDK process.

## Returns

The selected SDK and fixed managed CLI path, without probing reference pack directories.

## Exceptions

**Exception `T:System.IO.DirectoryNotFoundException`:** The source owner directory does not exist.

**Exception `T:System.IO.FileNotFoundException`:** The host or selected SDK CLI is missing.

**Exception `T:System.InvalidOperationException`:** The host cannot resolve the source owner's requested SDK.

**Exception `T:System.OperationCanceledException`:** The caller cancels SDK discovery.
