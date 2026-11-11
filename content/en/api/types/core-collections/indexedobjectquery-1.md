---
title: "IndexedObjectQuery`1"
description: "Reference for IndexedObjectQuery`1 in Inno.Core.Collections."
uid: api.inno.core.collections.b478432c85992b55
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``IndexedObjectQuery`1``

This reference describes ``IndexedObjectQuery`1`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [```Find``1```](#api-b3435d2b6c261bd8) | Method |
| [`First`](#api-5de8d553dca57fff) | Method |
| [`Get`](#api-611c1caeeeea71c2) | Method |
| [`GetFast`](#api-ab8e2c1c4a6227e7) | Method |
| [```OrderBy``1```](#api-56fd4b68e786c392) | Method |
| [`Where`](#api-09ef0a7b6aebd279) | Method |
| [`Where`](#api-0a5afff56b8a18c7) | Method |

## Type declaration

<a id="api-b478432c85992b55"></a>
<!-- api: T:Inno.Core.Collections.IndexedObjectQuery`1 02b87c304cc2acab07b0c84557360d8180d5e3273f2dca67e9b9bd075cbf0a6e -->

```csharp
public sealed class Inno.Core.Collections.IndexedObjectQuery<T> where T : class
```

Query builder over store keys.

**Type parameter `T`:** The stored reference type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L12).

## ```Find``1```

<a id="api-b3435d2b6c261bd8"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectQuery`1.Find``1(Inno.Core.Collections.IndexedObjectKey{``0},``0) d8993dd8c29729564bcc45c601e27a3b79e4936ae57c2a03aca8022349a290f0 -->

```csharp
public Inno.Core.Collections.IndexedObjectQuery<T> Inno.Core.Collections.IndexedObjectQuery<T>.Find<TKey>(Inno.Core.Collections.IndexedObjectKey<TKey> key, TKey value) where TKey : notnull
```

Adds a key equality condition.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** Key handle.

**Returns:** The same query instance.

**Parameter `value`:** The concrete value read or transformed by this operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L69).

## `First`

<a id="api-5de8d553dca57fff"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectQuery`1.First ae72959ecbf15f113c4c9c0ed904505595d647cc0471ad7600b5867a68584d66 -->

```csharp
public T? Inno.Core.Collections.IndexedObjectQuery<T>.First()
```

Executes the query and returns the first matching item or null.

**Returns:** The first matching item or null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L122).

## `Get`

<a id="api-611c1caeeeea71c2"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectQuery`1.Get ac81a359597a5788e49d8abbd3059cd579031b1730c1fb0cd2785e99ad888e5e -->

```csharp
public System.Collections.Generic.IReadOnlyList<T> Inno.Core.Collections.IndexedObjectQuery<T>.Get()
```

Executes the query and returns a stable snapshot.

**Returns:** A snapshot list detached from subsequent store mutations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L114).

## `GetFast`

<a id="api-ab8e2c1c4a6227e7"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectQuery`1.GetFast f4e7ffc3f56754c340bebd1637fd42aa3a65190ddf80a07670b1c1484cbc1d6e -->

```csharp
public System.Collections.Generic.IEnumerable<T> Inno.Core.Collections.IndexedObjectQuery<T>.GetFast()
```

Executes the query and returns a lazy fail-fast enumerable of results.

**Constraints:** Enumeration is fail-fast and throws if the store is modified during iteration.

**Returns:** Lazy fail-fast enumerable of matching items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L106).

## ```OrderBy``1```

<a id="api-56fd4b68e786c392"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectQuery`1.OrderBy``1(Inno.Core.Collections.IndexedObjectKey{``0}) ef6fcb6ce6f280bdd5b46dbd98041c7f883192d72939c7cf40c4d627b467870e -->

```csharp
public Inno.Core.Collections.IndexedObjectQuery<T> Inno.Core.Collections.IndexedObjectQuery<T>.OrderBy<TKey>(Inno.Core.Collections.IndexedObjectKey<TKey> key) where TKey : notnull
```

Orders results by a key marked with `Inno.Core.Collections.IndexedObjectKeyFlags.Ordered`.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** Key handle.

**Returns:** The same query instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L86).

## `Where`

<a id="api-09ef0a7b6aebd279"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectQuery`1.Where(Inno.Core.Collections.IIndexedObjectQueryCondition{`0}) e1bcda67dd39a8449296f2beec0c18b051d294c166bbd9093c4ecafce04635f8 -->

```csharp
public Inno.Core.Collections.IndexedObjectQuery<T> Inno.Core.Collections.IndexedObjectQuery<T>.Where(Inno.Core.Collections.IIndexedObjectQueryCondition<T> condition)
```

Adds a custom condition implementation.

**Parameter `condition`:** The condition to append to this query.

**Returns:** The same query instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L34).

## `Where`

<a id="api-0a5afff56b8a18c7"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectQuery`1.Where(System.Func{`0,System.Boolean}) bfbad0f23978f5c36e5a678e2a0e0665c765e339f0cef0c705f0eff52e24b8b9 -->

```csharp
public Inno.Core.Collections.IndexedObjectQuery<T> Inno.Core.Collections.IndexedObjectQuery<T>.Where(System.Func<T, bool> predicate)
```

Adds a predicate condition evaluated against candidate items.

**Parameter `predicate`:** Predicate to evaluate.

**Returns:** The same query instance.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectQuery.cs#L52).
