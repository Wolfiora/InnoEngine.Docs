---
title: "AssetChange"
description: "Reference for AssetChange in Inno.Assets."
uid: api.inno.assets.93f8efe110f55952
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetChange`

This reference describes `AssetChange` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.ValueType`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4f769ec70baad8d3) | Method |
| [`assetPath`](#api-c67bae6df8d91846) | Property |
| [`kind`](#api-8a6debe9ad1afdac) | Property |
| [`persistentId`](#api-67348e2495037efa) | Property |
| [`previousAssetPath`](#api-c1508e53c0f67301) | Property |

## Type declaration

<a id="api-93f8efe110f55952"></a>
<!-- api: T:Inno.Assets.AssetChange 8dc0dd6da43dbab1b29e11734ea0b7809144b7f50a3490d73f5b5272291b39c7 -->

```csharp
public readonly struct Inno.Assets.AssetChange
```

Describes one committed asset database change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L8).

## `#ctor`

<a id="api-4f769ec70baad8d3"></a>
<!-- api: M:Inno.Assets.AssetChange.#ctor(Inno.Assets.AssetChangeKind,System.Guid,Inno.Assets.AssetPath,System.Nullable{Inno.Assets.AssetPath}) 05a4ee552ac89c1d1203eb4d4950fe6b5ed7eff3a0b500493e101204a1a3b30b -->

```csharp
public Inno.Assets.AssetChange.AssetChange(Inno.Assets.AssetChangeKind kind, System.Guid persistentId, Inno.Assets.AssetPath assetPath, Inno.Assets.AssetPath? previousAssetPath = null)
```

Creates an asset change descriptor.

**Parameter `kind`:** Committed change kind.

**Parameter `persistentId`:** Persistent identity affected by the change, or empty for a catalog-wide change.

**Parameter `assetPath`:** Current isolated path, or an invalid path for a catalog-wide change.

**Parameter `previousAssetPath`:** Previous isolated path for a move operation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L25).

## `assetPath`

<a id="api-c67bae6df8d91846"></a>
<!-- api: P:Inno.Assets.AssetChange.assetPath ca4e583699c9ca603cad9fd55faa774d1c5296e641e20fa268e2e199e30c3bc0 -->

```csharp
public Inno.Assets.AssetPath Inno.Assets.AssetChange.assetPath { get; }
```

Gets the current isolated source path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L50).

## `kind`

<a id="api-8a6debe9ad1afdac"></a>
<!-- api: P:Inno.Assets.AssetChange.kind feff2b8e95d786ba58ea8f9c69ef07a8838340f33bf5e43dbbd937ebedff6a83 -->

```csharp
public Inno.Assets.AssetChangeKind Inno.Assets.AssetChange.kind { get; }
```

Gets the change kind.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L40).

## `persistentId`

<a id="api-67348e2495037efa"></a>
<!-- api: P:Inno.Assets.AssetChange.persistentId 0a9f42ec390c5bc11f33b9be33687570bdb9af8116fecbe1552271e3939ac4b5 -->

```csharp
public System.Guid Inno.Assets.AssetChange.persistentId { get; }
```

Gets the persistent identity affected by the change.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L45).

## `previousAssetPath`

<a id="api-c1508e53c0f67301"></a>
<!-- api: P:Inno.Assets.AssetChange.previousAssetPath 59b6d837b744abf9b693d9ede6505f28b8652f58ac3becd7292d9c438640ac3f -->

```csharp
public Inno.Assets.AssetPath? Inno.Assets.AssetChange.previousAssetPath { get; }
```

Gets the previous isolated path for move operations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Changes/AssetChange.cs#L55).
