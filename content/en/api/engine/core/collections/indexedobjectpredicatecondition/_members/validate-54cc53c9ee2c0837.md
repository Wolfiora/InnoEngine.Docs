---
uid: api.54cc53c9ee2c08375d1cec12d092bbf3e6d1b49d481b40950ae484fd0fb81780
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectPredicateCondition\u00601.Validate(Inno.Core.Collections.IndexedObjectStore{\u00600},\u00600)"
source: xml
reviewed: 46ea6e3e1424a2af78ca1a5c402a8c79c202272071de22387aebe4358ec8456e
title: "Validate"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Validates the supplied input and rejects state that cannot satisfy this contract.

**Parameter `store`:** The store consumed by validate; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `item`:** The stored item associated with the validated handle.
