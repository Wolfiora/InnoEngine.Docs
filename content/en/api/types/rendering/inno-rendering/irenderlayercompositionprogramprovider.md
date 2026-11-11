---
title: "IRenderLayerCompositionProgramProvider"
description: "Reference for IRenderLayerCompositionProgramProvider in Inno.Rendering."
uid: api.inno.rendering.0ac37b19a1ba602c
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `IRenderLayerCompositionProgramProvider`

This reference describes `IRenderLayerCompositionProgramProvider` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

## Members

| Member | Kind |
| --- | --- |
| [`CreateDescriptor`](#api-311c36ed6bf13ee2) | Method |
| [`CreateOutputTransferDescriptor`](#api-e3391fa8acb5df5e) | Method |

## Type declaration

<a id="api-0ac37b19a1ba602c"></a>
<!-- api: T:Inno.Rendering.IRenderLayerCompositionProgramProvider 9a24592766178bccba12b882344ba7461bd522a5a3a488e2e711fed26397b2cd -->

```csharp
public interface Inno.Rendering.IRenderLayerCompositionProgramProvider
```

Supplies a backend-specific graphics program for compositing ordered render layers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderLayerCompositionProgramProvider.cs#L6).

## `CreateDescriptor`

<a id="api-311c36ed6bf13ee2"></a>
<!-- api: M:Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout) 8fecb15d7d3ff4a1ee4b45004f472881d1a79fc68ad1ff17c0ec4290d0b032d1 -->

```csharp
Inno.Rendering.GraphicsPipelineDescriptor Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateDescriptor(Inno.Rendering.GraphicsCapabilities capabilities, Inno.Rendering.RenderVertexLayout vertexLayout)
```

Creates a pipeline descriptor compatible with the supplied fullscreen vertex layout.

**Parameter `capabilities`:** Capabilities of the device that will own the pipeline.

**Parameter `vertexLayout`:** Layout of the fullscreen quad submitted by the runtime.

**Returns:** A pipeline descriptor that samples a texture named `s_tex` with premultiplied alpha.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderLayerCompositionProgramProvider.cs#L20).

## `CreateOutputTransferDescriptor`

<a id="api-e3391fa8acb5df5e"></a>
<!-- api: M:Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateOutputTransferDescriptor(Inno.Rendering.GraphicsCapabilities,Inno.Rendering.RenderVertexLayout) fd63344120ee55a08c565fe8eba11785729556df317b3aacc9778202baa4757c -->

```csharp
Inno.Rendering.GraphicsPipelineDescriptor Inno.Rendering.IRenderLayerCompositionProgramProvider.CreateOutputTransferDescriptor(Inno.Rendering.GraphicsCapabilities capabilities, Inno.Rendering.RenderVertexLayout vertexLayout)
```

Creates the final transfer pipeline for a presentation target without automatic sRGB encoding.

**Parameter `capabilities`:** Capabilities of the device that will own the pipeline.

**Parameter `vertexLayout`:** Layout of the fullscreen quad submitted by the runtime.

**Returns:** An opaque pipeline descriptor that encodes premultiplied linear color to sRGB.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Device/IRenderLayerCompositionProgramProvider.cs#L37).
