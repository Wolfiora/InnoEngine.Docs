---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.40b388e932a9fefe7c8140cf3481b04b5ac39a27a38b1f61916b706990a79537
symbol: engine:Inno.References:M:Inno.References.ReferenceCatalog.Create(System.Int64,System.Collections.Generic.IEnumerable{Inno.References.IReferenceResolver})
title: ReferenceCatalog.Create
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: f38278e57dc99b887040ff092f3967b761961e15d2dc32645efbcfa35572ccde
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `generation`:** The positive generation assigned by the catalog owner.

**Parameter `resolvers`:** Every resolver that belongs to the candidate generation.

## Returns

An immutable reference catalog ready for publication.

## Exceptions

**Exception `T:System.ArgumentOutOfRangeException`:** Thrown when `generation` is not positive.

**Exception `T:System.ArgumentNullException`:** Thrown when `resolvers` or one of its elements is null.

**Exception `T:System.InvalidOperationException`:** Thrown when a resolver kind is invalid or duplicated.
