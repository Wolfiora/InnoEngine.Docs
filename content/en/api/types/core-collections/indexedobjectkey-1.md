---
title: "IndexedObjectKey`1"
description: "Reference for IndexedObjectKey`1 in Inno.Core.Collections."
uid: api.inno.core.collections.9543fd3108749fe8
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``IndexedObjectKey`1``

This reference describes ``IndexedObjectKey`1`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`name`](#api-4adcc2a1f3bcb657) | Field |
| [`isValid`](#api-eab22119346c4fec) | Property |

## Type declaration

<a id="api-9543fd3108749fe8"></a>
<!-- api: T:Inno.Core.Collections.IndexedObjectKey`1 c819304e7c275e94e296d72b238a4507f1570f66d6ae01a7a23b2ae8d08d10f8 -->

```csharp
public readonly struct Inno.Core.Collections.IndexedObjectKey<TKey>
```

Opaque handle used to query a key without exposing its implementation.

**Type parameter `TKey`:** Key type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectKey.cs#L32).

## `name`

<a id="api-4adcc2a1f3bcb657"></a>
<!-- api: F:Inno.Core.Collections.IndexedObjectKey`1.name ce1c8dd97e3ec64f23097c8f5e100a76967eb8170d37d00e5b8795f8b7e15c89 -->

```csharp
public readonly string Inno.Core.Collections.IndexedObjectKey<TKey>.name
```

Key name


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectKey.cs#L40).

## `isValid`

<a id="api-eab22119346c4fec"></a>
<!-- api: P:Inno.Core.Collections.IndexedObjectKey`1.isValid cec2a9881fc73f810184d814fd782fa9717e3295f0797c4cbb84194f914a0e1c -->

```csharp
public bool Inno.Core.Collections.IndexedObjectKey<TKey>.isValid { get; }
```

Returns true if the store key is still valid in its owning store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectKey.cs#L45).
