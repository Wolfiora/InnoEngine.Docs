---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.870aed579bf08c8fc8496649eead28aa059832d4ebbc0810d504834408e196dd
symbol: engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Action{Inno.Extensibility.Catalogs.ITypeCatalogRegistrar}})
title: StaticTypeCatalogSource.Constructor
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
reviewed: 3af3cd4f280c49046807eaec4b63a8ba4cf6505b9cbd91d29fd70de9836d1f68

# Authoring metadata. Edit these fields and the explanation below.
source: xml
outdated: false
---

## Parameters

**Parameter `catalogs`:** Assembly-local registration methods. Callbacks and the registrar are released after construction.

## Exceptions

**Exception `T:System.ArgumentException`:** A declaration is registered twice, a generic construction lacks its definition, or a contributor is null.
