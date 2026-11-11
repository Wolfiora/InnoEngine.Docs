---
title: "RenderPipelineAsset"
description: "Reference for RenderPipelineAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.fbedbcde50eb1263
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: source-clr
contracts:
  - project.inno-rendering-assets
---
# `RenderPipelineAsset`

This reference describes `RenderPipelineAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `Inno.Assets.AssetObject`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-4e7b9bb9a39ec53e) | Method |
| [`SetFeatures`](#api-4f43b8b6bdc8d41a) | Method |
| [`features`](#api-6158ae0f9c80f8cf) | Property |
| [`pipelineState`](#api-b75de605c6a94013) | Property |
| [`pipelineTypeId`](#api-a962969e3c10e175) | Property |

## Type declaration

<a id="api-fbedbcde50eb1263"></a>
<!-- api: T:Inno.Rendering.Assets.RenderPipelineAsset 34eb825d23df06915280ae1158b75ac23c60c6201fa23710a480e07f64026f4d -->

```csharp
public sealed class Inno.Rendering.Assets.RenderPipelineAsset : Inno.Assets.AssetObject
```

Selects a pipeline extension and ordered feature configuration without defining a render path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L16).

## `#ctor`

<a id="api-4e7b9bb9a39ec53e"></a>
<!-- api: M:Inno.Rendering.Assets.RenderPipelineAsset.#ctor 17688ac825bd8aab3847ff5765c6f865baa6e082051a0b3866759ac258cd5bd0 -->

```csharp
public Inno.Rendering.Assets.RenderPipelineAsset.RenderPipelineAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L16).

## `SetFeatures`

<a id="api-4f43b8b6bdc8d41a"></a>
<!-- api: M:Inno.Rendering.Assets.RenderPipelineAsset.SetFeatures(System.Collections.Generic.IEnumerable{Inno.Rendering.Assets.RenderFeatureConfiguration}) 0f93f42dccc3a7415556c9b7ebfa2a23922dbf38c3bcd10634278dc5f0ac9bef -->

```csharp
public void Inno.Rendering.Assets.RenderPipelineAsset.SetFeatures(System.Collections.Generic.IEnumerable<Inno.Rendering.Assets.RenderFeatureConfiguration> features)
```

Replaces ordered feature configurations.

**Parameter `features`:** Complete ordered feature configuration set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L51).

## `features`

<a id="api-6158ae0f9c80f8cf"></a>
<!-- api: P:Inno.Rendering.Assets.RenderPipelineAsset.features 43a31936e3b28170d75f9f8e8e88105f11bd87f69805dce4fcb68d24dc284c3b -->

```csharp
public Inno.Rendering.Assets.RenderFeatureConfiguration[] Inno.Rendering.Assets.RenderPipelineAsset.features { get; set; }
```

Gets ordered feature configurations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L35).

## `pipelineState`

<a id="api-b75de605c6a94013"></a>
<!-- api: P:Inno.Rendering.Assets.RenderPipelineAsset.pipelineState d628cd7a91cb0c3997553f11790cd69c2e8a87d37a434ce6d7bec44e5be4e2c6 -->

```csharp
public Inno.Rendering.Assets.SerializedRenderExtensionState Inno.Rendering.Assets.RenderPipelineAsset.pipelineState { get; set; }
```

Gets or sets reload-safe pipeline settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L29).

## `pipelineTypeId`

<a id="api-a962969e3c10e175"></a>
<!-- api: P:Inno.Rendering.Assets.RenderPipelineAsset.pipelineTypeId 2c8588ee88f1eb982168e0cbe7904b9b66a9d1dc679e48ed6962f21f943d5b90 -->

```csharp
public string Inno.Rendering.Assets.RenderPipelineAsset.pipelineTypeId { get; set; }
```

Gets or sets the globally stable pipeline extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L23).
