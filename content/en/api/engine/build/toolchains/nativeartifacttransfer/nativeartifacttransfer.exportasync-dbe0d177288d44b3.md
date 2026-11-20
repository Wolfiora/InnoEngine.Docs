---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dbe0d177288d44b3a79266cced7779c663a948e36ac655d90caa0bc818a32402
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactTransfer.ExportAsync(System.String,System.String,System.Threading.CancellationToken,System.Collections.Generic.IReadOnlySet{System.String})
title: NativeArtifactTransfer.ExportAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: e6397e67279298189ed5dc60b0f6e7448f3668a6f88468c338c8019e8967f541
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The checkout whose publishers have already verified the selected generations.

**Parameter `archivePath`:** The explicit transport file, atomically replaced after complete export.

**Parameter `cancellationToken`:** Cancels copying before the completed archive replaces its previous version.

**Parameter `selectedArtifacts`:** Optional exact artifact paths relative to the artifacts root. Every selected generation must be exported.

## Returns

The number of verified generations exported.

## Exceptions

**Exception `T:System.IO.IOException`:** A registered artifact is damaged, linked, inaccessible or outside its publisher boundary.

**Exception `T:System.OperationCanceledException`:** Export was canceled before installation.
