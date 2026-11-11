---
title: "AssetImportHealthSnapshot"
description: "Reference for AssetImportHealthSnapshot in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.139c77f8998e2657
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetImportHealthSnapshot`

This reference describes `AssetImportHealthSnapshot` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`empty`](#api-e63dbe05ae2a1796) | Property |

## Type declaration

<a id="api-139c77f8998e2657"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImportHealthSnapshot 3c315a49add861a0e2dd4b310b40d91ff2221ee34b58baf179f3894a9ccf5c29 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetImportHealthSnapshot
```

Represents an immutable observation of writable-source import failures at one point in time.

**Constraints:** The snapshot deliberately keeps importer fingerprints private to the Asset Pipeline. Callers can
compare snapshots without depending on catalog records, importer implementation names, or storage
details.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L14).

## `empty`

<a id="api-e63dbe05ae2a1796"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImportHealthSnapshot.empty 99d24d742d97ca95cc68dc5c4604a7a1ee04e19fb9c5e887af34447c7e2e02fd -->

```csharp
public static Inno.Assets.Pipeline.AssetImportHealthSnapshot Inno.Assets.Pipeline.AssetImportHealthSnapshot.empty { get; }
```

Gets the immutable snapshot used when no Asset Pipeline generation is active.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImportHealthSnapshot.cs#L32).
