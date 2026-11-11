---
title: "RenderModelOutput"
description: "Reference for RenderModelOutput in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.ad95a30e6bdacf91
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderModelOutput`

This reference describes `RenderModelOutput` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-6e4bb7287baf97d3) | Method |
| [`data`](#api-cff537101f08926d) | Property |
| [`name`](#api-82a5c3678a4f2e1b) | Property |
| [`pipeline`](#api-a14d0745da81a660) | Property |
| [`targetFormat`](#api-aafb30ea379cdc44) | Property |

## Type declaration

<a id="api-ad95a30e6bdacf91"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderModelOutput e7524c9b5276ec954a88ca6bf46302d06ed156187eec8520a3beac1075982528 -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderModelOutput
```

Gets one model's prepared pipeline data for a host-owned target.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L15).

## `#ctor`

<a id="api-6e4bb7287baf97d3"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderModelOutput.#ctor(System.String,Inno.Rendering.Assets.RenderPipelineAsset,Inno.Rendering.Runtime.RenderFrameData,Inno.Rendering.RenderTextureFormat) de80305b38a653c56ea8c721db9f07c4321355e6f1df6f807379394ad66975a0 -->

```csharp
public Inno.Rendering.Runtime.RenderModelOutput.RenderModelOutput(string name, Inno.Rendering.Assets.RenderPipelineAsset pipeline, Inno.Rendering.Runtime.RenderFrameData data, Inno.Rendering.RenderTextureFormat targetFormat = Inno.Rendering.RenderTextureFormat.RGBA8Srgb)
```

Creates prepared model output.

**Parameter `name`:** Frame-local diagnostic name.

**Parameter `pipeline`:** Exact model pipeline.

**Parameter `data`:** Immutable model frame data.

**Parameter `targetFormat`:** Required color target format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L32).

## `data`

<a id="api-cff537101f08926d"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderModelOutput.data 8227c359ee0345c64d45e72fdf0da6fa18709a57a1d28aad08eaed6f349e50e6 -->

```csharp
public Inno.Rendering.Runtime.RenderFrameData Inno.Rendering.Runtime.RenderModelOutput.data { get; }
```

Gets model frame data.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L56).

## `name`

<a id="api-82a5c3678a4f2e1b"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderModelOutput.name 859deddb802e83f0676255452b9e087fa471820c93d5a7aff8e7ef68294bfef2 -->

```csharp
public string Inno.Rendering.Runtime.RenderModelOutput.name { get; }
```

Gets the diagnostic name.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L48).

## `pipeline`

<a id="api-a14d0745da81a660"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderModelOutput.pipeline da9287d4c58944acea6d5fbbf449cb5c131256274040b6cb658e315f3172b35d -->

```csharp
public Inno.Rendering.Assets.RenderPipelineAsset Inno.Rendering.Runtime.RenderModelOutput.pipeline { get; }
```

Gets the model's pipeline.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L52).

## `targetFormat`

<a id="api-aafb30ea379cdc44"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderModelOutput.targetFormat 24e94c9bba4f6e074644a5dda22aae40f3e3aee3a48ade72251f32929f26c35d -->

```csharp
public Inno.Rendering.RenderTextureFormat Inno.Rendering.Runtime.RenderModelOutput.targetFormat { get; }
```

Gets required target format.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Models/RenderModelOutput.cs#L60).
