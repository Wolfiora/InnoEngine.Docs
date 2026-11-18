---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.e3bafa5591ec8a0ad86729b8b391a961ec5a1978a6c7dcce65553122dd8d558a
symbol: engine:Inno.Assets:M:Inno.Assets.RetentionScope.Retain``1(``0)
title: RetentionScope.Retain
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
sourceFingerprint: b6fe221056167540b7b750fd28260a4c5cc83184951e33b0bc12cfb6251ebc2a
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Type parameters

**Type parameter `TLease`:** Disposable lease type.

## Parameters

**Parameter `lease`:** Lease whose disposal ownership transfers to this scope.

## Returns

The same lease for convenient initialization.

## Exceptions

**Exception `T:System.InvalidOperationException`:** Retirement has begun and the scope cannot accept another lease.
