---
title: "AssetBuildProcessorAttribute"
description: "Reference for AssetBuildProcessorAttribute in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.0f19a07fcdbb75be
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetBuildProcessorAttribute`

This reference describes `AssetBuildProcessorAttribute` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-3bc0d96232d7be77) | Method |
| [`id`](#api-648c92ae33f5774b) | Property |

## Type declaration

<a id="api-0f19a07fcdbb75be"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetBuildProcessorAttribute 61aaa2d41f42bcaefadaca9a47d5a1b737fd383564453c005f1559c7cbf163f9 -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetBuildProcessorAttribute : System.Attribute
```

Declares the immutable cache protocol identity of an automatically discovered asset build processor.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L14).

## `#ctor`

<a id="api-3bc0d96232d7be77"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetBuildProcessorAttribute.#ctor(System.String) 7f4bd50ebbe376d439bd567872b976c170f850a5b095a68364ee433cf939a512 -->

```csharp
public Inno.Assets.Pipeline.AssetBuildProcessorAttribute.AssetBuildProcessorAttribute(string id)
```

Creates build-processor discovery metadata.

**Parameter `id`:** Globally stable build processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L22).

## `id`

<a id="api-648c92ae33f5774b"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetBuildProcessorAttribute.id faea03439348b861605c64cf3469b7d032f7450777f6ec29a4b90703615acd41 -->

```csharp
public string Inno.Assets.Pipeline.AssetBuildProcessorAttribute.id { get; }
```

Gets the globally stable build processor identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Importing/Building/AssetBuildProcessor.cs#L31).
