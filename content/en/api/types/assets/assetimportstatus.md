---
title: "AssetImportStatus"
description: "Reference for AssetImportStatus in Inno.Assets."
uid: api.inno.assets.ac72d9da4b52c9f1
kind: api
owners:
  - Inno.Assets
apiSurface: source-clr
contracts:
  - project.inno-assets
---
# `AssetImportStatus`

This reference describes `AssetImportStatus` in `Inno.Assets`. Read the [shared contract](../../projects/inno-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Enum`.

## Members

| Member | Kind |
| --- | --- |
| [`Conflict`](#api-0ddd565ec73967a8) | Field |
| [`Failed`](#api-ca0e8dba923ceac9) | Field |
| [`Imported`](#api-88845ea590d68e74) | Field |
| [`Missing`](#api-dc3186b782a3b340) | Field |
| [`Pending`](#api-247610d4333b1178) | Field |
| [`Unsupported`](#api-3784bcb4175af0ba) | Field |

## Type declaration

<a id="api-ac72d9da4b52c9f1"></a>
<!-- api: T:Inno.Assets.AssetImportStatus a2d04175b72f29c1310f0d367f488f9ff7e7bd57b12cb4f94d7bc4c85f5ea73f -->

```csharp
public enum Inno.Assets.AssetImportStatus : int
```

Identifies the current source and import state of an asset.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetImportStatus.cs#L6).

## `Conflict`

<a id="api-0ddd565ec73967a8"></a>
<!-- api: F:Inno.Assets.AssetImportStatus.Conflict ca10000ad012cade2c2933bfd13a169f1787dcd4a23d13c4f4d34cece6acc761 -->

```csharp
Inno.Assets.AssetImportStatus.Conflict = 5
```

The source cannot be reconciled without resolving an identity conflict.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetImportStatus.cs#L36).

## `Failed`

<a id="api-ca0e8dba923ceac9"></a>
<!-- api: F:Inno.Assets.AssetImportStatus.Failed b4dc7a0e1755def7fa2412b275d8725b75cf863d32d54d0c7dfe80b0dd56b250 -->

```csharp
Inno.Assets.AssetImportStatus.Failed = 3
```

The latest import failed and diagnostics are available.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetImportStatus.cs#L26).

## `Imported`

<a id="api-88845ea590d68e74"></a>
<!-- api: F:Inno.Assets.AssetImportStatus.Imported c691f022fb6c7655ed54e679231721a1c426f1f6d99958ab689e117b32c6d923 -->

```csharp
Inno.Assets.AssetImportStatus.Imported = 2
```

A valid artifact is committed for the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetImportStatus.cs#L21).

## `Missing`

<a id="api-dc3186b782a3b340"></a>
<!-- api: F:Inno.Assets.AssetImportStatus.Missing 0a34f0a0c8a53048025e7ea3e186d7e929b867f8a5f61f3b7339d2ab17458f15 -->

```csharp
Inno.Assets.AssetImportStatus.Missing = 4
```

The source is unavailable while its persistent identity is retained.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetImportStatus.cs#L31).

## `Pending`

<a id="api-247610d4333b1178"></a>
<!-- api: F:Inno.Assets.AssetImportStatus.Pending 718fbbf3bdc219478fe2b06d68dc31b5880525f84a7de902cd4fd9319ca78f69 -->

```csharp
Inno.Assets.AssetImportStatus.Pending = 1
```

The source is waiting for import or commit.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetImportStatus.cs#L16).

## `Unsupported`

<a id="api-3784bcb4175af0ba"></a>
<!-- api: F:Inno.Assets.AssetImportStatus.Unsupported 75730946d2e677ec53151ccf8ab753f192455486f051bcacbea30ed36454a263 -->

```csharp
Inno.Assets.AssetImportStatus.Unsupported = 0
```

No importer currently accepts the source.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets/AssetImportStatus.cs#L11).
