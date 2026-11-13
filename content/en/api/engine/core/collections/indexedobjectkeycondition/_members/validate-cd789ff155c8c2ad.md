---
uid: api.cd789ff155c8c2ad006ab3a0de0901f57127aa4117ed40b2e85ef546b2be08f4
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectKeyCondition\u00602.Validate(Inno.Core.Collections.IndexedObjectStore{\u00600},\u00600)"
source: xml
reviewed: a46da4f6988f946b4be203683c00ee58519f8994b2fae0b12e9bc308836cbb94
title: "Validate"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Validates the supplied input and rejects state that cannot satisfy this contract.

**Parameter `store`:** The store consumed by validate; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `item`:** The stored item associated with the validated handle.
