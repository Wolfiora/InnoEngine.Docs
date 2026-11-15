---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.cd789ff155c8c2ad006ab3a0de0901f57127aa4117ed40b2e85ef546b2be08f4
symbol: engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectKeyCondition`2.Validate(Inno.Core.Collections.IndexedObjectStore{`0},`0)
title: IndexedObjectKeyCondition<T, TKey>.Validate
kind: api
owners:
- Inno.Core.Collections
apiSurface: source-clr
reviewed: a46da4f6988f946b4be203683c00ee58519f8994b2fae0b12e9bc308836cbb94

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Validates the supplied input and rejects state that cannot satisfy this contract.

## Parameters

**Parameter `store`:** The store consumed by validate; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

## Returns

`true` when the operation succeeds or its condition is satisfied; otherwise, `false`.
