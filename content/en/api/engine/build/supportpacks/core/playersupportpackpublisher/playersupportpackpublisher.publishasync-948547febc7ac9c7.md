---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.948547febc7ac9c70b2245f81b5cbef5bbad4ea148995bdb1165e6a9e660eb3a
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPublisher.PublishAsync(System.String,System.String,Inno.Build.BuildTargetID,System.String,System.String,System.Threading.CancellationToken)
title: PlayerSupportPackPublisher.PublishAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
sourceFingerprint: 715aecdfe9bd4d3e872c73462a9ca22deaa736269f96a5df7f4602b224e389d3
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

**Parameter `nativeDependencies`:** An explicit native selection disabling third-party production, or null for local source preparation.

**Parameter `cancellationToken`:** Cancels preparation before directory installation begins.

## Returns

Reading ownership of the selected Pack and any post-commit diagnostics. Dispose after consuming its files.

## Exceptions

**Exception `T:System.ArgumentException`:** A required path is blank or the target has no registered source.

**Exception `T:System.IO.DirectoryNotFoundException`:** The engine checkout is unavailable.

**Exception `T:System.IO.InvalidDataException`:** The prepared closure is incomplete or invalid.

**Exception `T:System.IO.IOException`:** The staging tree, immutable artifact or atomic current index cannot be installed.

**Exception `T:System.OperationCanceledException`:** Preparation was canceled; the installed pack is unchanged.

## Remarks

Writers targeting the same pack share an exclusive, cancelable preparation lease. Publication atomically selects a fingerprint directory; previous generations remain valid for readers.
