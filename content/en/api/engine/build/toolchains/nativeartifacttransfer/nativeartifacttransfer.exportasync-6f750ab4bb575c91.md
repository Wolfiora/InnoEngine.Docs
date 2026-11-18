---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.6f750ab4bb575c915848c3e5a34f0392e103e147340e7bd4cf15ee9f6d0f0d79
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactTransfer.ExportAsync(System.String,System.String,System.Threading.CancellationToken)
title: NativeArtifactTransfer.ExportAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 65d16f00ac2713c39fb6f1bef50893bd3042600613c21d634a6c3a09ae9ccf88
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
