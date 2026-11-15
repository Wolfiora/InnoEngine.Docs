---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.0eec56f261cc51b854e814655425ec9be37b9ec4c75aa7ec25a6427e36f00cf1
symbol: engine:Inno.References:M:Inno.References.ReferenceKey.#ctor(System.Guid,System.String)
title: ReferenceKey.Constructor
kind: api
owners:
- Inno.References
apiSurface: source-clr
reviewed: 8692604d51546691cc80808644d74cd91386c06e740efd30376fce306014989a

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

Creates a key for one reference slot.

## Parameters

**Parameter `ownerPersistentId`:** The persistent identity of the object that owns the slot.

**Parameter `path`:** The stable property or structural path inside the owner.

## Exceptions

**Exception `T:System.ArgumentException`:** Thrown when the owner identity or path is empty.
