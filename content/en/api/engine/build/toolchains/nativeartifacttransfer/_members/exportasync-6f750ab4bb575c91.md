---
uid: api.6f750ab4bb575c915848c3e5a34f0392e103e147340e7bd4cf15ee9f6d0f0d79
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactTransfer.ExportAsync(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: 01e9224d80be41966e05985b1463411ca2fa83c4067da7f4e787fe4fa7c26ce7
title: "ExportAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Exports only locally registered immutable native and binding generations under their existing read leases.

**Parameter `engineRoot`:** The checkout whose publishers have already verified the selected generations.

**Parameter `archivePath`:** The explicit transport file, atomically replaced after complete export.

**Parameter `cancellationToken`:** Cancels copying before the completed archive replaces its previous version.

**Returns:** The number of verified generations exported.

**Exception `T:System.IO.IOException`:** A registered artifact is damaged, linked, inaccessible or outside its publisher boundary.

**Exception `T:System.OperationCanceledException`:** Export was canceled before installation.
