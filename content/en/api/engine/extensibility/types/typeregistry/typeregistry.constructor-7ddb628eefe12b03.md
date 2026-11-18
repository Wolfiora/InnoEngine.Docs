---
# Generated metadata. Maintained by API synchronization tooling.
uid: api.7ddb628eefe12b0375e2f4ad37e47355d61414f46284862942d1f65e9cea36f2
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.#ctor(Inno.Extensibility.Types.TypeCatalog,System.Nullable{System.TimeSpan})
title: TypeRegistry<TSnapshot>.Constructor
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
sourceFingerprint: 6994efcf184102c4d7abd0adf02b8b1595b45e37bc738ae0fc979038e741c4f0
contracts: []

# Authoring metadata. Edit these fields and the explanation below.
source: xml
description: null
outdated: false
---

## Parameters

**Parameter `types`:** The type catalog that coordinates this registry's candidate generations.

**Parameter `retirementTimeout`:** The positive owner-thread drain deadline; omitted values use thirty seconds.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `types` is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The retirement timeout is not positive.
