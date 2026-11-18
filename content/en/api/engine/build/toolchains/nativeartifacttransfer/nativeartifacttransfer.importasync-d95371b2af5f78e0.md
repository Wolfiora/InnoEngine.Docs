---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.d95371b2af5f78e0b6505704cc0dbf61334c68ae10665822c840b56e172ce240
symbol: engine:Inno.Build.Toolchains:M:Inno.Build.Toolchains.NativeArtifactTransfer.ImportAsync(System.String,System.String,System.Threading.CancellationToken)
title: NativeArtifactTransfer.ImportAsync
kind: api
owners:
- Inno.Build.Toolchains
apiSurface: source-clr
sourceFingerprint: 91a58b10a97bf6640aeb1459e0a19374ab07a47c717a7cdd03a12e80293a5fb5
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The consumer checkout whose existing native publishers own the destination layout.

**Parameter `archivePath`:** The restored transport archive, which remains available for diagnosis after rejection.

**Parameter `cancellationToken`:** Cancels extraction or acquisition without replacing any existing generation.

## Returns

The number of newly imported candidates; existing destinations remain under their publisher's repair policy.

## Exceptions

**Exception `T:System.IO.IOException`:** The archive is malformed, contains invalid ownership paths or fails complete payload validation.

**Exception `T:System.OperationCanceledException`:** Import was canceled before further candidates could be installed.
