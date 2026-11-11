---
title: "IIndexedObjectQueryCondition`1"
description: "Reference for IIndexedObjectQueryCondition`1 in Inno.Core.Collections."
uid: api.inno.core.collections.c9582977304b8cc3
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``IIndexedObjectQueryCondition`1``

This reference describes ``IIndexedObjectQueryCondition`1`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`GetCandidateCount`](#api-4df5dea48be3d909) | Method |
| [`GetSet`](#api-ff3942920f5c3050) | Method |
| [`TryGetSingle`](#api-63a5c96032430c97) | Method |
| [`Validate`](#api-fe5150b80155d2c6) | Method |

## Type declaration

<a id="api-c9582977304b8cc3"></a>
<!-- api: T:Inno.Core.Collections.IIndexedObjectQueryCondition`1 4c6ea3fb89a86f3a9998c580b58db25e4d50f44a56eb1980d530e79cab64d794 -->

```csharp
public interface Inno.Core.Collections.IIndexedObjectQueryCondition<T> where T : class
```

Defines one condition evaluated by an object-store query.

**Type parameter `T`:** The stored reference type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IIndexedObjectQueryCondition.cs#L11).

## `GetCandidateCount`

<a id="api-4df5dea48be3d909"></a>
<!-- api: M:Inno.Core.Collections.IIndexedObjectQueryCondition`1.GetCandidateCount(Inno.Core.Collections.IndexedObjectStore{`0}) 09b7af9776db488c67533e9ff0a50cebe7e22af9d37ea23a89847c137ea83f2c -->

```csharp
int Inno.Core.Collections.IIndexedObjectQueryCondition<T>.GetCandidateCount(Inno.Core.Collections.IndexedObjectStore<T> store)
```

Returns the estimated match count for this condition.

**Parameter `store`:** Store being queried.

**Returns:** Estimated number of matches; use `System.Int32.MaxValue` when unknown.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IIndexedObjectQueryCondition.cs#L22).

## `GetSet`

<a id="api-ff3942920f5c3050"></a>
<!-- api: M:Inno.Core.Collections.IIndexedObjectQueryCondition`1.GetSet(Inno.Core.Collections.IndexedObjectStore{`0}) afea1d398c0ec350bf927142b18369a9178eb639b2ca451fbd5524d3c389fce9 -->

```csharp
System.Collections.Generic.HashSet<T>? Inno.Core.Collections.IIndexedObjectQueryCondition<T>.GetSet(Inno.Core.Collections.IndexedObjectStore<T> store)
```

Returns a candidate set for this condition if available.

**Parameter `store`:** Store being queried.

**Returns:** Candidate set, or null when not supported.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IIndexedObjectQueryCondition.cs#L50).

## `TryGetSingle`

<a id="api-63a5c96032430c97"></a>
<!-- api: M:Inno.Core.Collections.IIndexedObjectQueryCondition`1.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{`0},`0@) 69f5c2c2eaab1a1e6fa0b0bbd13aee3ea96c7bf106060cee9b297100c1a80fb2 -->

```csharp
bool Inno.Core.Collections.IIndexedObjectQueryCondition<T>.TryGetSingle(Inno.Core.Collections.IndexedObjectStore<T> store, out T item)
```

Tries to get a single matching item when possible.

**Parameter `store`:** Store being queried.

**Parameter `item`:** The single matched item.

**Returns:** True when a single item is available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IIndexedObjectQueryCondition.cs#L36).

## `Validate`

<a id="api-fe5150b80155d2c6"></a>
<!-- api: M:Inno.Core.Collections.IIndexedObjectQueryCondition`1.Validate(Inno.Core.Collections.IndexedObjectStore{`0},`0) ab509149fa2a6ba6e507593994f1180ac6ac8a0a4c60e61b2c9a705cd637c261 -->

```csharp
bool Inno.Core.Collections.IIndexedObjectQueryCondition<T>.Validate(Inno.Core.Collections.IndexedObjectStore<T> store, T item)
```

Checks whether the item satisfies this condition.

**Parameter `store`:** Store being queried.

**Parameter `item`:** Item to test.

**Returns:** True if the item matches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IIndexedObjectQueryCondition.cs#L64).
