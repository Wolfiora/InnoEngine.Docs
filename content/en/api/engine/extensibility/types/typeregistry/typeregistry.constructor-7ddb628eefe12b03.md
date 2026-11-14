---
uid: api.7ddb628eefe12b0375e2f4ad37e47355d61414f46284862942d1f65e9cea36f2
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.#ctor(Inno.Extensibility.Types.TypeCatalog,System.Nullable{System.TimeSpan})"
source: xml
reviewed: 49ab97d058d3c73a5b0f3ede3d943fb1c9ab0574c08b9bf683f25ebe656eb489
title: "TypeRegistry\u003CTSnapshot\u003E.Constructor"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Creates and registers a refreshable type registry.

## Parameters

**Parameter `types`:** The type catalog that coordinates this registry's candidate generations.

**Parameter `retirementTimeout`:** The positive owner-thread drain deadline; omitted values use thirty seconds.

## Exceptions

**Exception `T:System.ArgumentNullException`:** Thrown when `types` is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The retirement timeout is not positive.
