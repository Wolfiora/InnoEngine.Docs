---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.2272abba29390a2b76b646da2974806a785c8ca8fbb26e207e75b701234ba916
symbol: engine:Inno.Storage:M:Inno.Storage.IApplicationStorage.WriteAsync(Inno.Storage.StorageKey,System.ReadOnlyMemory{System.Byte},System.Threading.CancellationToken)
title: IApplicationStorage.WriteAsync
kind: api
owners:
- Inno.Storage
apiSurface: source-clr
reviewed: f0c8d211477e4783bea80ac8194622ce965e0fcd92fae211dba0c6129d104ee5

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `key`:** The sandbox-relative storage key.

**Parameter `value`:** The complete value to commit.

**Parameter `cancellationToken`:** Cancellation requested by the caller.

## Returns

A task that completes after the value is durably replaced.
