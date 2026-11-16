---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7c3bc24a8506f541138e25575058fb2024307381e64d532e6b7119019024e862
symbol: engine:Inno.Build.SupportPacks.Core:M:Inno.Build.SupportPacks.PlayerSupportPackPublisher.PublishAsync(System.String,System.String,Inno.Build.BuildTargetId,System.String,System.Threading.CancellationToken)
title: PlayerSupportPackPublisher.PublishAsync
kind: api
owners:
- Inno.Build.SupportPacks.Core
apiSurface: source-clr
reviewed: b6181e36ecb9518920dba2cef6218f02bda0ae59c3e32110ad2fae5f47a3971a
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
