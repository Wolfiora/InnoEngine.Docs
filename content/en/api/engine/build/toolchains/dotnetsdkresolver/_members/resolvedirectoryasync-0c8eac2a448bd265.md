---
uid: api.0c8eac2a448bd265fbdbe02e31c926bfd7829d69c5cdc65f9f26ad450753cf1f
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.DotNetSdkResolver.ResolveDirectoryAsync(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 60f2dc99f86a866a20de20230e3aa2b5a9fc84d579d578f74f6855b9c3dcb13e
title: "ResolveDirectoryAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Selects the SDK from an authoring owner's directory before any temporary evaluation project is created.

**Parameter `hostPath`:** The managed host explicitly selected by the composition root.

**Parameter `ownerDirectory`:** The existing source owner whose ancestor global.json rules govern the operation.

**Parameter `cancellationToken`:** Cancels discovery and drains the SDK process.

**Returns:** The selected SDK and fixed managed CLI path, without probing reference pack directories.

**Exception `T:System.IO.DirectoryNotFoundException`:** The source owner directory does not exist.

**Exception `T:System.IO.FileNotFoundException`:** The host or selected SDK CLI is missing.

**Exception `T:System.InvalidOperationException`:** The host cannot resolve the source owner's requested SDK.

**Exception `T:System.OperationCanceledException`:** The caller cancels SDK discovery.
