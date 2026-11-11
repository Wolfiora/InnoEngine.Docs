---
title: "RenderGraphBuilder"
description: "Reference for RenderGraphBuilder in Inno.Rendering."
uid: api.inno.rendering.1a322b3600bde741
kind: api
owners:
  - Inno.Rendering
apiSurface: source-clr
contracts:
  - project.inno-rendering
---
# `RenderGraphBuilder`

This reference describes `RenderGraphBuilder` in `Inno.Rendering`. Read the [shared contract](../../../projects/inno-rendering.md) for its ownership, availability and lifecycle boundaries.

**Source context:** `source-clr`, configuration `Debug`. Declaration extraction is separate from source execution and script-projection certification.

**Base type:** `object`.

## Members

| Member | Kind |
| --- | --- |
| [`#ctor`](#api-f344cb66049760de) | Method |
| [```AddComputePass``1```](#api-aa52ac1517d7d242) | Method |
| [```AddCopyPass``1```](#api-722a2d9049bb3e81) | Method |
| [```AddRasterPass``1```](#api-c2232b642ae43ab9) | Method |
| [`BeginMutationScope`](#api-d6fdcc4749e86b5b) | Method |
| [`BeginNameScope`](#api-67433ec2a8e54886) | Method |
| [`Compile`](#api-442a048ce188ef9f) | Method |
| [`CreateBuffer`](#api-8e7473b61a1195f4) | Method |
| [`CreateTexture`](#api-bdb163637d0c1c50) | Method |
| [`ImportBuffer`](#api-cac9e54107aaf47b) | Method |
| [`ImportTexture`](#api-61419d6c51414f46) | Method |
| [`MarkOutput`](#api-fef051de37d58143) | Method |
| [`MarkOutput`](#api-e0a37552a6d44069) | Method |
| [`Validate`](#api-5f267f393ea513fa) | Method |

## Type declaration

<a id="api-1a322b3600bde741"></a>
<!-- api: T:Inno.Rendering.RenderGraphBuilder 619fd095b19a8bad7fa9a809198c967688fd7992162dee6b2f499c51a1b9087b -->

```csharp
public sealed class Inno.Rendering.RenderGraphBuilder
```

Builds one generation-scoped render graph from explicit passes and resources.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L11).

## `#ctor`

<a id="api-f344cb66049760de"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.#ctor(System.UInt32,Inno.Rendering.GraphicsCapabilities) dc018db8963bc4ca878138e43ff6648d4544ab0f17e6152b5a252461dede2791 -->

```csharp
public Inno.Rendering.RenderGraphBuilder.RenderGraphBuilder(uint generation, Inno.Rendering.GraphicsCapabilities capabilities)
```

Creates a render graph builder for one frame generation.

**Parameter `generation`:** Non-zero frame-scoped generation.

**Parameter `capabilities`:** Device capabilities used during validation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L40).

## ```AddComputePass``1```

<a id="api-aa52ac1517d7d242"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.AddComputePass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0}) 4913a33cf6bcd63cf2240f4da9cc9eb39325808df292b55b79b5422e7dcd43b2 -->

```csharp
public Inno.Rendering.ComputePassBuilder Inno.Rendering.RenderGraphBuilder.AddComputePass<TPassData>(string name, Inno.Rendering.RenderPhaseId phase, TPassData passData, Inno.Rendering.RenderPassExecute<TPassData> execute) where TPassData : notnull
```

Adds a frame-scoped compute pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for compute resources and ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L278).

## ```AddCopyPass``1```

<a id="api-722a2d9049bb3e81"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.AddCopyPass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0}) 2404f08c93a6a3bd9862525a7429e5396f5cf16b2bed1e8b9f05f17062288d5f -->

```csharp
public Inno.Rendering.CopyPassBuilder Inno.Rendering.RenderGraphBuilder.AddCopyPass<TPassData>(string name, Inno.Rendering.RenderPhaseId phase, TPassData passData, Inno.Rendering.RenderPassExecute<TPassData> execute) where TPassData : notnull
```

Adds a frame-scoped resource copy pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for copy resources and ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L308).

## ```AddRasterPass``1```

<a id="api-c2232b642ae43ab9"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.AddRasterPass``1(System.String,Inno.Rendering.RenderPhaseId,``0,Inno.Rendering.RenderPassExecute{``0}) 5fd22616af8327f179cd4bbd510a0c8743ce9d4612e966e5f5a1abe88e0c7655 -->

```csharp
public Inno.Rendering.RasterPassBuilder Inno.Rendering.RenderGraphBuilder.AddRasterPass<TPassData>(string name, Inno.Rendering.RenderPhaseId phase, TPassData passData, Inno.Rendering.RenderPassExecute<TPassData> execute) where TPassData : notnull
```

Adds a frame-scoped raster pass.

**Type parameter `TPassData`:** Pass payload type.

**Parameter `name`:** Unique diagnostic name.

**Parameter `phase`:** Open render phase identifier.

**Parameter `passData`:** Payload that lives only until this graph executes.

**Parameter `execute`:** Command recording callback.

**Returns:** A builder for raster resources, attachments and ordering.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L248).

## `BeginMutationScope`

<a id="api-d6fdcc4749e86b5b"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.BeginMutationScope c96467ff29a2c371fa8a294ba222ecec9630933e5836716ee98c648bd5def88e -->

```csharp
public Inno.Rendering.RenderGraphMutationScope Inno.Rendering.RenderGraphBuilder.BeginMutationScope()
```

Begins an isolated graph mutation that rolls back every added pass and resource unless committed.

**Returns:** A mutation scope used by reloadable features and other failure-isolated producers.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L198).

## `BeginNameScope`

<a id="api-67433ec2a8e54886"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.BeginNameScope(System.String) bc9f54dfa0f49201b214b4be8caf6d1c9204fc7d95bca679178b3cdcbc376f71 -->

```csharp
public Inno.Rendering.RenderGraphNameScope Inno.Rendering.RenderGraphBuilder.BeginNameScope(string name)
```

Prefixes pass and resource diagnostic names until the returned scope is disposed.

**Parameter `name`:** Non-empty scope segment.

**Returns:** A disposable name scope that must be closed in nesting order.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L218).

## `Compile`

<a id="api-442a048ce188ef9f"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.Compile c7cea4b28dbd30839730195d91d5e3ded298bcd20eaf61d2f7fd3191081c929d -->

```csharp
public Inno.Rendering.RenderGraphCompileResult Inno.Rendering.RenderGraphBuilder.Compile()
```

Validates, culls and schedules this graph exactly once.

**Returns:** A compilation result containing either an executable graph or diagnostics.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L324).

## `CreateBuffer`

<a id="api-8e7473b61a1195f4"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.CreateBuffer(System.String,Inno.Rendering.RenderBufferDescriptor) a4ad62de43346a3f255aa616668fc3be34207fa04cf7e9899cb100161845b97e -->

```csharp
public Inno.Rendering.RenderBufferHandle Inno.Rendering.RenderGraphBuilder.CreateBuffer(string name, Inno.Rendering.RenderBufferDescriptor descriptor)
```

Creates a transient buffer eligible for lifetime aliasing.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `descriptor`:** Buffer requirements.

**Returns:** A handle valid only for this graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L123).

## `CreateTexture`

<a id="api-bdb163637d0c1c50"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.CreateTexture(System.String,Inno.Rendering.RenderTextureDescriptor) f7d9a2d6787278c28ef0850b798999944da8d49266b2ec5562ad74b375778ce0 -->

```csharp
public Inno.Rendering.RenderTextureHandle Inno.Rendering.RenderGraphBuilder.CreateTexture(string name, Inno.Rendering.RenderTextureDescriptor descriptor)
```

Creates a transient texture eligible for lifetime aliasing.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `descriptor`:** Texture requirements.

**Returns:** A handle valid only for this graph generation.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L66).

