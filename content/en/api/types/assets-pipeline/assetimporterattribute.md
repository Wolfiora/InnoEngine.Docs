---
title: "AssetImporterAttribute"
description: "Reference for AssetImporterAttribute in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.499815ef7ebcdb8d
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetImporterAttribute`

This reference describes `AssetImporterAttribute` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-09f71a3933346fc7) | Method |
| [`id`](#api-c771e12d75ed25a4) | Property |

## Type declaration

<a id="api-499815ef7ebcdb8d"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetImporterAttribute cabb8c9351d96b4d939e6c7ce6f95a32987e5ae6c75d5385ea98d949959521c0 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetImporterAttribute : System.Attribute
```

Declares the immutable protocol identity of an automatically discovered asset importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L15).

## `#ctor`

<a id="api-09f71a3933346fc7"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetImporterAttribute.#ctor(System.String) b2b64b40c64cb343f02db261ddcf166408129e1601c976e5ea7d16245fc62f92 -->

```csharp
public Inno.Assets.Pipeline.AssetImporterAttribute.AssetImporterAttribute(string id)
```

Creates importer discovery metadata.

**Parameter `id`:** Globally stable importer protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L23).

## `id`

<a id="api-c771e12d75ed25a4"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetImporterAttribute.id f8e994c41e6459a4145d9684b29b8ebb7a803f11784268c12370b5ec830bf28e -->

```csharp
public string Inno.Assets.Pipeline.AssetImporterAttribute.id { get; }
```

Gets the globally stable importer protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L32).
