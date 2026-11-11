---
title: "BinaryAsset"
description: "Reference for BinaryAsset in Inno.Assets."
uid: api.inno.assets.1de82d2035da3df7
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `BinaryAsset`

This reference describes `BinaryAsset` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-93817e5e47b5f4ea) | Method |
| [`#ctor`](#api-6e3bdc5bb673c9d4) | Method |
| [`byteLength`](#api-1618349b96b8f904) | Property |

## Type declaration

<a id="api-1de82d2035da3df7"></a>
<!-- api: T:Inno.Assets.BinaryAsset 3ca86c40d1c60a79c734d9f091bd11d943bc23786e9d9ca74ec586f23e0011db -->

```csharp
public sealed class Inno.Assets.BinaryAsset : Inno.Assets.AssetObject
```

Describes an imported opaque binary payload.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L11).

## `#ctor`

<a id="api-93817e5e47b5f4ea"></a>
<!-- api: M:Inno.Assets.BinaryAsset.#ctor ec3a4d2677fb027871467b7ebd3a06921c6c859317e721d145432486ce443729 -->

```csharp
public Inno.Assets.BinaryAsset.BinaryAsset()
```

Creates an empty binary asset descriptor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L22).

## `#ctor`

<a id="api-6e3bdc5bb673c9d4"></a>
<!-- api: M:Inno.Assets.BinaryAsset.#ctor(System.Int32) 7da2cbf1b7ea44d348c9031e7a38e27a47e3caa393fcc9ecd3d1d7e31ccc5e31 -->

```csharp
public Inno.Assets.BinaryAsset.BinaryAsset(int byteLength)
```

Creates a binary asset descriptor with a byte length.

**Parameter `byteLength`:** Payload length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L32).

## `byteLength`

<a id="api-1618349b96b8f904"></a>
<!-- api: P:Inno.Assets.BinaryAsset.byteLength 91b193dcc37747b4b94f806120aabdb8086e19b06e7d84ad6698168cb38fdfac -->

```csharp
public int Inno.Assets.BinaryAsset.byteLength { get; private set; }
```

Gets the imported payload length in bytes.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/Types/BinaryAsset.cs#L17).
