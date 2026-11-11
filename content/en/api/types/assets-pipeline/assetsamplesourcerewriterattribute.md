---
title: "AssetSampleSourceRewriterAttribute"
description: "Reference for AssetSampleSourceRewriterAttribute in Inno.Assets.Pipeline."
uid: api.inno.assets.pipeline.beef6d71b227d69b
kind: api
owners:
  - Inno.Assets.Pipeline
apiSurface: source-clr
contracts:
  - project.inno-assets-pipeline
---
# `AssetSampleSourceRewriterAttribute`

This reference describes `AssetSampleSourceRewriterAttribute` in `Inno.Assets.Pipeline`. Read the [shared contract](../../projects/inno-assets-pipeline.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-37232be7f4460b7b) | Method |
| [`id`](#api-a06c535cf81f8716) | Property |

## Type declaration

<a id="api-beef6d71b227d69b"></a>
<!-- api: T:Inno.Assets.Pipeline.AssetSampleSourceRewriterAttribute bd0fca7c1217ce8efe038907146418a1eebdb4884f3a57b2224538fd3d508adc -->

```csharp
public sealed class Inno.Assets.Pipeline.AssetSampleSourceRewriterAttribute : System.Attribute
```

Registers a source-language sample transformer through the reloadable type catalog.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L136).

## `#ctor`

<a id="api-37232be7f4460b7b"></a>
<!-- api: M:Inno.Assets.Pipeline.AssetSampleSourceRewriterAttribute.#ctor(System.String) e5c7d21b494ef752593756edcf3b60ad61b8a82723e203b7afc96504dc1c516d -->

```csharp
public Inno.Assets.Pipeline.AssetSampleSourceRewriterAttribute.AssetSampleSourceRewriterAttribute(string id)
```

Creates one ordered source-language transformer declaration.

**Parameter `id`:** Stable extension identity used for diagnostics and ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L144).

## `id`

<a id="api-a06c535cf81f8716"></a>
<!-- api: P:Inno.Assets.Pipeline.AssetSampleSourceRewriterAttribute.id 52ffcc003cf110dfadc7094dc1039de1ccc80918df60cd9d4275a95ddad5a3bd -->

```csharp
public string Inno.Assets.Pipeline.AssetSampleSourceRewriterAttribute.id { get; }
```

Gets the stable extension identity.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/0150bd55a5bd54fe4e9c06c2053fef5f99006755/src/content/assets/Inno.Assets.Pipeline/Sources/AssetSampleSourceRewriter.cs#L153).
