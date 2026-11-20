---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.dfa200a0d7be3eae59fb1119638b09cb3561f0d9a29615598670c7d4dcd80d40
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPublisher.PublishAsync(System.String,System.String,Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken,System.String)
title: PlayerSupportPackPublisher.PublishAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: c0757d51443d7e70b875d3be442cdd130d00da0e81eafb45fa9aa31fe7bb0394
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `engineRoot`:** The source checkout containing InnoEngine.sln.

**Parameter `outputRoot`:** The directory owning installed target packs.

**Parameter `target`:** The registered target identity.

**Parameter `dotnetHost`:** The SDK executable selected by the host.

**Parameter `cancellationToken`:** Cancels preparation before directory installation begins.

**Parameter `nativeDependencies`:** An explicit native selection disabling third-party production, or null for local source preparation.

## Returns

Reading ownership of the selected Pack and any post-commit diagnostics. Dispose after consuming its files.

## Remarks

Writers targeting the same pack share an exclusive, cancelable preparation lease. Publication atomically selects a fingerprint directory; previous generations remain valid for readers.

## Exceptions

**Exception `T:System.ArgumentException`:** A required path is blank or the target has no registered source.

**Exception `T:System.IO.DirectoryNotFoundException`:** The engine checkout is unavailable.

**Exception `T:System.IO.InvalidDataException`:** The prepared closure is incomplete or invalid.

**Exception `T:System.IO.IOException`:** The staging tree, immutable artifact or atomic current index cannot be installed.

**Exception `T:System.OperationCanceledException`:** Preparation was canceled; the installed pack is unchanged.
