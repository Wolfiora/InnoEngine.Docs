---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.6f750ab4bb575c915848c3e5a34f0392e103e147340e7bd4cf15ee9f6d0f0d79
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactTransfer.ExportAsync(System.String,System.String,System.Threading.CancellationToken)
title: NativeArtifactTransfer.ExportAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
reviewed: 835b23ffe3a5f9a26fb8243a7d503538cce44bad0ad7524e9dec0762fb8635c0
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

## Returns

The number of verified generations exported.

## Exceptions

**Exception `T:System.IO.IOException`:** A registered artifact is damaged, linked, inaccessible or outside its publisher boundary.

**Exception `T:System.OperationCanceledException`:** Export was canceled before installation.
