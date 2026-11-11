---
title: "AssetBuildProcessor"
description: "Reference for AssetBuildProcessor in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.eeefa1266594283b
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetBuildProcessor`

This reference describes `AssetBuildProcessor` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-61d784e9cd1907f7) | Method |
| [`definitionType`](#api-56655c0f96f3bcd9) | Property |
| [`processorId`](#api-580c6039afbb60d9) | Property |

## Type declaration

<a id="api-eeefa1266594283b"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetBuildProcessor 69a9ae18ed4ae7071286e28b465349301afb804f105b8f0f55661fcc2702f73b -->

```csharp
public abstract class Inno.Assets.Pipeline.AssetBuildProcessor
```

Defines an automatically discovered aggregate asset build processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L37).

## `#ctor`

<a id="api-61d784e9cd1907f7"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetBuildProcessor.#ctor 52f84202b366fe7d1393338cddd0f51be58874e95c26acbd2b6e4acd0f354925 -->

```csharp
protected Inno.Assets.Pipeline.AssetBuildProcessor.AssetBuildProcessor()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L37).

## `definitionType`

<a id="api-56655c0f96f3bcd9"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetBuildProcessor.definitionType f42d7ae380ace4b2c3b1757492f8f54b0918f48f4843de9341e77d8a6f863a4e -->

```csharp
public abstract System.Type Inno.Assets.Pipeline.AssetBuildProcessor.definitionType { get; }
```

Gets the definition type accepted by this processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L51).

## `processorId`

<a id="api-580c6039afbb60d9"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetBuildProcessor.processorId 16064d342ceef0547904a781d0beb2a48b49734a1f53f43e8d4bd2f9d60ade0f -->

```csharp
public string Inno.Assets.Pipeline.AssetBuildProcessor.processorId { get; }
```

Gets the stable processor identifier used by build cache keys.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L44).
