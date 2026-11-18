---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.cf853c40377a10d6e76866145ec98723612f6fb83319c866bf230beb6cb5c331
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectStore`1.FindFast``1(Inno.Core.Collections.IndexedObjectKey{``0},``0)
title: IndexedObjectStore<T>.FindFast
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
sourceFingerprint: 4b14ffad997a2f3e7020824f4af467dbe355efe7737895de5a6bf0089eedb062
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Remarks

Enumeration throws if the store is modified during iteration.

## Type parameters

**Type parameter `TKey`:** Key type.

## Parameters

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

## Returns

Lazy fail-fast enumerable of matching items.
