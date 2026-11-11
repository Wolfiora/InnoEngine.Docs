---
title: "RenderPipelineExtensionAttribute"
description: "Reference for RenderPipelineExtensionAttribute in Inno.Rendering.Runtime."
uid: api.inno.rendering.runtime.73bdc015fe7840f5
kind: api
owners:
  - Inno.Rendering.Runtime
apiSurface: source-clr
contracts:
  - project.inno-rendering-runtime
---
# `RenderPipelineExtensionAttribute`

This reference describes `RenderPipelineExtensionAttribute` in `Inno.Rendering.Runtime`. Read the [shared contract](../../../projects/inno-rendering-runtime.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `System.Attribute`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-e1be440c72df2fee) | Method |
| [`id`](#api-c6e6bd7b55add9f1) | Property |

## Type declaration

<a id="api-73bdc015fe7840f5"></a>
<!-- api: T:Inno.Rendering.Runtime.RenderPipelineExtensionAttribute f33fe00eb0b6869f07cd9e7c0f898fadb9c689cca607d256b5bb6893011e040c -->

```csharp
public sealed class Inno.Rendering.Runtime.RenderPipelineExtensionAttribute : System.Attribute
```

Marks a reloadable render pipeline implementation with a stable extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineExtensionAttribute.cs#L16).

## `#ctor`

<a id="api-e1be440c72df2fee"></a>
<!-- api: M:Inno.Rendering.Runtime.RenderPipelineExtensionAttribute.#ctor(System.String) dbd6c77e19e0eb229f16d1f206237b1e3fc583746e903fea5716192901ef07ea -->

```csharp
public Inno.Rendering.Runtime.RenderPipelineExtensionAttribute.RenderPipelineExtensionAttribute(string id)
```

Creates a pipeline extension declaration.

**Parameter `id`:** Globally stable pipeline extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineExtensionAttribute.cs#L24).

## `id`

<a id="api-c6e6bd7b55add9f1"></a>
<!-- api: P:Inno.Rendering.Runtime.RenderPipelineExtensionAttribute.id 2c9af5a58344150e86bc958b130b7581f469b176df3d90e23571ef7193dca57e -->

```csharp
public string Inno.Rendering.Runtime.RenderPipelineExtensionAttribute.id { get; }
```

Gets the globally stable pipeline extension identifier.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering.Runtime/Pipelines/RenderPipelineExtensionAttribute.cs#L33).
