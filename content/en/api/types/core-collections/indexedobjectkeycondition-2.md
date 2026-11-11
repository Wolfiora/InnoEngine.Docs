---
title: "IndexedObjectKeyCondition`2"
description: "Reference for IndexedObjectKeyCondition`2 in Inno.Core.Collections."
uid: api.inno.core.collections.4da0307df3e543d3
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``IndexedObjectKeyCondition`2``

This reference describes ``IndexedObjectKeyCondition`2`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Collections.IIndexedObjectQueryCondition<T>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e27f12b9e4bb794b) | Method |
| [`GetCandidateCount`](#api-fe29e493dc792d90) | Method |
| [`GetSet`](#api-aeb5c39649ce1636) | Method |
| [`TryGetSingle`](#api-d4083443258a33d6) | Method |
| [`Validate`](#api-218048ea0de15cc6) | Method |

## Type declaration

<a id="api-4da0307df3e543d3"></a>
<!-- api: T:Inno.Core.Collections.IndexedObjectKeyCondition`2 a21a8c069f85ba878fecf2b80e3784aecfb48946c6e25fa98f8e391d7f51948b -->

```csharp
public sealed class Inno.Core.Collections.IndexedObjectKeyCondition<T, TKey> where T : class where TKey : notnull : Inno.Core.Collections.IIndexedObjectQueryCondition<T> where T : class
```

Matches object-store items associated with one indexed key value.

**Type parameter `T`:** The stored reference type.

**Type parameter `TKey`:** The indexed key type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectKeyCondition.cs#L15).

## `#ctor`

<a id="api-e27f12b9e4bb794b"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectKeyCondition`2.#ctor(Inno.Core.Collections.IndexedObjectKey{`1},`1) 5968fa36cffedef81eb0136c515e410d6b81d2694d1280239a4cda269115f10e -->

```csharp
public Inno.Core.Collections.IndexedObjectKeyCondition<T, TKey>.IndexedObjectKeyCondition(Inno.Core.Collections.IndexedObjectKey<TKey> key, TKey value)
```

Creates an indexed-key query condition.

**Parameter `key`:** The store key to query.

**Parameter `value`:** The required key value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectKeyCondition.cs#L29).

## `GetCandidateCount`

<a id="api-fe29e493dc792d90"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectKeyCondition`2.GetCandidateCount(Inno.Core.Collections.IndexedObjectStore{`0}) dc7751c4c949888027656b8a508e18774ff5916ce05549530135b58557928403 -->

```csharp
public int Inno.Core.Collections.IndexedObjectKeyCondition<T, TKey>.GetCandidateCount(Inno.Core.Collections.IndexedObjectStore<T> store)
```

Gets a candidate count required by the implemented contract.

**Returns:** The scalar result calculated from the supplied inputs.

**Parameter `store`:** The store consumed by get candidate count; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectKeyCondition.cs#L47).

## `GetSet`

<a id="api-aeb5c39649ce1636"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectKeyCondition`2.GetSet(Inno.Core.Collections.IndexedObjectStore{`0}) 79e98d68cc6ac0399239597f21814558be92ae8f7da3f6c5104fae0a56682c92 -->

```csharp
public System.Collections.Generic.HashSet<T>? Inno.Core.Collections.IndexedObjectKeyCondition<T, TKey>.GetSet(Inno.Core.Collections.IndexedObjectStore<T> store)
```

Gets a set required by the implemented contract.

**Returns:** The validated hash sett? that represents the completed operation.

**Parameter `store`:** The store consumed by get set; ownership remains with the caller unless explicitly stated otherwise.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectKeyCondition.cs#L86).

## `TryGetSingle`

<a id="api-d4083443258a33d6"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectKeyCondition`2.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{`0},`0@) 3d3822514d0ade2aa2bd1ba53bf738d5d8fc4adc439e14bb8805d0cca3576306 -->

```csharp
public bool Inno.Core.Collections.IndexedObjectKeyCondition<T, TKey>.TryGetSingle(Inno.Core.Collections.IndexedObjectStore<T> store, out T item)
```

Attempts to get single without changing state when the operation cannot complete.

**Parameter `store`:** The store consumed by try get single; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectKeyCondition.cs#L62).

## `Validate`

<a id="api-218048ea0de15cc6"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectKeyCondition`2.Validate(Inno.Core.Collections.IndexedObjectStore{`0},`0) 8da00c1d80a1419ab22b467a9f5177702634e2cc0bcc478288748be7ba4cbccf -->

```csharp
public bool Inno.Core.Collections.IndexedObjectKeyCondition<T, TKey>.Validate(Inno.Core.Collections.IndexedObjectStore<T> store, T item)
```

Validates the supplied input and rejects state that cannot satisfy this contract.

**Parameter `store`:** The store consumed by validate; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `item`:** The stored item associated with the validated handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectKeyCondition.cs#L101).
