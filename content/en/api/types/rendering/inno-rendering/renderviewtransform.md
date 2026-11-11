---
title: "RenderViewTransform"
description: "Reference for RenderViewTransform in Inno.Rendering."
uid: api.inno.rendering.87ee9bcf4541bf10
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderViewTransform`

This reference describes `RenderViewTransform` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-544004cc9a32ff9b) | Method |
| [`projectionMatrix`](#api-93e3646f4ef9e2da) | Property |
| [`viewMatrix`](#api-7e30c77edacbd4b6) | Property |

## Type declaration

<a id="api-87ee9bcf4541bf10"></a>
<!-- api: T:Inno.Rendering.RenderViewTransform 365123e51ea90a4d9a60c451c8029057ec89ce8208644b2e6ded703d21fee26c -->

```csharp
public sealed class Inno.Rendering.RenderViewTransform
```

Stores backend-ready column-major transform matrices for one programmable view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L12).

## `#ctor`

<a id="api-544004cc9a32ff9b"></a>
<!-- api: M:Inno.Rendering.RenderViewTransform.#ctor(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single}) d37fec825f4a14ca83472040d9608641eb02357b65fa18bc4521e57835bceb75 -->

```csharp
public Inno.Rendering.RenderViewTransform.RenderViewTransform(System.ReadOnlySpan<float> viewMatrix, System.ReadOnlySpan<float> projectionMatrix)
```

Creates a raster view transform.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L26).

## `projectionMatrix`

<a id="api-93e3646f4ef9e2da"></a>
<!-- api: P:Inno.Rendering.RenderViewTransform.projectionMatrix e82de85babbcaa8b63b68142d0beb277647c717a801844934b645c15de05e7f9 -->

```csharp
public System.ReadOnlyMemory<float> Inno.Rendering.RenderViewTransform.projectionMatrix { get; }
```

Gets the immutable column-major projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L54).

## `viewMatrix`

<a id="api-7e30c77edacbd4b6"></a>
<!-- api: P:Inno.Rendering.RenderViewTransform.viewMatrix f4b22df6af04460c056e2419ee39df95a46f523ad4c574c2b439a34d35a04f0d -->

```csharp
public System.ReadOnlyMemory<float> Inno.Rendering.RenderViewTransform.viewMatrix { get; }
```

Gets the immutable column-major view matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L49).
