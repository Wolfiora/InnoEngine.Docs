---
uid: api.7ddb628eefe12b0375e2f4ad37e47355d61414f46284862942d1f65e9cea36f2
symbol: "engine:Inno.Extensibility.Types:M:Inno.Extensibility.Types.TypeRegistry\u00601.#ctor(Inno.Extensibility.Types.TypeCatalog,System.Nullable{System.TimeSpan})"
source: xml
reviewed: 1e86fc436a8fc567c384fb8919ad818f023fd9d153940494878e0c6a4e659f15
title: "Constructor"
kind: api
owners: [Inno.Extensibility.Types]
apiSurface: source-clr
---

Creates and registers a refreshable type registry.

**Parameter `types`:** The type catalog that coordinates this registry's candidate generations.

**Parameter `retirementTimeout`:** The positive owner-thread drain deadline; omitted values use thirty seconds.

**Exception `T:System.ArgumentNullException`:** Thrown when `types` is null.

**Exception `T:System.ArgumentOutOfRangeException`:** The retirement timeout is not positive.
