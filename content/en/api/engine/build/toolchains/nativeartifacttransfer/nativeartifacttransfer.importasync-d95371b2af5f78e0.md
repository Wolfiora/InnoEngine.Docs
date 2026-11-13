---
uid: api.d95371b2af5f78e0b6505704cc0dbf61334c68ae10665822c840b56e172ce240
symbol: "engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactTransfer.ImportAsync(System.String,System.String,System.Threading.CancellationToken)"
source: xml
reviewed: e665b3af6e0396d1d955c23ce4e5879094091da6c69f1896aeeb7cde91d16b50
title: "NativeArtifactTransfer.ImportAsync"
kind: api
owners: [Inno.Build.Toolchains]
apiSurface: source-clr
---

Imports complete payload candidates without adopting them; each consumer's publisher must still verify its requested inputs.

**Parameter `engineRoot`:** The consumer checkout whose existing native publishers own the destination layout.

**Parameter `archivePath`:** The restored transport archive, which remains available for diagnosis after rejection.

**Parameter `cancellationToken`:** Cancels extraction or acquisition without replacing any existing generation.

**Returns:** The number of newly imported candidates; existing destinations remain under their publisher's repair policy.

**Exception `T:System.IO.IOException`:** The archive is malformed, contains invalid ownership paths or fails complete payload validation.

**Exception `T:System.OperationCanceledException`:** Import was canceled before further candidates could be installed.
