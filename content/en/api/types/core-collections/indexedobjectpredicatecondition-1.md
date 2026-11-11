---
title: "IndexedObjectPredicateCondition`1"
description: "Reference for IndexedObjectPredicateCondition`1 in Inno.Core.Collections."
uid: api.inno.core.collections.7bfaf1c0045f92e4
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``IndexedObjectPredicateCondition`1``

This reference describes ``IndexedObjectPredicateCondition`1`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Collections.IIndexedObjectQueryCondition<T>`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-637656b57fc5f1b9) | Method |
| [`GetCandidateCount`](#api-00b38a3100716c39) | Method |
| [`GetSet`](#api-88e2a68be737e285) | Method |
| [`op_Implicit`](#api-c5f5bcf3549d9f0c) | Method |
| [`TryGetSingle`](#api-52652dda32d4537f) | Method |
| [`Validate`](#api-90492e242f8e392d) | Method |

## Type declaration

<a id="api-7bfaf1c0045f92e4"></a>
<!-- api: T:Inno.Core.Collections.IndexedObjectPredicateCondition`1 b3f31d12a146fc7fb090c3003dd26a36e856491bedec7103c4b1e65fa8f915e2 -->

```csharp
public sealed class Inno.Core.Collections.IndexedObjectPredicateCondition<T> where T : class : Inno.Core.Collections.IIndexedObjectQueryCondition<T> where T : class
```

Matches object-store items by evaluating a predicate.

**Type parameter `T`:** The stored reference type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectPredicateCondition.cs#L13).

## `#ctor`

<a id="api-637656b57fc5f1b9"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectPredicateCondition`1.#ctor(System.Func{`0,System.Boolean}) 10b843e63fbac6c45c35d883f1b5b513ecbbafead232476cb2666ec1c40cd7e9 -->

```csharp
public Inno.Core.Collections.IndexedObjectPredicateCondition<T>.IndexedObjectPredicateCondition(System.Func<T, bool> predicate)
```

Creates a predicate query condition.

**Parameter `predicate`:** The predicate evaluated for each candidate.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectPredicateCondition.cs#L23).

## `GetCandidateCount`

<a id="api-00b38a3100716c39"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectPredicateCondition`1.GetCandidateCount(Inno.Core.Collections.IndexedObjectStore{`0}) 6338862e7b0e25c1cd7430b50ba8404cd1f07f7adf038d06939f55aeded7d1c9 -->

```csharp
public int Inno.Core.Collections.IndexedObjectPredicateCondition<T>.GetCandidateCount(Inno.Core.Collections.IndexedObjectStore<T> store)
```

Gets a candidate count required by the implemented contract.

**Parameter `store`:** The store consumed by get candidate count; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The scalar result calculated from the supplied inputs.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectPredicateCondition.cs#L38).

## `GetSet`

<a id="api-88e2a68be737e285"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectPredicateCondition`1.GetSet(Inno.Core.Collections.IndexedObjectStore{`0}) dac6b3f8a3eb47929b6dbebbfebb3989731db5b19b67b4452a38e85a24645010 -->

```csharp
public System.Collections.Generic.HashSet<T>? Inno.Core.Collections.IndexedObjectPredicateCondition<T>.GetSet(Inno.Core.Collections.IndexedObjectStore<T> store)
```

Gets a set required by the implemented contract.

**Parameter `store`:** The store consumed by get set; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** The validated hash sett? that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectPredicateCondition.cs#L71).

## `op_Implicit`

<a id="api-c5f5bcf3549d9f0c"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectPredicateCondition`1.op_Implicit(System.Func{`0,System.Boolean})~Inno.Core.Collections.IndexedObjectPredicateCondition{`0} 2b03385c2de494c3cd97a9675d4503d29efb67776c92fbd9f44834a1bb354819 -->

```csharp
public static Inno.Core.Collections.IndexedObjectPredicateCondition<T>.implicit operator Inno.Core.Collections.IndexedObjectPredicateCondition<T>(System.Func<T, bool> predicate)
```

Creates a query condition from a predicate delegate.

**Parameter `predicate`:** The predicate to wrap.

**Returns:** The validated indexed object predicate conditiont that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectPredicateCondition.cs#L100).

## `TryGetSingle`

<a id="api-52652dda32d4537f"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectPredicateCondition`1.TryGetSingle(Inno.Core.Collections.IndexedObjectStore{`0},`0@) 5b8122c1aef012581bf19181c213fa09208b6b6cb6331f620e450913fa416a05 -->

```csharp
public bool Inno.Core.Collections.IndexedObjectPredicateCondition<T>.TryGetSingle(Inno.Core.Collections.IndexedObjectStore<T> store, out T item)
```

Attempts to get single without changing state when the operation cannot complete.

**Parameter `store`:** The store consumed by try get single; ownership remains with the caller unless explicitly stated otherwise.

**Parameter `item`:** The stored item associated with the validated handle.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectPredicateCondition.cs#L53).

## `Validate`

<a id="api-90492e242f8e392d"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectPredicateCondition`1.Validate(Inno.Core.Collections.IndexedObjectStore{`0},`0) 20562da37d5c7bc48a26445d09ca8e8a485c7bdc31d4a27af7cb01c69ac774f3 -->

```csharp
public bool Inno.Core.Collections.IndexedObjectPredicateCondition<T>.Validate(Inno.Core.Collections.IndexedObjectStore<T> store, T item)
```

Validates the supplied input and rejects state that cannot satisfy this contract.

**Parameter `store`:** The store consumed by validate; ownership remains with the caller unless explicitly stated otherwise.

**Returns:** `true` when the operation succeeds or its condition is satisfied; otherwise, `false`.

**Parameter `item`:** The stored item associated with the validated handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/QueryCondition/IndexedObjectPredicateCondition.cs#L86).
