---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.53af21d8a8b5fe0935491bc98ae10f5f1cc2fb0cf9a9999ee7cd852aa20892ff
symbol: engine:Inno.Build:M:Inno.Build.PlayerSupportPackCatalog.SelectAsync(Inno.Build.BuildTargetID,System.String,Inno.Build.IPlayerSupportPackValidator,System.Func{System.Threading.CancellationToken,System.Threading.Tasks.ValueTask},System.Threading.CancellationToken)
title: PlayerSupportPackCatalog.SelectAsync
kind: api
owners:
- Inno.Build
apiSurface: source-clr
sourceFingerprint: e9a81e97702e1e4ed38f15d8318b878a1f5fe1c232c5ff3cda3b890d29aae3a8
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `target`:** The explicit target whose prepared Pack is requested.

**Parameter `fingerprint`:** The exact lowercase SHA-256 content identity recorded by the publisher.

**Parameter `validator`:** The borrowed platform closure validator.

**Parameter `verifyInputs`:** The final awaited source-input gate after output validation and before selection.

**Parameter `cancellationToken`:** Cancels validation or selection before replacing the current index.

## Returns

Reading ownership of the complete requested Pack; dispose it after every consumer finishes.

## Exceptions

**Exception `T:System.ArgumentException`:** The content identity is invalid or the target path escapes the catalog.

**Exception `T:System.IO.InvalidDataException`:** The requested directory or its complete file set and hashes are invalid.

**Exception `T:System.OperationCanceledException`:** Validation or selection was canceled.
