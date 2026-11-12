---
title: "AssetImporterAttribute"
description: "Reference for AssetImporterAttribute in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.editor-script.4cf20f148177dcbe
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: editor-script
contracts:
  - project.inno-assets-pipeline
  - manual.scripting.use-script-api
---
# `AssetImporterAttribute`

This reference describes `AssetImporterAttribute` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `editor-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-23f25917b582dc35) | Method |
| [`id`](#api-917717a8c4d8504d) | Property |

## Type declaration

<a id="api-4cf20f148177dcbe"></a>
<!-- api: T:InnoEditor.Assets.AssetImporterAttribute 6b23db084fd77ca73b3cc71d22a9f91d617e3c6cc2f3474e43a04b17eab73f81 -->

```csharp
public sealed class InnoEditor.Assets.AssetImporterAttribute : System.Attribute
```

Declares the immutable protocol identity of an automatically discovered asset importer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L15).

## `#ctor`

<a id="api-23f25917b582dc35"></a>
<!-- api: M:InnoEditor.Assets.AssetImporterAttribute.#ctor(System.String) f3161158090c6b3ba99cf62dde529b83cd8020d811e91a33a9e202c8b32fd4f3 -->

```csharp
public InnoEditor.Assets.AssetImporterAttribute.AssetImporterAttribute(string id)
```

Creates importer discovery metadata.

**Parameter `id`:** Globally stable importer protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L23).

## `id`

<a id="api-917717a8c4d8504d"></a>
<!-- api: P:InnoEditor.Assets.AssetImporterAttribute.id ed33495148decf38a97e6ce95c36c395b0ead1a59d1a796df42273e1e41751bd -->

```csharp
public string InnoEditor.Assets.AssetImporterAttribute.id { get; }
```

Gets the globally stable importer protocol identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/content/assets/Inno.Assets.Pipeline/Importing/AssetImporter.cs#L32).
