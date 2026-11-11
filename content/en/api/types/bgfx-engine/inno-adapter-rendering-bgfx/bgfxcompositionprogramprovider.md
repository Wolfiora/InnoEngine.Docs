---
title: "BgfxCompositionProgramProvider"
description: "Reference for BgfxCompositionProgramProvider in Inno.Adapter.Rendering.Bgfx."
uid: api.inno.adapter.rendering.bgfx.20f3e88dced8c17a
kind: api
owners:
  - Inno.Adapter.Rendering.Bgfx
apiSurface: source-clr
contracts:
  - project.inno-adapter-rendering-bgfx
---
# `BgfxCompositionProgramProvider`

This reference describes `BgfxCompositionProgramProvider` in `Inno.Adapter.Rendering.Bgfx`. Read the [shared contract](../../../projects/inno-adapter-rendering-bgfx.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

**Direct interfaces:** `Inno.Rendering.IRenderLayerCompositionProgramProvider`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-5aa4d92c9acff699) | Method |
| [`CreateDescriptor`](#api-1230ca7f245588d9) | Method |
| [`CreateOutputTransferDescriptor`](#api-84811b97b2e66e1e) | Method |

## Type declaration

<a id="api-20f3e88dced8c17a"></a>
<!-- api: T:Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider 89350e0f2759f0a09901271bfddccb5f03cd294407db0fda295b43338e46ab55 -->

```csharp
public sealed class Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider : Inno.Rendering.IRenderLayerCompositionProgramProvider
```

Supplies the BGFX shader program used to composite model output layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxCompositionProgramProvider.cs#L12).

## `#ctor`

<a id="api-5aa4d92c9acff699"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider.#ctor 1d86c4e0de1e73035827832884bba48f5947fee15c5ad4780912123162e4b769 -->

```csharp
public Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider.BgfxCompositionProgramProvider()
```

Compiler-supplied declaration; initialization and lifetime follow the containing type.

[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxCompositionProgramProvider.cs#L12).

## `CreateDescriptor`

<a id="api-1230ca7f245588d9"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider.CreateDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout) b5890f677944a73509fdd905eb2f0582a5cbdffeb4cfa4918d87fb0225e86e62 -->

```csharp
public Inno.Rendering.GraphicsPipelineDescriptor Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider.CreateDescriptor(Inno.Rendering.GraphicsCapabilities capabilities, Inno.Rendering.RenderVertexLayout vertexLayout)
```

Loads the BGFX target program matching the active device renderer.

**Parameter `capabilities`:** The device capabilities whose backend identifies the target shader artifact.

**Parameter `vertexLayout`:** The fullscreen quad layout that the returned pipeline must accept.

**Returns:** A validated premultiplied-alpha pipeline descriptor for the target renderer.

**Throws `System.IO.InvalidDataException`:** The target shader artifact is missing or has an invalid texture binding.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxCompositionProgramProvider.cs#L31).

## `CreateOutputTransferDescriptor`

<a id="api-84811b97b2e66e1e"></a>
<!-- api: M:Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider.CreateOutputTransferDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout) 22474d423ec3438549cabcbe27111f9ee2acb9a5dc22b98ffda4379a38ef4de8 -->

```csharp
public Inno.Rendering.GraphicsPipelineDescriptor Inno.Adapter.Rendering.Bgfx.BgfxCompositionProgramProvider.CreateOutputTransferDescriptor(Inno.Rendering.GraphicsCapabilities capabilities, Inno.Rendering.RenderVertexLayout vertexLayout)
```

Loads the target program that encodes the completed linear composition for presentation.

**Parameter `capabilities`:** The active graphics backend used to select the compiled shader artifact.

**Parameter `vertexLayout`:** The fullscreen quad layout accepted by the output pipeline.

**Returns:** An opaque pipeline descriptor for the final linear-to-sRGB output transfer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/022c4917f784020905c41e09c524420e0c22d3d9/backends/Bgfx/runtime/Inno.Adapter.Rendering.Bgfx/BgfxCompositionProgramProvider.cs#L48).
