---
# Generated metadata. Maintained by API synchronization and review tooling.
uid: api.7ddb628eefe12b0375e2f4ad37e47355d61414f46284862942d1f65e9cea36f2
symbol: engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry`1.#ctor(Inno.Extensibility.Types.TypeCatalog,System.Nullable{System.TimeSpan})
title: TypeRegistry<TSnapshot>.Constructor
kind: api
owners:
- Inno.Extensibility.Types
apiSurface: source-clr
reviewed: 2e9c7621c58eabbd3b04d8caaa8452f21665b243bbf48f4227a2a0f64b58fd52
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
