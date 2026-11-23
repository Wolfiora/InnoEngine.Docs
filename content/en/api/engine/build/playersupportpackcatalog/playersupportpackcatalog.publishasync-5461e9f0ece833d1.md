---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.5461e9f0ece833d17a765cd99b9617f146e42b7437005ace6f127b54abeedcbb
symbol: engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.PublishAsync(Inno.Build.BuildTargetID,System.String,Inno.Build.IPlayerSupportPackValidator,System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask},System.Threading.CancellationToken)
title: PlayerSupportPackCatalog.PublishAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: 050467394c722f1cb9fdf720a6555ecce55ffbfe585ba258f709f613ed3e0d17
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

**Parameter `verifyInputs`:** Optional final source-input gate after output validation and any publication wait. Omit only when the caller exclusively owns a fully prepared tree with no external preparation inputs.

**Parameter `cancellationToken`:** Cancels validation or lease acquisition before selecting the completed pack.

## Returns

Reading ownership of the selected immutable pack; earlier readers retain their own protection.

## Exceptions

**Exception `T:System.IO.InvalidDataException`:** The candidate is incomplete or contains forbidden inputs.

**Exception `T:System.IO.IOException`:** The completed directory or its atomic current index cannot be installed.

**Exception `T:System.OperationCanceledException`:** Cancellation occurred before the current index was committed.