## `ImportBuffer`

<a id="api-cac9e54107aaf47b"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.ImportBuffer(System.String,Inno.Rendering.PersistentBufferHandle,Inno.Rendering.RenderBufferDescriptor) a5cd33f3a86d46fc79288f4f58d14e1a526c72fcaacdf81a55921ab4aafba695 -->

```csharp
public Inno.Rendering.RenderBufferHandle Inno.Rendering.RenderGraphBuilder.ImportBuffer(string name, Inno.Rendering.PersistentBufferHandle buffer, Inno.Rendering.RenderBufferDescriptor descriptor)
```

Imports a persistent device buffer into the current graph.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `buffer`:** Persistent buffer owned by the active device generation.

**Parameter `descriptor`:** Buffer requirements and usage.

**Returns:** A frame-scoped handle for graph declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L150).

## `ImportTexture`

<a id="api-61419d6c51414f46"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.ImportTexture(System.String,Inno.Rendering.PersistentTextureHandle,Inno.Rendering.RenderTextureDescriptor) ef2eb906f602dbf9210b487329e9fb989cffc172883db6004f7254b56f14dcd4 -->

```csharp
public Inno.Rendering.RenderTextureHandle Inno.Rendering.RenderGraphBuilder.ImportTexture(string name, Inno.Rendering.PersistentTextureHandle texture, Inno.Rendering.RenderTextureDescriptor descriptor)
```

Imports a persistent device texture into the current graph.

**Parameter `name`:** Debug and diagnostic name.

**Parameter `texture`:** Persistent texture owned by the active device generation.

**Parameter `descriptor`:** Texture requirements and usage.

**Returns:** A frame-scoped handle for graph declarations.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L93).

## `MarkOutput`

<a id="api-fef051de37d58143"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.MarkOutput(Inno.Rendering.RenderBufferHandle) 96028d451f8c0a4b7a52fb3e225e26aa4509b3d2e2e5421eaa1fd388b2362edc -->

```csharp
public void Inno.Rendering.RenderGraphBuilder.MarkOutput(Inno.Rendering.RenderBufferHandle buffer)
```

Marks a buffer as a graph output that keeps its producers alive.

**Parameter `buffer`:** Output buffer.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L186).

## `MarkOutput`

<a id="api-e0a37552a6d44069"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.MarkOutput(Inno.Rendering.RenderTextureHandle) 820c40d9f6d320b1d2dfa7ae27c68a0dd2bc9d9ebbce92c19bf8bc5e8c239cc9 -->

```csharp
public void Inno.Rendering.RenderGraphBuilder.MarkOutput(Inno.Rendering.RenderTextureHandle texture)
```

Marks a texture as a graph output that keeps its producers alive.

**Parameter `texture`:** Output texture.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L174).

## `Validate`

<a id="api-5f267f393ea513fa"></a>
<!-- api: M:Inno.Rendering.RenderGraphBuilder.Validate 2c4488dbb3f8c0f189206e947fc5f1d5ad9253da6239e80693234f93111c280d -->

```csharp
public Inno.Rendering.RenderGraphValidationResult Inno.Rendering.RenderGraphBuilder.Validate()
```

Validates current declarations and caches their analysis without constructing an executable graph.

**Returns:** A frozen result for the current revision; subsequent mutations invalidate the cached analysis.


[Source declaration](https://github.com/Wolfiora/InnoEngine/blob/f1cb3f265d4ef4954ea73b8c2c87c7213cc4b0c5/src/services/rendering/Inno.Rendering/Graph/RenderGraphBuilder.cs#L341).
