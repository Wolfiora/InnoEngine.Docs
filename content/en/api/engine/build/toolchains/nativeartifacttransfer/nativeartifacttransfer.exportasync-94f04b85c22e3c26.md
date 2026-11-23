---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.94f04b85c22e3c264108491f805dddef84881e21f197dc8227bb524853fc325d
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactTransfer.ExportAsync(System.String,System.String,System.Collections.Generic.IReadOnlySet{System.String},System.Threading.CancellationToken)
title: NativeArtifactTransfer.ExportAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 07f81ef53770f19fdcd322877061e86ebcfa786df8b6dde0d45a2f0e9de7a11f
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The checkout whose publishers have already verified the selected generations.

**Parameter `archivePath`:** The explicit transport file, atomically replaced after complete export.

**Parameter `selectedArtifacts`:** Optional exact artifact paths relative to the artifacts root. Every selected generation must be exported.

**Parameter `cancellationToken`:** Cancels copying before the completed archive replaces its previous version.

## Returns

The number of verified generations exported.

## Exceptions

**Exception `T:System.IO.IOException`:** A registered artifact is damaged, linked, inaccessible or outside its publisher boundary.

**Exception `T:System.OperationCanceledException`:** Export was canceled before installation.
