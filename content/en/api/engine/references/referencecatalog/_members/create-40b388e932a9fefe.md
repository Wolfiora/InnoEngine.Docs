---
uid: api.40b388e932a9fefe7c8140cf3481b04b5ac39a27a38b1f61916b706990a79537
symbol: "engine:Inno.References:M:Inno.References.ReferenceCatalog.Create(System.Int64,System.Collections.Generic.IEnumerable{Inno.References.IReferenceResolver})"
source: xml
reviewed: a90ff67ed0098a4308efb862cf88871f5e7cfb5cfc59496658559655db78cdad
title: "Create"
kind: api
owners: [Inno.References]
apiSurface: source-clr
---

Builds a complete resolver generation and rejects duplicate protocol identifiers.

**Parameter `generation`:** The positive generation assigned by the catalog owner.

**Parameter `resolvers`:** Every resolver that belongs to the candidate generation.

**Returns:** An immutable reference catalog ready for publication.

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `generation` is not positive.

**Exception `T:System.ArgumentNullException`:** Thrown when `resolvers` or one of its elements is null.

**Exception `T:System.InvalidOperationException`:** Thrown when a resolver kind is invalid or duplicated.
