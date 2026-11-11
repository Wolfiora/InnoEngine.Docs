---
title: "IndexedObjectStore`1"
description: "Reference for IndexedObjectStore`1 in Inno.Core.Collections."
uid: api.inno.core.collections.84ed5bf6909ff544
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``IndexedObjectStore`1``

This reference describes ``IndexedObjectStore`1`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Core.Collections.IIndexedObjectStore`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-79c52ce80c1b68a0) | Method |
| [`Add`](#api-7edcbc66988d43a7) | Method |
| [`All`](#api-34cc295b955b2d4a) | Method |
| [`AllFast`](#api-5d9fb9bbeb306553) | Method |
| [`Clear`](#api-7a21f573a6bba318) | Method |
| [```DefineKey``1```](#api-f4ec145888f17bd5) | Method |
| [```Find``1```](#api-ae51ed62af28e24a) | Method |
| [```FindFast``1```](#api-9b836b525c526efb) | Method |
| [```First``1```](#api-de6fbfdb84fc602e) | Method |
| [`GetAllKeys`](#api-17f44afdd5942fae) | Method |
| [`Query`](#api-c55927fba21e5ebb) | Method |
| [`Remove`](#api-66aeea7790bf00d7) | Method |
| [`RemoveAll`](#api-a6aa9e40d3663b18) | Method |
| [```RemoveKey``1```](#api-72c90343d2b1bde0) | Method |
| [```TryGetKey``1```](#api-a563db9f78df9cda) | Method |
| [`count`](#api-52c6bc070d4779dc) | Property |

## Type declaration

<a id="api-84ed5bf6909ff544"></a>
<!-- api: T:Inno.Core.Collections.IndexedObjectStore`1 20ad0018fa6e44bac273a69eec50310650c0fab61ba5389c250d6858659f8421 -->

```csharp
public sealed class Inno.Core.Collections.IndexedObjectStore<T> where T : class : Inno.Core.Collections.IIndexedObjectStore
```

Thread-safe object store with optional query keys over stored items.

**Type parameter `T`:** The stored reference type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.cs#L37).

## `#ctor`

<a id="api-79c52ce80c1b68a0"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.#ctor 292186b973501450736f97a4041a5b1babe4ade501f58e42a752a0bc201cafb0 -->

```csharp
public Inno.Core.Collections.IndexedObjectStore<T>.IndexedObjectStore()
```

Creates an empty object store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.cs#L56).

## `Add`

<a id="api-7edcbc66988d43a7"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.Add(`0) 5a966c21da6924d1b30aade22f52a3f316168f5ab0c069a12bde5388eb955a82 -->

```csharp
public Inno.Core.Collections.IndexedObjectEntry<T> Inno.Core.Collections.IndexedObjectStore<T>.Add(T item)
```

Adds an item to the store without indexing.

**Parameter `item`:** The item to add.

**Returns:** The validated indexed object entryt that represents the completed operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.cs#L151).

## `All`

<a id="api-34cc295b955b2d4a"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.All c5407e066bc5e7b9b13ae2ee251b2f600103313af79d365df51c112b0a600a80 -->

```csharp
public System.Collections.Generic.IReadOnlyList<T> Inno.Core.Collections.IndexedObjectStore<T>.All()
```

Returns all stored items as a stable snapshot.

**Constraints:** The returned list is detached from subsequent store mutations.

**Returns:** A snapshot list of all stored items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Queries.cs#L165).

## `AllFast`

<a id="api-5d9fb9bbeb306553"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.AllFast 7b0abb1e8a4e0be5b67d7b431101c98a1cba83133b74fec4cb99bf42ac18998b -->

```csharp
public System.Collections.Generic.IEnumerable<T> Inno.Core.Collections.IndexedObjectStore<T>.AllFast()
```

Returns all stored items as a lazy fail-fast enumerable.

**Constraints:** Enumeration throws if the store is modified during iteration.

**Returns:** Lazy fail-fast enumerable of all stored items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Queries.cs#L189).

## `Clear`

<a id="api-7a21f573a6bba318"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.Clear 48191cee3678f6b4a8eb70b3260cb83c9c72b72df65523128163a8ce7a130415 -->

```csharp
public void Inno.Core.Collections.IndexedObjectStore<T>.Clear()
```

Clears all stored items and removes all defined keys.

**Constraints:** After calling this, all key handles are invalid and must be redefined via ```Inno.Core.Collections.IndexedObjectStore`1.DefineKey``1(System.String,Inno.Core.Collections.IndexedObjectKeyFlags,System.Collections.Generic.IComparer{``0})```.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.cs#L86).

## ```DefineKey``1```

<a id="api-f4ec145888f17bd5"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.DefineKey``1(System.String,Inno.Core.Collections.IndexedObjectKeyFlags,System.Collections.Generic.IComparer{``0}) 1611e9253fcdbdc4d2d9e01e9a92d2cb71bb73ccda0af26aa58b73a9faa1bb04 -->

```csharp
public Inno.Core.Collections.IndexedObjectKey<TKey> Inno.Core.Collections.IndexedObjectStore<T>.DefineKey<TKey>(string name, Inno.Core.Collections.IndexedObjectKeyFlags flags = Inno.Core.Collections.IndexedObjectKeyFlags.Unordered, System.Collections.Generic.IComparer<TKey>? orderComparer = null) where TKey : notnull
```

Defines a query key over stored items.

**Type parameter `TKey`:** Key type.

**Parameter `name`:** Unique key name.

**Parameter `flags`:** Key behavior flags.

**Parameter `orderComparer`:** Optional order comparer. Required when `Inno.Core.Collections.IndexedObjectKeyFlags.Ordered` is set.

**Returns:** The created key handle.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Keys.cs#L29).

## ```Find``1```

<a id="api-ae51ed62af28e24a"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.Find``1(Inno.Core.Collections.IndexedObjectKey{``0},``0) acec9fd26af1e2ebe117f3c0ad18ced4c02630f6c49513669c8bbdb30861bdbb -->

```csharp
public System.Collections.Generic.IReadOnlyList<T> Inno.Core.Collections.IndexedObjectStore<T>.Find<TKey>(Inno.Core.Collections.IndexedObjectKey<TKey> key, TKey value) where TKey : notnull
```

Finds items by key and returns a stable snapshot.

**Constraints:** The returned list is detached from subsequent store mutations.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

**Returns:** A stable snapshot list of matching items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Queries.cs#L56).

## ```FindFast``1```

<a id="api-9b836b525c526efb"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.FindFast``1(Inno.Core.Collections.IndexedObjectKey{``0},``0) c70512787047aad418f422f157010936dcc8dc5ee7419537758520ec2a86f92e -->

```csharp
public System.Collections.Generic.IEnumerable<T> Inno.Core.Collections.IndexedObjectStore<T>.FindFast<TKey>(Inno.Core.Collections.IndexedObjectKey<TKey> key, TKey value) where TKey : notnull
```

Finds items by key and returns a lazy fail-fast enumerable.

**Constraints:** Enumeration throws if the store is modified during iteration.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

**Returns:** Lazy fail-fast enumerable of matching items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Queries.cs#L29).

## ```First``1```

<a id="api-de6fbfdb84fc602e"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.First``1(Inno.Core.Collections.IndexedObjectKey{``0},``0) b8907265673ae6c05d79cbad0ab68659aca31f86772f610b9f88e13e7ad18b32 -->

```csharp
public T? Inno.Core.Collections.IndexedObjectStore<T>.First<TKey>(Inno.Core.Collections.IndexedObjectKey<TKey> key, TKey value) where TKey : notnull
```

Returns the first item by key or null if none exists.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** The key handle to query.

**Parameter `value`:** The key value to look up.

**Returns:** The first matching item or null.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Queries.cs#L138).

## `GetAllKeys`

<a id="api-17f44afdd5942fae"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.GetAllKeys a268d342f31016e6d1adbb44bd176fd22498b46f555c4fbd547af79a0b627b57 -->

```csharp
public System.Collections.Generic.IEnumerable<string> Inno.Core.Collections.IndexedObjectStore<T>.GetAllKeys()
```

Gets all defined key names as a lazy enumerable.

**Constraints:** Enumeration is fail-fast and throws if the store is modified during iteration.

**Returns:** Lazy enumerable of key names.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Keys.cs#L162).

## `Query`

<a id="api-c55927fba21e5ebb"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.Query 2dcc3e767635ff26ac5658062665e7ffa594cc714163565f5fc103612b8d5a58 -->

```csharp
public Inno.Core.Collections.IndexedObjectQuery<T> Inno.Core.Collections.IndexedObjectStore<T>.Query()
```

Starts a query over stored items.

**Returns:** A query builder.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Queries.cs#L205).

## `Remove`

<a id="api-66aeea7790bf00d7"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.Remove(`0) 756b88b5bc6e080c9c101c6dbd966f4a42e15a4bea16164b0b2dd1032a9ef035 -->

```csharp
public bool Inno.Core.Collections.IndexedObjectStore<T>.Remove(T item)
```

Removes an item from the store and all keys.

**Parameter `item`:** The item to remove.

**Returns:** True if removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.cs#L188).

## `RemoveAll`

<a id="api-a6aa9e40d3663b18"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.RemoveAll 75ab225ff3fa0fb38cab61bfff98a4327941ffd3d8843a03e913f19a0b502b81 -->

```csharp
public void Inno.Core.Collections.IndexedObjectStore<T>.RemoveAll()
```

Clears all stored items but keeps defined keys.

**Constraints:** Keys remain valid but all indexed values are removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.cs#L115).

## ```RemoveKey``1```

<a id="api-72c90343d2b1bde0"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.RemoveKey``1(Inno.Core.Collections.IndexedObjectKey{``0}) d65d78a5f5a78d9702d27657c82cf2d8120319b370cf7b5c41c69a2eb927e750 -->

```csharp
public bool Inno.Core.Collections.IndexedObjectStore<T>.RemoveKey<TKey>(Inno.Core.Collections.IndexedObjectKey<TKey> key)
```

Removes a key previously defined on the store.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** The key handle to remove.

**Returns:** True if removed.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Keys.cs#L73).

## ```TryGetKey``1```

<a id="api-a563db9f78df9cda"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectStore`1.TryGetKey``1(System.String,Inno.Core.Collections.IndexedObjectKey{``0}@) 2b53a3dd7726b6352b03736a9e53ce42bda1e2e0c7387a174ecdb931024d253d -->

```csharp
public bool Inno.Core.Collections.IndexedObjectStore<T>.TryGetKey<TKey>(string name, out Inno.Core.Collections.IndexedObjectKey<TKey> key) where TKey : notnull
```

Gets a previously defined key by name.

**Type parameter `TKey`:** Key type.

**Parameter `name`:** Key name.

**Parameter `key`:** The resolved key handle.

**Returns:** True if found and type matches.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.Keys.cs#L106).

## `count`

<a id="api-52c6bc070d4779dc"></a>
<!-- api: P:Inno.Core.Collections.IndexedObjectStore`1.count b322fb5362b2a33b7f72c92fc6b0f08d8ab54df314ca4516936545317cd3a9cb -->

```csharp
public int Inno.Core.Collections.IndexedObjectStore<T>.count { get; }
```

Number of stored items.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectStore.cs#L64).
