---
uid: api.5487adffc349fab9ccc1685f911dee2394dc47cd48f9d250d970c89e6e2d8a0e
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRef.Resolve(Inno.Extensibility.Types.TypeCatalog)"
source: xml
reviewed: 8365b2a2bd24b92af24229b470aa930f1e5a1e3007d38c300b329c02ec94b47b
title: "Resolve"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Resolves this reference against one catalog's active immutable generation.

**Parameter `catalog`:** The catalog that owns the required type generation.

**Returns:** The active CLR type represented by this reference.

**Exception `T:System.InvalidOperationException`:** Thrown when the reference is empty, the type cache is unavailable, or the logical type is not loaded.

**Exception `T:System.ArgumentNullException`:** Thrown when `catalog` is null.
