---
title: "IAssetSampleSourceRewriter"
description: "Reference for IAssetSampleSourceRewriter in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.6afc39e342818763
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `IAssetSampleSourceRewriter`

This reference describes `IAssetSampleSourceRewriter` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`Transform`](#api-e439aaaac49dc21a) | Method |

## Type declaration

<a id="api-6afc39e342818763"></a>
<!-- api: T:Inno.Assets.Pipeline.IAssetSampleSourceRewriter cde053c15b44c21eb47dec62039f55d73129adb9f9136f264cf7589046b77203 -->

```csharp
public interface Inno.Assets.Pipeline.IAssetSampleSourceRewriter
```

Rewrites a source language in a private sample clone before source assets are published.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L117).

## `Transform`

<a id="api-e439aaaac49dc21a"></a>
<!-- api: M:Inno.Assets.Pipeline.IAssetSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext) e459b3a2cf053ba4e85f8b0188b800c2309aa672118818ef62a2e235435a068a -->

```csharp
void Inno.Assets.Pipeline.IAssetSampleSourceRewriter.Transform(Inno.Assets.Pipeline.AssetSampleTransformContext context)
```

Rewrites staged source files and registers any changed serialized type identities.

**Constraints:** Runs on a worker with a pinned extension generation. Access only transaction-owned files
and context data, observe cancellation, and do not access live Assets or Editor state.

**Parameter `context`:** The transaction-owned staged clone.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L129).
