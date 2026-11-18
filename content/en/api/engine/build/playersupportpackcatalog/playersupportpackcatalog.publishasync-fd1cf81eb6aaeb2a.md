---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.fd1cf81eb6aaeb2aa92ce22958541b755bc197e21a67663547a763520d1727f2
symbol: engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.PublishAsync(Inno.Build.BuildTargetId,System.String,Inno.Build.IPlayerSupportPackValidator,System.Threading.CancellationToken,System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask})
title: PlayerSupportPackCatalog.PublishAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: f0e65bea04ea31b7db7e0842b77924ecb1b028ea2614b2f381005ba22d036d64
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The platform and architecture owning the staged inputs.

**Parameter `stagingDirectory`:** A complete, exclusively owned staging tree on the same filesystem as this catalog. Successful publication consumes this directory unless identical inputs already exist.

**Parameter `validator`:** The target validator for runtime and linker inputs.

**Parameter `cancellationToken`:** Cancels validation or lease acquisition before selecting the completed pack.

**Parameter `verifyInputs`:** Optional final source-input gate after output validation and any publication wait. Omit only when the caller exclusively owns a fully prepared tree with no external preparation inputs.

## Returns

Reading ownership of the selected immutable pack; earlier readers retain their own protection.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The candidate is incomplete or contains forbidden inputs.

**Exception `T:System.IO.IOException`:** The completed directory or its atomic current index cannot be installed.

**Exception `T:System.OperationCanceledException`:** Cancellation occurred before the current index was committed.
