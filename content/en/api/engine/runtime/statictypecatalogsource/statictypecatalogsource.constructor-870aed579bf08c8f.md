---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.870aed579bf08c8fc8496649eead28aa059832d4ebbc0810d504834408e196dd
symbol: engine:Inno.Runtime:M:Inno.Runtime.StaticTypeCatalogSource.#ctor(System.Collections.Generic.IReadOnlyList{System.Action{Inno.Extensibility.Catalogs.ITypeCatalogRegistrar}})
title: StaticTypeCatalogSource.Constructor
kind: api
owners:
- Inno.Runtime
apiSurface: source-clr
sourceFingerprint: 6903f71e8c16a51588ff15d9eeea0dbe5da565f6bcf68d0d66d7eeca8807f65b
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `catalogs`:** Assembly-local registration methods. Callbacks and the registrar are released after construction.

## Exceptions

**Exception `T:System.ArgumentException`:** A declaration is registered twice, a generic construction lacks its definition, or a contributor is null.
