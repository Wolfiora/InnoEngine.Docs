---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.9b11c98b22418afe381f50858426c377a942c126f7b30ba62ca1e6e1535010a1
symbol: scripting:Inno.Storage:M:InnoEngine.Storage.IApplicationStorage.WriteAsync(InnoEngine.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)
title: IApplicationStorage.WriteAsync
kind: api
owners:
- Inno.Storage
apiSurface: editor-script
sourceFingerprint: 17054e76a98440cb44250eb7c06d5da597d8208c3e2f3dbb0512f9d5d0b36369
apiScope: Runtime
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

A task that completes after the value is durably replaced.
