---
title: "IndexedObjectKeyFlags"
description: "Reference for IndexedObjectKeyFlags in Inno.Core.Collections."
uid: api.inno.core.collections.57df28ccadb834dd
kind: api
owners:
  - Inno.Core.Collections
apiSurface: source-clr
contracts:
  - project.inno-core-collections#graph-and-store-contract
---
# `IndexedObjectKeyFlags`

This reference describes `IndexedObjectKeyFlags` in `Inno.Core.Collections`. Read the [shared contract](../../projects/inno-core-collections.md#graph-and-store-contract) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Ordered`](#api-0efdc181eed56586) | Field |
| [`Unique`](#api-6984ff7b843a6871) | Field |
| [`Unordered`](#api-7d551bf0f39a901d) | Field |

## Type declaration

<a id="api-57df28ccadb834dd"></a>
<!-- api: T:Inno.Core.Collections.IndexedObjectKeyFlags 290b2b8e1dd5d39031f351811a927797ce4f9f9c1a1c6a498c0e9f60b00ba72f -->

```csharp
public enum Inno.Core.Collections.IndexedObjectKeyFlags : int
```

Defines indexing and cardinality behavior for an object-store key.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectKey.cs#L10).

## `Ordered`

<a id="api-0efdc181eed56586"></a>
<!-- api: F:Inno.Core.Collections.IndexedObjectKeyFlags.Ordered 0fe8012fb66552757d314a92b77bfe8aaed01849f65cb8ea570c7ae4faeadb30 -->

```csharp
Inno.Core.Collections.IndexedObjectKeyFlags.Ordered = 2
```

Maintains key ordering using the supplied comparer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectKey.cs#L19).

## `Unique`

<a id="api-6984ff7b843a6871"></a>
<!-- api: F:Inno.Core.Collections.IndexedObjectKeyFlags.Unique aaa27a1036311df42222f3b6ea1f33631e3ec394f735eef16333b760c9a58f43 -->

```csharp
Inno.Core.Collections.IndexedObjectKeyFlags.Unique = 4
```

Allows at most one item for each key value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectKey.cs#L23).

## `Unordered`

<a id="api-7d551bf0f39a901d"></a>
<!-- api: F:Inno.Core.Collections.IndexedObjectKeyFlags.Unordered caba9766146107606b167ddc121efdf8af2c758795232f4920d685f1f18afedc -->

```csharp
Inno.Core.Collections.IndexedObjectKeyFlags.Unordered = 1
```

Uses hash-based lookup without key ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/330aecafb5ea35864dd6bec8bd953d00bee6a28c/src/foundation/core/Inno.Core.Collections/IndexedObjectStore/IndexedObjectKey.cs#L15).
