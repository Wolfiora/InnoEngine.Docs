---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.e3bafa5591ec8a0ad86729b8b391a961ec5a1978a6c7dcce65553122dd8d558a
symbol: engine:Inno.Assets:M:Inno.Assets.RetentionScope.Retain``1(``0)
title: RetentionScope.Retain
kind: api
owners:
- Inno.Assets
apiSurface: source-clr
reviewed: c49149cd5f4bfa1a2bd060e2b5b3fea43a464ced8ffc8ffa2257bc9ba7f38e83
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
