---
title: "RenderViewTransform"
description: "Reference for RenderViewTransform in Inno.Rendering."
uid: api.inno.rendering.runtime-script.8a1b8e85386b72bf
kind: api
owners:
  - Inno.Rendering
apiSurface: runtime-script
contracts:
  - project.inno-rendering
  - manual.scripting.use-script-api
---
# `RenderViewTransform`

This reference describes `RenderViewTransform` in `Inno.Rendering`. Read the [shared contract](../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `runtime-script`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Required caller contracts:** [Use the script API](../../../manual/scripting/use-script-api.md).

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-a1977da5e73353c3) | Method |
| [`projectionMatrix`](#api-c6fba1df61068b3b) | Property |
| [`viewMatrix`](#api-6fb555732ce0e7d2) | Property |

## Type declaration

<a id="api-8a1b8e85386b72bf"></a>
<!-- api: T:InnoEngine.Rendering.RenderViewTransform 9a98d65170baec3e2cf8e5f8f47b377d544c6a5a1132baea9f1c9a6face9ba5d -->

```csharp
public sealed class InnoEngine.Rendering.RenderViewTransform
```

Stores backend-ready column-major transform matrices for one programmable view.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L12).

## `#ctor`

<a id="api-a1977da5e73353c3"></a>
<!-- api: M:InnoEngine.Rendering.RenderViewTransform.#ctor(System.ReadOnlySpan{System.Single},System.ReadOnlySpan{System.Single}) 44afdc6855431226e606019729637afce364ef3cf3a07d962f7ce91d0743498c -->

```csharp
public InnoEngine.Rendering.RenderViewTransform.RenderViewTransform(System.ReadOnlySpan<float> viewMatrix, System.ReadOnlySpan<float> projectionMatrix)
```

Creates a raster view transform.

**Parameter `viewMatrix`:** Exactly sixteen column-major world-to-view values.

**Parameter `projectionMatrix`:** Exactly sixteen column-major projection values.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L26).

## `projectionMatrix`

<a id="api-c6fba1df61068b3b"></a>
<!-- api: P:InnoEngine.Rendering.RenderViewTransform.projectionMatrix 2d44681fa96c96b9ed13d4edee863f9e4f464209e37cb16e30808ab9a0ca28ba -->

```csharp
public System.ReadOnlyMemory<float> InnoEngine.Rendering.RenderViewTransform.projectionMatrix { get; }
```

Gets the immutable column-major projection matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L54).

## `viewMatrix`

<a id="api-6fb555732ce0e7d2"></a>
<!-- api: P:InnoEngine.Rendering.RenderViewTransform.viewMatrix 9afae14e692c040ece1b4dfeb73770c8584c8574df5faec6baab3a9b9f02f859 -->

```csharp
public System.ReadOnlyMemory<float> InnoEngine.Rendering.RenderViewTransform.viewMatrix { get; }
```

Gets the immutable column-major view matrix.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/6c03fa390ee9a15748fb7f754718e99127cbae02/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L49).
