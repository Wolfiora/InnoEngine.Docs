---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.2272abba29390a2b76b646da2974806a785c8ca8fbb26e207e75b701234ba916
symbol: engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)
title: IApplicationStorage.WriteAsync
kind: api
owners:
- Inno.Storage
apiSurface: source-clr
sourceFingerprint: 3c8fc5240a8cf0eb221e9c6ef17e93f437705f131fe8dd59a5060c018580148b
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
