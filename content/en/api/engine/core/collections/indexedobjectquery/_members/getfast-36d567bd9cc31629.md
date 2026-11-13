---
uid: api.36d567bd9cc316297c6a137e847da67b7179b9aa61c2f65c0cb2feb92580ec41
symbol: "engine:Inno.Core.Collections:M:Inno.Core.Collections.IndexedObjectQuery\u00601.GetFast"
source: xml
reviewed: db12a5e0ddc6b5a3514b54e4fe569aa31cda515ed8ae49ea043361ab00314d0c
title: "GetFast"
kind: api
owners: [Inno.Core.Collections]
apiSurface: source-clr
---

Executes the query and returns a lazy fail-fast enumerable of results.

## Remarks

Enumeration is fail-fast and throws if the store is modified during iteration.

**Returns:** Lazy fail-fast enumerable of matching items.
