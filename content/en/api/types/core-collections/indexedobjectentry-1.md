---
title: "IndexedObjectEntry`1"
description: "Reference for IndexedObjectEntry`1 in Inno.Core.Collections."
uid: api.inno.core.collections.4237d4a8c0ccdd99
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# ``IndexedObjectEntry`1``

This reference describes ``IndexedObjectEntry`1`` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [```Set``1```](#api-a4014bafd1d19ea3) | Method |
| [`isValid`](#api-f7f6c15d53d8dd2f) | Property |

## Type declaration

<a id="api-4237d4a8c0ccdd99"></a>
<!-- api: T:Inno.Core.Collections.IndexedObjectEntry`1 6e4f44889c0879420db4b3b9728e3964d84fae6c3313e043426c3bddc613e173 -->

```csharp
public readonly struct Inno.Core.Collections.IndexedObjectEntry<T> where T : class
```

Entry wrapper for setting key values on a stored item.

**Type parameter `T`:** Item type.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectEntry.cs#L11).

## ```Set``1```

<a id="api-a4014bafd1d19ea3"></a>
<!-- api: M:Inno.Core.Collections.IndexedObjectEntry`1.Set``1(Inno.Core.Collections.IndexedObjectKey{``0},``0) e4570d7cb26476209b67d9384ac82a9fd2826d907bdb92478558a166d2c67d9e -->

```csharp
public Inno.Core.Collections.IndexedObjectEntry<T> Inno.Core.Collections.IndexedObjectEntry<T>.Set<TKey>(Inno.Core.Collections.IndexedObjectKey<TKey> key, TKey value) where TKey : notnull
```

Sets a key value for the stored item.

**Type parameter `TKey`:** Key type.

**Parameter `key`:** Key handle.

**Parameter `value`:** Key value.

**Returns:** The same entry for chaining.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectEntry.cs#L45).

## `isValid`

<a id="api-f7f6c15d53d8dd2f"></a>
<!-- api: P:Inno.Core.Collections.IndexedObjectEntry`1.isValid b6f36f8c3d06051663d9966f01e4b5e7f8dd8d971bd926b09e438156ec783ef0 -->

```csharp
public bool Inno.Core.Collections.IndexedObjectEntry<T>.isValid { get; }
```

Returns true if the entry is still valid in its owning store.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectEntry.cs#L27).
