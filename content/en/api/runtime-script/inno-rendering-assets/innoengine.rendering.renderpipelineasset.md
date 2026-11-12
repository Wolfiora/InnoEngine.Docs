---
title: "RenderPipelineAsset"
description: "Reference for RenderPipelineAsset in Inno.Rendering.Assets."
uid: api.inno.rendering.assets.runtime-script.b42377b9de8e062d
kind: api
owners:
  - Inno.Rendering.Assets
apiSurface: runtime-script
contracts:
  - project.inno-rendering-assets
  - manual.scripting.use-script-api
---
# `RenderPipelineAsset`

This reference describes `RenderPipelineAsset` in `Inno.Rendering.Assets`. Read the [shared contract](../../projects/inno-rendering-assets.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `InnoEngine.Assets.AssetObject`.

**Direct interfaces:** `InnoEngine.Serialization.ISerializable`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e972fce7c4383ddf) | Method |
| [`SetFeatures`](#api-378268388b7f8caf) | Method |
| [`features`](#api-ba294e953fbcbbce) | Property |
| [`pipelineState`](#api-d37a3d715c89698d) | Property |
| [`pipelineTypeId`](#api-4684397cc88cd004) | Property |

## Type declaration

<a id="api-b42377b9de8e062d"></a>
<!-- api: T:InnoEngine.Rendering.RenderPipelineAsset be6d4a19ad20cefe0a2eaf041726000ab8f8bbde03fef084b34eeb1e28d3aed2 -->

```csharp
public sealed class InnoEngine.Rendering.RenderPipelineAsset : InnoEngine.Assets.AssetObject, InnoEngine.Serialization.ISerializable
```

Selects a pipeline extension and ordered feature configuration without defining a render path.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L16).

## `#ctor`

<a id="api-e972fce7c4383ddf"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineAsset.#ctor 4f57d4e2622e5e9106c1a069bcbb6af1d9b0fa72d2bb3b5b4954702a93d941df -->

```csharp
public InnoEngine.Rendering.RenderPipelineAsset.RenderPipelineAsset()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L16).

## `SetFeatures`

<a id="api-378268388b7f8caf"></a>
<!-- api: M:InnoEngine.Rendering.RenderPipelineAsset.SetFeatures(System.Collections.Generic.IEnumerable{InnoEngine.Rendering.RenderFeatureConfiguration}) afe146636e15ea01a40ec4db447d5a399799c7c4c4eaa5872aa8cbc0b7f4e464 -->

```csharp
public void InnoEngine.Rendering.RenderPipelineAsset.SetFeatures(System.Collections.Generic.IEnumerable<InnoEngine.Rendering.RenderFeatureConfiguration> features)
```

Replaces ordered feature configurations.

**Parameter `features`:** Complete ordered feature configuration set.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L51).

## `features`

<a id="api-ba294e953fbcbbce"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineAsset.features 509d0130f6cdf8a5a5bdee6af62b7b89a4581f6258e39edd85e32828b49dd316 -->

```csharp
public InnoEngine.Rendering.RenderFeatureConfiguration[] InnoEngine.Rendering.RenderPipelineAsset.features { get; set; }
```

Gets ordered feature configurations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L35).

## `pipelineState`

<a id="api-d37a3d715c89698d"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineAsset.pipelineState 2b99ae7edc192158e1a89db9648bb3a0ee2a43920f747c1cdbcccb5ae5bff0ec -->

```csharp
public InnoEngine.Rendering.SerializedRenderExtensionState InnoEngine.Rendering.RenderPipelineAsset.pipelineState { get; set; }
```

Gets or sets reload-safe pipeline settings.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L29).

## `pipelineTypeId`

<a id="api-4684397cc88cd004"></a>
<!-- api: P:InnoEngine.Rendering.RenderPipelineAsset.pipelineTypeId 9dedc3936f2c4af8d5ed1f68311093c405a59972c42b983a3da3db44360a5c67 -->

```csharp
public string InnoEngine.Rendering.RenderPipelineAsset.pipelineTypeId { get; set; }
```

Gets or sets the globally stable pipeline extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering.Assets/Pipelines/RenderPipelineAsset.cs#L23).
