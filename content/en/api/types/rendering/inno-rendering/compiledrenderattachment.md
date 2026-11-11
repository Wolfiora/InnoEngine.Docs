---
title: "CompiledRenderAttachment"
description: "Reference for CompiledRenderAttachment in Inno.Rendering."
uid: api.inno.rendering.13dbca035df09e04
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `CompiledRenderAttachment`

This reference describes `CompiledRenderAttachment` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`arrayLayer`](#api-ed5f5947bd756839) | Property |
| [`clearColor`](#api-a6d8ee7d94cd60ae) | Property |
| [`clearDepth`](#api-1c1f9dc546b5184a) | Property |
| [`clearStencil`](#api-f8d9aec0e5bf73f9) | Property |
| [`isDepth`](#api-7dfc0075b93a49c2) | Property |
| [`loadAction`](#api-21d8dc84c9dc30a1) | Property |
| [`mipLevel`](#api-e018a1101eb788cf) | Property |
| [`slot`](#api-532998dc7f536551) | Property |
| [`storeAction`](#api-753de37e498e4066) | Property |
| [`texture`](#api-8c8de1157ffc8f03) | Property |

## Type declaration

<a id="api-13dbca035df09e04"></a>
<!-- api: T:Inno.Rendering.CompiledRenderAttachment 8d8b5e99354188dd216ff34b210b939e8857b8d619af551de7fb2ff6b55ca8be -->

```csharp
public sealed class Inno.Rendering.CompiledRenderAttachment
```

Describes one compiled raster attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L164).

## `arrayLayer`

<a id="api-ed5f5947bd756839"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.arrayLayer e2a0cbe8c5dff99fdbf00ce339352ae8382c42c5a2016ed8853102afe937cc88 -->

```csharp
public int Inno.Rendering.CompiledRenderAttachment.arrayLayer { get; }
```

Gets the attached texture-array layer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L203).

## `clearColor`

<a id="api-a6d8ee7d94cd60ae"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.clearColor 44ff3496437ab3d81be9959236d0668536a8dba60a7dd8843491e935e94fd42b -->

```csharp
public Inno.Rendering.RenderClearColor Inno.Rendering.CompiledRenderAttachment.clearColor { get; }
```

Gets the linear color clear value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L218).

## `clearDepth`

<a id="api-1c1f9dc546b5184a"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.clearDepth 090888b6c186047cbca31ababe2d434751f2e3374c6871afd890a4317a9991bf -->

```csharp
public float Inno.Rendering.CompiledRenderAttachment.clearDepth { get; }
```

Gets the depth clear value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L223).

## `clearStencil`

<a id="api-f8d9aec0e5bf73f9"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.clearStencil ff51f4f2b13bc550fe030e29f7eae3adca64fdb5968d7b92a19fea0799d83c22 -->

```csharp
public byte Inno.Rendering.CompiledRenderAttachment.clearStencil { get; }
```

Gets the stencil clear value.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L228).

## `isDepth`

<a id="api-7dfc0075b93a49c2"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.isDepth 49fff694d6b0d2780f29d185428d4fc188486d0345ec0a535e060a5cef269657 -->

```csharp
public bool Inno.Rendering.CompiledRenderAttachment.isDepth { get; }
```

Gets whether this is a depth or depth-stencil attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L193).

## `loadAction`

<a id="api-21d8dc84c9dc30a1"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.loadAction 2bbcd31fd33bdf1ed2d89fda0d0bac8481da832d501b8c74d0ac513603ee6ae8 -->

```csharp
public Inno.Rendering.RenderLoadAction Inno.Rendering.CompiledRenderAttachment.loadAction { get; }
```

Gets initial content behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L208).

## `mipLevel`

<a id="api-e018a1101eb788cf"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.mipLevel 9ed3c2921d88588a5791a79ca577c72e6f16a262fc19962a91798222abdcd5d1 -->

```csharp
public int Inno.Rendering.CompiledRenderAttachment.mipLevel { get; }
```

Gets the attached mip level.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L198).

## `slot`

<a id="api-532998dc7f536551"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.slot 53470e42464e815d89abcc80dafd6219f64ecb53e73a0b6db74d01b1869bf526 -->

```csharp
public int Inno.Rendering.CompiledRenderAttachment.slot { get; }
```

Gets the zero-based color slot, or zero for a depth attachment.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L188).

## `storeAction`

<a id="api-753de37e498e4066"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.storeAction 57cfd6d334909fc65d6bed12e93471110717cd3531101d0da03a2a5caac37931 -->

```csharp
public Inno.Rendering.RenderStoreAction Inno.Rendering.CompiledRenderAttachment.storeAction { get; }
```

Gets final content behavior.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L213).

## `texture`

<a id="api-8c8de1157ffc8f03"></a>
<!-- api: P:Inno.Rendering.CompiledRenderAttachment.texture 2e036b8c1425f49fb40c531bcf9cca234e027af3d42561481d79de4e307568f5 -->

```csharp
public Inno.Rendering.RenderTextureHandle Inno.Rendering.CompiledRenderAttachment.texture { get; }
```

Gets the attached graph texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/CompiledRenderGraph.cs#L183).
